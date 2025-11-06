const CACHE_NAME = 'calenderx-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Helper function for rounded rectangles (compatibility)
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Generate dynamic icon based on current date
function generateDynamicIcon(size = 192) {
  const canvas = new OffscreenCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Get current date info
  const now = new Date();
  const date = now.getDate();
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayName = dayNames[now.getDay()];

  // Enhanced gradient background (blue to cyan gradient)
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#0569fd');   // Deep Blue
  gradient.addColorStop(1, '#3fbef1');   // Light Blue/Cyan
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Main background rounded corners
  ctx.globalCompositeOperation = 'destination-in';
  roundRect(ctx, 0, 0, size, size, size * 0.15);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';

  // Large date number (main focus) - positioned higher
  ctx.fillStyle = 'white';
  ctx.font = `900 ${size * 0.45}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(date.toString(), size / 2, size * 0.42);

  // Day name below the date - larger text size
  ctx.fillStyle = 'white';
  ctx.font = `700 ${size * 0.16}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(dayName, size / 2, size * 0.72);

  return canvas.convertToBlob({ type: 'image/png' });
}

// Update app icon dynamically
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'UPDATE_ICON') {
    // Generate new icon
    const iconData = generateDynamicIcon(192);
    const icon512Data = generateDynamicIcon(512);
    
    // Store icon data in cache for later use
    caches.open(CACHE_NAME).then(cache => {
      const iconResponse192 = new Response(iconData);
      const iconResponse512 = new Response(icon512Data);
      cache.put('/dynamic-icon-192.png', iconResponse192);
      cache.put('/dynamic-icon-512.png', iconResponse512);
    });
  }
});

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});