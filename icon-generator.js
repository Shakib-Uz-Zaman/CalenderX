// Dynamic Icon Generator for Calendar PWA
class DynamicIconGenerator {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    // Helper function for rounded rectangles (compatibility)
    roundRect(x, y, width, height, radius) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.lineTo(x + width - radius, y);
        this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.ctx.lineTo(x + width, y + height - radius);
        this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.ctx.lineTo(x + radius, y + height);
        this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.ctx.lineTo(x, y + radius);
        this.ctx.quadraticCurveTo(x, y, x + radius, y);
        this.ctx.closePath();
    }

    // Generate icon with current date and day
    generateIcon(size = 192) {
        this.canvas.width = size;
        this.canvas.height = size;
        
        // Get current date info
        const now = new Date();
        const date = now.getDate();
        const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const dayName = dayNames[now.getDay()];

        // Clear canvas
        this.ctx.clearRect(0, 0, size, size);

        // Enhanced gradient background (blue to cyan gradient)
        const gradient = this.ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#0569fd');   // Deep Blue
        gradient.addColorStop(1, '#3fbef1');   // Light Blue/Cyan
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, size, size);

        // Add corner radius to main background
        this.ctx.globalCompositeOperation = 'destination-in';
        this.roundRect(0, 0, size, size, size * 0.15);
        this.ctx.fill();
        this.ctx.globalCompositeOperation = 'source-over';

        // Large date number (main focus) - positioned higher
        this.ctx.fillStyle = 'white';
        this.ctx.font = `900 ${size * 0.45}px Inter, -apple-system, BlinkMacSystemFont, sans-serif`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(date.toString(), size / 2, size * 0.42);

        // Day name below the date - larger text size
        this.ctx.fillStyle = 'white';
        this.ctx.font = `700 ${size * 0.16}px Inter, -apple-system, BlinkMacSystemFont, sans-serif`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(dayName, size / 2, size * 0.72);

        return this.canvas.toDataURL('image/png');
    }

    // Create and download icon files
    async createIconFiles() {
        const sizes = [192, 512, 180]; // 180 for Apple touch icon
        const icons = {};

        for (const size of sizes) {
            const iconData = this.generateIcon(size);
            icons[size] = iconData;
        }

        return icons;
    }

    // Update manifest with new icon data
    updateManifestIcons(icons) {
        const manifest = {
            "name": "Calendar App",
            "short_name": "Calendar",
            "description": "A modern calendar app with dynamic date display",
            "start_url": "/",
            "display": "standalone",
            "background_color": "#ffffff",
            "theme_color": "#007AFF",
            "orientation": "portrait-primary",
            "categories": ["productivity", "utilities"],
            "lang": "en",
            "dir": "ltr",
            "scope": "/",
            "icons": [
                {
                    "src": "data:image/png;base64," + icons[192].split(',')[1],
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any maskable"
                },
                {
                    "src": "data:image/png;base64," + icons[512].split(',')[1],
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any maskable"
                },
                {
                    "src": "data:image/png;base64," + icons[180].split(',')[1],
                    "sizes": "180x180",
                    "type": "image/png"
                }
            ]
        };

        return manifest;
    }
}

// Auto-update icon daily
class IconUpdater {
    constructor() {
        this.generator = new DynamicIconGenerator();
        this.lastUpdateDate = null;
        this.init();
    }

    init() {
        // Update icon immediately
        this.updateIcon();
        
        // Check for date change every minute
        setInterval(() => {
            this.checkAndUpdateIcon();
        }, 60000);

        // Update on visibility change (when app comes to foreground)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.checkAndUpdateIcon();
            }
        });
    }

    checkAndUpdateIcon() {
        const today = new Date().toDateString();
        if (this.lastUpdateDate !== today) {
            this.updateIcon();
        }
    }

    async updateIcon() {
        try {
            const icons = await this.generator.createIconFiles();
            const manifest = this.generator.updateManifestIcons(icons);
            
            // Update favicon
            this.updateFavicon(icons[192]);
            
            // Update Apple touch icon
            this.updateAppleTouchIcon(icons[180]);
            
            // Store in localStorage for PWA
            localStorage.setItem('dynamicManifest', JSON.stringify(manifest));
            localStorage.setItem('lastIconUpdate', new Date().toDateString());
            
            this.lastUpdateDate = new Date().toDateString();
            
            console.log('Icon updated for date:', this.lastUpdateDate);
        } catch (error) {
            console.error('Failed to update icon:', error);
        }
    }

    updateFavicon(iconData) {
        // Remove existing favicon
        const existingFavicon = document.querySelector('link[rel="icon"]');
        if (existingFavicon) {
            existingFavicon.remove();
        }

        // Add new favicon
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = iconData;
        document.head.appendChild(favicon);
    }

    updateAppleTouchIcon(iconData) {
        // Remove existing Apple touch icon
        const existingIcon = document.querySelector('link[rel="apple-touch-icon"]');
        if (existingIcon) {
            existingIcon.remove();
        }

        // Add new Apple touch icon
        const appleIcon = document.createElement('link');
        appleIcon.rel = 'apple-touch-icon';
        appleIcon.href = iconData;
        document.head.appendChild(appleIcon);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IconUpdater();
});

// Export for use in service worker
if (typeof self !== 'undefined') {
    self.DynamicIconGenerator = DynamicIconGenerator;
}