class Calendar {
    constructor() {
        const today = new Date();
        this.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
        this.selectedDate = new Date(today);
        this.monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Detailed holiday information in English
        this.holidayDetails = {
            'Pohela Boishakh': {
                title: 'Pohela Boishakh',
                date: 'April 14',
                description: 'The first day of the Bengali New Year. This is the most important cultural festival of Bangladesh. It has been a public holiday since 1972. Mughal Emperor Akbar introduced the Bengali calendar in 1584 for tax collection purposes.',
                significance: 'New account books are opened, new clothes are worn, and there is a tradition of eating panta-ilish. Chhayanaut organizes programs at Ramna Batamul.'
            },
            'Eid ul-Fitr': {
                title: 'Eid ul-Fitr',
                date: 'April 30 (Approximate)',
                description: 'The biggest religious festival of Muslims at the end of the holy month of Ramadan. It is a day of celebration after fasting. Muslims around the world observe this day.',
                significance: 'Eid prayers are performed, zakat is paid, new clothes are worn and sweets are distributed. Social bonds are strengthened through mutual forgiveness and embracing.'
            },
            'Victory Day': {
                title: 'Victory Day',
                date: 'December 16',
                description: 'On this day in 1971, the Pakistani army surrendered and Bangladesh became independent. This is the victory day of the 9-month bloody liberation war.',
                significance: 'National parades are held, martyrs are remembered and freedom fighters are honored. The historic site of Pakistani army surrender at Saver Point is preserved as a memorial.'
            },
            'Independence Day': {
                title: 'Independence Day',
                date: 'March 26',
                description: 'On this day in 1971, Bangabandhu Sheikh Mujibur Rahman declared the independence of Bangladesh. The liberation war started from this day.',
                significance: 'The day is observed through national parades, flag hoisting and paying tribute to the martyrs. Flowers are offered at the National Memorial in Savar.'
            },
            'Shaheed Day & International Mother Language Day': {
                title: 'Shaheed Day & International Mother Language Day',
                date: 'February 21',
                description: 'On this day in 1952, many including Salam, Barkat, Rafiq, Jabbar were martyred for the demand of Bengali language. UNESCO declared it as International Mother Language Day in 1999.',
                significance: 'Offering flowers at the Central Shaheed Minar, dawn processions and promotion of Bengali language and culture are the highlights of this day. The importance of mother language is highlighted worldwide.'
            },
            'National Mourning Day': {
                title: 'National Mourning Day',
                date: 'August 15',
                description: 'On this day in 1975, the Father of the Nation Bangabandhu Sheikh Mujibur Rahman and his family members were killed. This is the darkest day in Bangladesh history.',
                significance: 'National flags are kept at half-mast throughout the country, tributes are paid at Bangabandhu\'s tomb and his ideals and contributions are remembered.'
            },
            'May Day': {
                title: 'May Day',
                date: 'May 1',
                description: 'International Workers\' Day. This day is observed in memory of the workers\' movement for 8-hour work in Chicago, America in 1886.',
                significance: 'Demands are raised for workers\' rights, fair wages and improvement of working conditions. Various labor organizations organize rallies and meetings.'
            },
            'Christmas Day': {
                title: 'Christmas Day',
                date: 'December 25',
                description: 'The holiest day of the Christian community. Celebrated as the birthday of Jesus Christ. It is a public holiday in Bangladesh.',
                significance: 'The day is celebrated through special prayers in churches, decorating Christmas trees, gift distribution and family reunions.'
            },
            'New Year\'s Day': {
                title: 'New Year\'s Day',
                date: 'January 1',
                description: 'The first day of the English New Year. The beginning of a new year according to the Gregorian calendar. Celebrated worldwide.',
                significance: 'Observed through new year resolutions, fireworks displays, family gatherings and exchanging new year greetings.'
            },
            'World Braille Day': {
                title: 'World Braille Day',
                date: 'January 4',
                description: 'A day to highlight the importance of the Braille system for education and communication of visually impaired people. Celebrated on Louis Braille\'s birthday.',
                significance: 'Raises awareness about the rights of the blind, promotes Braille education and contributes to building an inclusive society.'
            },
            'National Youth Day': {
                title: 'National Youth Day',
                date: 'January 12',
                description: 'Celebrated on the birthday of Swami Vivekananda. A day to recognize the strength and potential of youth.',
                significance: 'Develops leadership qualities among youth, awakens patriotism and creates social responsibility.'
            },
            'Republic Day': {
                title: 'Republic Day',
                date: 'January 26',
                description: 'The day India\'s Constitution came into effect. A day of recognition of democratic values and constitutional rights.',
                significance: 'Shows respect for constitutional values, holds national parades and plays a role in awakening patriotism.'
            },
            'World Cancer Day': {
                title: 'World Cancer Day',
                date: 'February 4',
                description: 'A day to raise awareness about cancer and promote prevention methods. Declared by the Union for International Cancer Control.',
                significance: 'Creates awareness in cancer prevention, improving medical facilities and providing mental support to patients.'
            },
            'Valentine\'s Day': {
                title: 'Valentine\'s Day',
                date: 'February 14',
                description: 'A day of love and affection. Celebrated in memory of Saint Valentine. Couples worldwide celebrate this day.',
                significance: 'A day for expressing love between lovers and couples, exchanging gifts and sharing romantic moments.'
            },
            'International Women\'s Day': {
                title: 'International Women\'s Day',
                date: 'March 8',
                description: 'A day of struggle for women\'s rights and equality. Observed in memory of the women workers\' movement in New York in 1908.',
                significance: 'Plays a role in women\'s empowerment, establishing gender equality and establishing women\'s social, political and economic rights.'
            },
            'International Day of Happiness': {
                title: 'International Day of Happiness',
                date: 'March 20',
                description: 'The United Nations declared this day in 2012. Emphasizes the importance of happiness in human life and mental health.',
                significance: 'Inspires mental health awareness, positive outlook and contribution to social welfare.'
            },
            'World Water Day': {
                title: 'World Water Day',
                date: 'March 22',
                description: 'A day to raise awareness about the importance of water and conservation. The United Nations declared this day in 1993.',
                significance: 'Creates awareness about water conservation, availability of safe water and prevention of water pollution.'
            },
            'World Health Day': {
                title: 'World Health Day',
                date: 'April 7',
                description: 'Anniversary of the establishment of the World Health Organization. WHO was established in 1948. A day to increase health awareness.',
                significance: 'Highlights the importance of public health awareness, disease prevention and healthy living.'
            },
            'Earth Day': {
                title: 'Earth Day',
                date: 'April 22',
                description: 'A day of environmental conservation and awareness. First observed in 1970. A call for climate change and environmental protection.',
                significance: 'Encourages environmental conservation, tree planting, reducing plastic use and sustainable development.'
            },
            'World Press Freedom Day': {
                title: 'World Press Freedom Day',
                date: 'May 3',
                description: 'A day for media freedom and journalist safety. UNESCO declared this day in 1993.',
                significance: 'Plays a role in protecting freedom of expression, journalistic ethics and democratic values.'
            },
            'International Nurses Day': {
                title: 'International Nurses Day',
                date: 'May 12',
                description: 'Celebrated on the birthday of Florence Nightingale. A day of recognition of nurses\' contribution and sacrifice.',
                significance: 'Highlights the contribution of nurses in healthcare, humanity in patient care and the importance of the medical profession.'
            },
            'World No Tobacco Day': {
                title: 'World No Tobacco Day',
                date: 'May 31',
                description: 'A day to raise awareness about the harmful effects of tobacco. WHO declared this day in 1987.',
                significance: 'Encourages quitting smoking, prevents tobacco-related diseases and plays a role in protecting public health.'
            },
            'World Environment Day': {
                title: 'World Environment Day',
                date: 'June 5',
                description: 'The largest international day for environmental conservation. The United Nations declared this day in 1974.',
                significance: 'Inspires to work towards preventing environmental pollution, biodiversity conservation and sustainable development.'
            },
            'World Oceans Day': {
                title: 'World Oceans Day',
                date: 'June 8',
                description: 'A day for marine and aquatic environment conservation. The United Nations officially recognized this day in 2008.',
                significance: 'Raises awareness about preventing marine pollution, protecting fisheries and the role of oceans in climate control.'
            },
            'World Elder Abuse Awareness Day': {
                title: 'World Elder Abuse Awareness Day',
                date: 'June 15',
                description: 'A day to prevent abuse against elderly people and protect their rights. The United Nations declared this day in 2006.',
                significance: 'Helps ensure respect for the elderly, their safety and the right to dignified living.'
            },
            'Muharram': {
                title: 'Muharram',
                date: 'January 1 (Approximate)',
                description: 'The first month of the Islamic calendar. It is one of the sacred months. Very important to Muslims.',
                significance: 'Observed as a month of spiritual revival, repentance and concentration on worship.'
            },
            'Shab-e-Miraj': {
                title: 'Shab-e-Miraj',
                date: 'March 12 (Approximate)',
                description: 'The night of Prophet Muhammad\'s (PBUH) ascension. On this night he met Allah and received the commandment of prayer.',
                significance: 'The night is spent through special voluntary prayers, supplications and spiritual contemplation.'
            },
            'Start of Ramadan': {
                title: 'Start of Ramadan',
                date: 'March 29 (Approximate)',
                description: 'The beginning of the holy month of Ramadan in Islam. During this month Muslims fast from sunrise to sunset.',
                significance: 'A month of self-purification, patience, self-control and increasing compassion for the poor.'
            },
            'Laylat al-Qadr': {
                title: 'Laylat al-Qadr',
                date: 'April 28 (Approximate)',
                description: 'The night of the revelation of the Holy Quran. This night is better than a thousand months. One of the odd nights of the last decade of Ramadan.',
                significance: 'A night of special worship, Quran recitation, prayers and seeking forgiveness from Allah.'
            },
            'Eid ul-Adha': {
                title: 'Eid ul-Adha',
                date: 'July 7 (Approximate)',
                description: 'A festival celebrated in memory of the sacrifice of Prophet Ibrahim (AS). Celebrated during Hajj. Also known as the Festival of Sacrifice.',
                significance: 'Offering sacrifice, performing Hajj, distributing meat among the poor and expressing obedience to Allah.'
            },
            'Ashura': {
                title: 'Ashura',
                date: 'July 28 (Approximate)',
                description: 'The 10th of Muharram. The day of martyrdom of Hazrat Hussein (RA). An important day in Islamic history.',
                significance: 'Mourning, special prayers and remembrance of Islamic history and martyrs.'
            },
            'Mawlid al-Nabi': {
                title: 'Mawlid al-Nabi',
                date: 'October 5 (Approximate)',
                description: 'Birthday of Prophet Muhammad (PBUH). The 12th of Rabi al-Awwal. Muslims worldwide observe this day.',
                significance: 'Discussion of the biography of the Prophet (PBUH), Milad gatherings and commitment to follow his ideals.'
            },
            'World Population Day': {
                title: 'World Population Day',
                date: 'July 11',
                description: 'A day of awareness about population growth and its impact. The United Nations declared this day in 1989.',
                significance: 'Highlights the importance of planned family, population control and sustainable development.'
            },
            'Nelson Mandela Day': {
                title: 'Nelson Mandela Day',
                date: 'July 18',
                description: 'Birthday of Nelson Mandela, the great leader of South Africa. Symbol of anti-apartheid struggle.',
                significance: 'Promotes ideals of human rights, equality and justice and encourages service work.'
            },
            'World Hepatitis Day': {
                title: 'World Hepatitis Day',
                date: 'July 28',
                description: 'A day to raise awareness about hepatitis. WHO declared this day in 2010.',
                significance: 'Helps prevent hepatitis, vaccination programs and ensure medical care for those affected.'
            },
            'International Day of Indigenous Peoples': {
                title: 'International Day of Indigenous Peoples',
                date: 'August 9',
                description: 'A day to protect the rights and culture of indigenous peoples. The United Nations declared this day in 1994.',
                significance: 'Plays a role in indigenous land rights, cultural heritage preservation and establishing their dignity.'
            },
            'International Youth Day': {
                title: 'International Youth Day',
                date: 'August 12',
                description: 'A day to highlight the challenges and potential of global youth. The United Nations declared this day in 1999.',
                significance: 'Encourages youth education, employment and social participation.'
            },
            'World Humanitarian Day': {
                title: 'World Humanitarian Day',
                date: 'August 19',
                description: 'A day celebrated in honor of humanitarian workers. In memory of the attack on the UN office in Baghdad in 2003.',
                significance: 'Promotes service to distressed people, refugee assistance and humanitarian values.'
            },
            'International Literacy Day': {
                title: 'International Literacy Day',
                date: 'September 8',
                description: 'A day to highlight the importance of education and literacy. UNESCO declared this day in 1965.',
                significance: 'Promotes eradication of illiteracy, expansion of primary education and the importance of lifelong learning.'
            },
            'International Day of Peace': {
                title: 'International Day of Peace',
                date: 'September 21',
                description: 'A day for world peace and ending violence. The United Nations declared this day in 1981.',
                significance: 'Promotes ceasefire observance, peace building and diplomatic solutions to conflict resolution.'
            },
            'World Tourism Day': {
                title: 'World Tourism Day',
                date: 'September 27',
                description: 'A day to promote the importance of tourism industry and sustainable tourism. The United Nations declared this day in 1980.',
                significance: 'Highlights the importance of cultural exchange, economic development and environmentally friendly tourism.'
            },
            'International Day of Older Persons': {
                title: 'International Day of Older Persons',
                date: 'October 1',
                description: 'A day of recognition of older persons\' contribution and rights. The United Nations declared this day in 1990.',
                significance: 'Encourages respect for the elderly, ensuring healthcare and making good use of their experience.'
            },
            'World Teachers Day': {
                title: 'World Teachers Day',
                date: 'October 5',
                description: 'A day of recognition of teachers\' contribution and sacrifice. UNESCO declared this day in 1994.',
                significance: 'Plays a role in improving the quality of education, teacher training and improvement of the education system.'
            },
            'World Mental Health Day': {
                title: 'World Mental Health Day',
                date: 'October 10',
                description: 'A day to raise awareness about mental health. The World Mental Health Federation declared this day in 1992.',
                significance: 'Promotes removal of stigma of mental illness, availability of medical services and the importance of mental well-being.'
            },
            'World Food Day': {
                title: 'World Food Day',
                date: 'October 16',
                description: 'A day for food security and hunger eradication. Celebrated on the founding day of FAO.',
                significance: 'Helps build a hunger-free world, agricultural development and ensure availability of nutritious food.'
            },
            'United Nations Day': {
                title: 'United Nations Day',
                date: 'October 24',
                description: 'The day the United Nations Charter came into effect. The United Nations was established in 1945.',
                significance: 'Inspires international cooperation, peace building and working together to solve global problems.'
            },
            'World Diabetes Day': {
                title: 'World Diabetes Day',
                date: 'November 14',
                description: 'A day of awareness about diabetes. Celebrated on the birthday of insulin discoverer Frederick Banting.',
                significance: 'Promotes diabetes prevention, control methods and the importance of healthy living.'
            },
            'International Day of Tolerance': {
                title: 'International Day of Tolerance',
                date: 'November 16',
                description: 'A day of tolerance and religious harmony. UNESCO declared this day in 1995.',
                significance: 'Highlights the importance of respect for diversity, communal harmony and peaceful coexistence.'
            },
            'Universal Children\'s Day': {
                title: 'Universal Children\'s Day',
                date: 'November 20',
                description: 'A day for children\'s rights and welfare. The United Nations declared this day in 1954.',
                significance: 'Plays a role in protecting children\'s rights, educational opportunities and ensuring children\'s safety.'
            },
            'International Day Against Violence Against Women': {
                title: 'International Day Against Violence Against Women',
                date: 'November 25',
                description: 'A day to prevent violence against women. The United Nations declared this day in 1999.',
                significance: 'Creates awareness to stop violence against women, legal protection and ensure women\'s safety.'
            },
            'World AIDS Day': {
                title: 'World AIDS Day',
                date: 'December 1',
                description: 'A day of awareness about HIV/AIDS. WHO declared this day in 1988.',
                significance: 'Plays a role in preventing AIDS, showing compassion to those affected and building a stigma-free society.'
            },
            'International Day of Disabled Persons': {
                title: 'International Day of Disabled Persons',
                date: 'December 3',
                description: 'A day for the rights and equality of disabled persons. The United Nations declared this day in 1992.',
                significance: 'Helps inclusion of disabled persons, equal opportunities and recognition of their contributions.'
            },
            'Human Rights Day': {
                title: 'Human Rights Day',
                date: 'December 10',
                description: 'The day the Universal Declaration of Human Rights was adopted. The United Nations adopted it in 1948.',
                significance: 'Plays a role in protecting human rights, respecting freedom and dignity and establishing justice.'
            },
            'International Migrants Day': {
                title: 'International Migrants Day',
                date: 'December 18',
                description: 'A day of recognition of migrants\' rights and contributions. The United Nations declared this day in 2000.',
                significance: 'Plays a role in humane treatment of migrants, recognition of their contributions and development of migration policies.'
            },
            'Rare Disease Day': {
                title: 'Rare Disease Day',
                date: 'February 29',
                description: 'A day of awareness and support for those affected by rare diseases. The European Organization for Rare Diseases started this day in 2008.',
                significance: 'Plays a role in rare disease research, improving medical facilities and providing social support to patients.'
            }
        };
        
        // Bangladesh holidays and special days
        this.holidays = {
            // Fixed date holidays (same date every year)
            fixed: [
                // Bangladesh national days
                { month: 2, day: 21, name: 'Shaheed Day & International Mother Language Day', type: 'national' },
                { month: 3, day: 26, name: 'Independence Day', type: 'national' },
                { month: 5, day: 1, name: 'May Day', type: 'national' },
                { month: 8, day: 15, name: 'National Mourning Day', type: 'national' },
                { month: 12, day: 16, name: 'Victory Day', type: 'national' },
                { month: 12, day: 25, name: 'Christmas Day', type: 'religious' },
                
                // International days
                { month: 1, day: 1, name: 'New Year\'s Day', type: 'international' },
                { month: 1, day: 4, name: 'World Braille Day', type: 'international' },
                { month: 1, day: 12, name: 'National Youth Day', type: 'national' },
                { month: 1, day: 26, name: 'Republic Day', type: 'national' },
                { month: 2, day: 4, name: 'World Cancer Day', type: 'international' },
                { month: 2, day: 14, name: 'Valentine\'s Day', type: 'cultural' },
                { month: 2, day: 29, name: 'Rare Disease Day', type: 'international' },
                { month: 3, day: 8, name: 'International Women\'s Day', type: 'international' },
                { month: 3, day: 20, name: 'International Day of Happiness', type: 'international' },
                { month: 3, day: 22, name: 'World Water Day', type: 'international' },
                { month: 4, day: 7, name: 'World Health Day', type: 'international' },
                { month: 4, day: 14, name: 'Pohela Boishakh', type: 'cultural' },
                { month: 4, day: 22, name: 'Earth Day', type: 'international' },
                { month: 5, day: 3, name: 'World Press Freedom Day', type: 'international' },
                { month: 5, day: 12, name: 'International Nurses Day', type: 'international' },
                { month: 5, day: 31, name: 'World No Tobacco Day', type: 'international' },
                { month: 6, day: 5, name: 'World Environment Day', type: 'international' },
                { month: 6, day: 8, name: 'World Oceans Day', type: 'international' },
                { month: 6, day: 15, name: 'World Elder Abuse Awareness Day', type: 'international' },
                { month: 7, day: 11, name: 'World Population Day', type: 'international' },
                { month: 7, day: 18, name: 'Nelson Mandela Day', type: 'international' },
                { month: 7, day: 28, name: 'World Hepatitis Day', type: 'international' },
                { month: 8, day: 9, name: 'International Day of Indigenous Peoples', type: 'international' },
                { month: 8, day: 12, name: 'International Youth Day', type: 'international' },
                { month: 8, day: 19, name: 'World Humanitarian Day', type: 'international' },
                { month: 9, day: 8, name: 'International Literacy Day', type: 'international' },
                { month: 9, day: 21, name: 'International Day of Peace', type: 'international' },
                { month: 9, day: 27, name: 'World Tourism Day', type: 'international' },
                { month: 10, day: 1, name: 'International Day of Older Persons', type: 'international' },
                { month: 10, day: 5, name: 'World Teachers Day', type: 'international' },
                { month: 10, day: 10, name: 'World Mental Health Day', type: 'international' },
                { month: 10, day: 16, name: 'World Food Day', type: 'international' },
                { month: 10, day: 24, name: 'United Nations Day', type: 'international' },
                { month: 11, day: 14, name: 'World Diabetes Day', type: 'international' },
                { month: 11, day: 16, name: 'International Day of Tolerance', type: 'international' },
                { month: 11, day: 20, name: 'Universal Children\'s Day', type: 'international' },
                { month: 11, day: 25, name: 'International Day Against Violence Against Women', type: 'international' },
                { month: 12, day: 1, name: 'World AIDS Day', type: 'international' },
                { month: 12, day: 3, name: 'International Day of Disabled Persons', type: 'international' },
                { month: 12, day: 10, name: 'Human Rights Day', type: 'international' },
                { month: 12, day: 18, name: 'International Migrants Day', type: 'international' }
            ],
            
            // Islamic holidays (lunar calendar, approximate for 2025)
            islamic: [
                { month: 1, day: 1, name: 'Muharram', type: 'religious' },
                { month: 3, day: 12, name: 'Shab-e-Miraj', type: 'religious' },
                { month: 3, day: 29, name: 'Start of Ramadan', type: 'religious' },
                { month: 4, day: 28, name: 'Laylat al-Qadr', type: 'religious' },
                { month: 4, day: 30, name: 'Eid ul-Fitr', type: 'religious' },
                { month: 7, day: 7, name: 'Eid ul-Adha', type: 'religious' },
                { month: 7, day: 28, name: 'Ashura', type: 'religious' },
                { month: 10, day: 5, name: 'Mawlid al-Nabi', type: 'religious' }
            ]
        };
        
        this.initializeElements();
        this.attachEventListeners();
        this.render();
        this.updateTodaySection();
    }

    // ছুটির দিন চেক করার method
    getHolidayInfo(date) {
        const month = date.getMonth() + 1; // JavaScript months are 0-indexed
        const day = date.getDate();
        
        // ফিক্সড ছুটির দিন চেক করি
        const fixedHoliday = this.holidays.fixed.find(holiday => 
            holiday.month === month && holiday.day === day
        );
        
        if (fixedHoliday) {
            return fixedHoliday;
        }
        
        // ইসলামিক ছুটির দিন চেক করি (২০২৫ সালের জন্য)
        const islamicHoliday = this.holidays.islamic.find(holiday => 
            holiday.month === month && holiday.day === day
        );
        
        if (islamicHoliday) {
            return islamicHoliday;
        }
        
        return null;
    }

    // Short holiday names for better display
    getShortHolidayName(fullName) {
        const shortNames = {
            'Shaheed Day & International Mother Language Day': 'Shaheed Day',
            'Independence Day': 'Independence',
            'May Day': 'May Day',
            'National Mourning Day': 'Mourning Day',
            'Victory Day': 'Victory Day',
            'Christmas Day': 'Christmas',
            'New Year\'s Day': 'New Year',
            'World Braille Day': 'Braille Day',
            'National Youth Day': 'Youth Day',
            'Republic Day': 'Republic Day',
            'World Cancer Day': 'Cancer Day',
            'Valentine\'s Day': 'Valentine',
            'Rare Disease Day': 'Rare Disease',
            'International Women\'s Day': 'Women\'s Day',
            'International Day of Happiness': 'Happiness Day',
            'World Water Day': 'Water Day',
            'World Health Day': 'Health Day',
            'Pohela Boishakh': 'Pohela Boishakh',
            'Earth Day': 'Earth Day',
            'World Press Freedom Day': 'Press Freedom',
            'International Nurses Day': 'Nurses Day',
            'World No Tobacco Day': 'No Tobacco',
            'World Environment Day': 'Environment',
            'World Oceans Day': 'Oceans Day',
            'World Elder Abuse Awareness Day': 'Elder Abuse',
            'World Population Day': 'Population',
            'Nelson Mandela Day': 'Mandela Day',
            'World Hepatitis Day': 'Hepatitis',
            'International Day of Indigenous Peoples': 'Indigenous',
            'International Youth Day': 'Youth Day',
            'World Humanitarian Day': 'Humanitarian',
            'International Literacy Day': 'Literacy Day',
            'International Day of Peace': 'Peace Day',
            'World Tourism Day': 'Tourism',
            'International Day of Older Persons': 'Older Persons',
            'World Teachers Day': 'Teachers Day',
            'World Mental Health Day': 'Mental Health',
            'World Food Day': 'Food Day',
            'United Nations Day': 'UN Day',
            'World Diabetes Day': 'Diabetes',
            'International Day of Tolerance': 'Tolerance',
            'Universal Children\'s Day': 'Children\'s Day',
            'International Day Against Violence Against Women': 'Against Violence',
            'World AIDS Day': 'AIDS Day',
            'International Day of Disabled Persons': 'Disabled Persons',
            'Human Rights Day': 'Human Rights',
            'International Migrants Day': 'Migrants Day',
            'Muharram': 'Muharram',
            'Shab-e-Miraj': 'Shab-e-Miraj',
            'Start of Ramadan': 'Ramadan',
            'Laylat al-Qadr': 'Laylat al-Qadr',
            'Eid ul-Fitr': 'Eid ul-Fitr',
            'Eid ul-Adha': 'Eid ul-Adha',
            'Ashura': 'Ashura',
            'Mawlid al-Nabi': 'Mawlid'
        };
        
        return shortNames[fullName] || fullName;
    }

    initializeElements() {
        this.monthYearElement = document.getElementById('monthYear');
        this.calendarGridElement = document.getElementById('calendarGrid');
        this.prevMonthButton = document.getElementById('prevMonth');
        this.nextMonthButton = document.getElementById('nextMonth');
        this.todayDateElement = document.getElementById('todayDate');
        this.todayDetailsElement = document.getElementById('todayDetails');
    }

    attachEventListeners() {
        this.prevMonthButton.addEventListener('click', () => this.previousMonth());
        this.nextMonthButton.addEventListener('click', () => this.nextMonth());
        
        // Add touch/swipe support for calendar grid
        this.initializeSwipeSupport();
    }

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.render();
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.render();
    }

    initializeSwipeSupport() {
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let isScrolling = false;
        let isDragging = false;
        let swipeStartTime = 0;
        let lastMoveTime = 0;
        let velocity = 0;
        let lastVelocities = [];
        
        const calendarContainer = document.querySelector('.calendar-container');
        const calendarGrid = this.calendarGridElement;
        
        // Professional touch handling
        calendarContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            currentX = startX;
            isScrolling = false;
            isDragging = false;
            swipeStartTime = Date.now();
            lastMoveTime = swipeStartTime;
            velocity = 0;
            lastVelocities = [];
            
            // Clean any existing animations
            this.cleanupAnimations();
            
            // Subtle haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(1);
            }
        }, { passive: true });
        
        // Enhanced touch move with professional drag feel
        calendarContainer.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;
            
            currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            const diffX = currentX - startX;
            const diffY = Math.abs(currentY - startY);
            
            // Calculate smooth velocity with averaging
            const currentTime = Date.now();
            const timeDiff = currentTime - lastMoveTime;
            if (timeDiff > 0) {
                const currentVelocity = Math.abs(diffX) / timeDiff;
                lastVelocities.push(currentVelocity);
                if (lastVelocities.length > 5) lastVelocities.shift();
                velocity = lastVelocities.reduce((a, b) => a + b) / lastVelocities.length;
            }
            lastMoveTime = currentTime;
            
            // Improved scroll detection
            if (diffY > Math.abs(diffX) * 1.5 && !isDragging) {
                isScrolling = true;
                return;
            }
            
            // Start standard dragging with preview
            if (Math.abs(diffX) > 10 && !isScrolling) {
                isDragging = true;
                calendarGrid.classList.add('dragging');
                e.preventDefault();
                
                // Standard drag physics
                const containerWidth = calendarContainer.offsetWidth;
                const maxDrag = containerWidth * 0.25;
                let resistance = 0.5;
                
                let dragAmount = diffX * resistance;
                
                // Simple rubber band effect
                if (Math.abs(dragAmount) > maxDrag) {
                    const excess = Math.abs(dragAmount) - maxDrag;
                    const rubberBand = maxDrag + (excess * 0.1);
                    dragAmount = dragAmount > 0 ? rubberBand : -rubberBand;
                }
                
                // Apply transform
                calendarGrid.style.transform = `translateX(${dragAmount}px)`;
            }
        }, { passive: false });
        
        // Professional swipe completion
        calendarContainer.addEventListener('touchend', (e) => {
            if (!startX || !startY || isScrolling) {
                this.resetDragState();
                return;
            }
            
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            const swipeDuration = Date.now() - swipeStartTime;
            const distance = Math.abs(diffX);
            const containerWidth = calendarContainer.offsetWidth;
            
            // Reset visual state
            this.resetDragState();
            
            // Standard swipe thresholds
            const velocityThreshold = 0.5;
            const distanceThreshold = containerWidth * 0.2;
            const quickSwipeMinDistance = containerWidth * 0.1;
            
            const isQuickSwipe = velocity > velocityThreshold && distance > quickSwipeMinDistance;
            const isLongSwipe = distance > distanceThreshold;
            
            if (isQuickSwipe || isLongSwipe) {
                // Simple month change without animation
                if (diffX > 0) {
                    this.nextMonth();
                } else {
                    this.previousMonth();
                }
                
                // Haptic feedback
                if (window.navigator && window.navigator.vibrate) {
                    window.navigator.vibrate([8, 3, 5]);
                }
            }
            
            this.resetDragState();
        }, { passive: true });
        
        // Enhanced mouse support for desktop
        let isMouseDown = false;
        let mouseStartX = 0;
        
        calendarContainer.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            mouseStartX = e.clientX;
            calendarContainer.style.cursor = 'grabbing';
            calendarContainer.style.userSelect = 'none';
            this.cleanupAnimations();
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            
            const diffX = e.clientX - mouseStartX;
            const containerWidth = calendarContainer.offsetWidth;
            const maxDrag = containerWidth * 0.2;
            
            // Standard mouse drag resistance
            let resistance = 0.4;
            
            const dragAmount = diffX * resistance;
            
            calendarGrid.style.transform = `translateX(${dragAmount}px)`;
            calendarGrid.classList.add('dragging');
            
            e.preventDefault();
        });
        
        document.addEventListener('mouseup', (e) => {
            if (!isMouseDown) return;
            
            const diffX = mouseStartX - e.clientX;
            const containerWidth = calendarContainer.offsetWidth;
            
            this.resetDragState();
            
            if (Math.abs(diffX) > containerWidth * 0.15) {
                if (diffX > 0) {
                    this.nextMonth();
                } else {
                    this.previousMonth();
                }
            }
            
            isMouseDown = false;
        });
    }
    
    resetDragState() {
        const calendarGrid = this.calendarGridElement;
        const calendarContainer = document.querySelector('.calendar-container');
        
        calendarGrid.classList.remove('dragging');
        calendarGrid.style.transform = '';
        calendarGrid.style.opacity = '';
        calendarContainer.style.cursor = '';
        calendarContainer.style.userSelect = '';
    }
    
    cleanupAnimations() {
        const calendarGrid = this.calendarGridElement;
        calendarGrid.classList.remove('preparing', 'dragging');
        calendarGrid.style.transform = '';
        calendarGrid.style.opacity = '';
        calendarGrid.style.willChange = '';
    }


    
    performProfessionalTransition(direction) {
        const calendarGrid = this.calendarGridElement;
        const calendarContainer = document.querySelector('.calendar-container');
        
        // Clean up any existing states
        this.cleanupAnimations();
        
        // Add preparing state to prevent interactions
        calendarGrid.classList.add('preparing');
        
        // Simple month change without animation
        if (direction === 'next') {
            this.nextMonth();
        } else {
            this.previousMonth();
        }
    }
    




    render() {
        this.updateMonthYear();
        this.generateCalendarDays();
        this.updateImportantDays();
    }

    updateMonthYear() {
        const monthName = this.monthNames[this.currentDate.getMonth()];
        const year = this.currentDate.getFullYear();
        this.monthYearElement.textContent = `${monthName} ${year}`;
    }

    generateCalendarDays() {
        // Clear previous calendar days
        this.calendarGridElement.innerHTML = '';

        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Get the first and last day of the month
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        // Find the starting Sunday for the calendar grid
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        // Generate calendar grid (6 weeks)
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = this.createDayElement(date, month);
            
            // Only append if the element is not null (current month only)
            if (dayElement) {
                this.calendarGridElement.appendChild(dayElement);
            } else {
                // Create empty div for spacing to maintain grid structure
                const emptyElement = document.createElement('div');
                emptyElement.className = 'calendar-day empty';
                this.calendarGridElement.appendChild(emptyElement);
            }
        }
    }

    createDayElement(date, currentMonth) {
        // Only show dates from the current month
        if (date.getMonth() !== currentMonth) {
            return null; // Return null for other month dates
        }
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Create main date number
        const dateNumber = document.createElement('span');
        dateNumber.className = 'date-number';
        dateNumber.textContent = date.getDate();
        dayElement.appendChild(dateNumber);
        
        // Check if it's today
        const today = new Date();
        if (this.isSameDate(date, today)) {
            dayElement.classList.add('today');
        }
        
        // Check if it's the selected date
        if (this.isSameDate(date, this.selectedDate)) {
            dayElement.classList.add('selected');
        }
        
        // Check for holidays
        const holidayInfo = this.getHolidayInfo(date);
        if (holidayInfo) {
            // Only apply special styling to national, religious, and cultural holidays
            // International holidays appear as normal dates with just the name
            if (holidayInfo.type === 'international') {
                dayElement.classList.add('holiday-regular');
            } else {
                dayElement.classList.add('holiday', holidayInfo.type);
            }
            
            // Add holiday name as tooltip
            dayElement.title = holidayInfo.name;
            
            // Create holiday name element always visible below date
            const holidayName = document.createElement('div');
            holidayName.className = 'holiday-name-visible';
            // Create shorter names for better display
            const shortName = this.getShortHolidayName(holidayInfo.name);
            holidayName.textContent = shortName;
            dayElement.appendChild(holidayName);
        }
        
        // Add click event listener
        dayElement.addEventListener('click', () => {
            this.selectDate(date);
        });
        
        return dayElement;
    }

    selectDate(date) {
        this.selectedDate = new Date(date);
        this.render(); // Re-render to update selected state
        // Remove updateTodaySection() call - today section should only show current date
        
        // Trigger selection animation for the newly selected date (only if not today)
        setTimeout(() => {
            const selectedElement = document.querySelector('.calendar-day.selected:not(.today)');
            if (selectedElement) {
                selectedElement.style.animation = 'none';
                selectedElement.offsetHeight; // Trigger reflow
                selectedElement.style.animation = 'dateSelected 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        }, 10);
    }

    updateTodaySection() {
        // Always use the actual current date, not the selected date
        const today = new Date();
        const day = today.getDate();
        const monthName = this.monthNames[today.getMonth()];
        const dayName = this.dayNames[today.getDay()];
        
        this.todayDateElement.textContent = day;
        this.todayDetailsElement.textContent = `${monthName}, ${dayName}`;
    }

    updateImportantDays() {
        const currentMonth = this.currentDate.getMonth() + 1;
        const currentYear = this.currentDate.getFullYear();
        
        // Get holidays for current month
        const monthlyHolidays = [];
        
        // Check fixed holidays
        this.holidays.fixed.forEach(holiday => {
            if (holiday.month === currentMonth) {
                monthlyHolidays.push(holiday);
            }
        });
        
        // Check Islamic holidays
        this.holidays.islamic.forEach(holiday => {
            if (holiday.month === currentMonth) {
                monthlyHolidays.push(holiday);
            }
        });
        
        // Get user events for current month
        const userEvents = UserEventsManager.getEventsForMonth(currentYear, this.currentDate.getMonth());
        
        // Add user events to the list
        userEvents.forEach(event => {
            const eventDate = new Date(event.date);
            monthlyHolidays.push({
                name: event.title,
                day: eventDate.getDate(),
                month: eventDate.getMonth() + 1,
                type: 'user-event',
                category: event.category,
                time: event.time,
                description: event.description,
                isUserEvent: true,
                originalEvent: event
            });
        });
        
        // Sort all items by date
        monthlyHolidays.sort((a, b) => a.day - b.day);
        
        // Get the container
        const container = document.getElementById('importantDaysContainer');
        if (!container) return;
        
        // Clear previous content
        container.innerHTML = '';
        
        if (monthlyHolidays.length > 0) {
            // Add each holiday/event as a FAQ-style card
            monthlyHolidays.forEach(item => {
                if (item.isUserEvent) {
                    // Create user event card
                    const eventCard = this.createUserEventCard(item);
                    container.appendChild(eventCard);
                } else {
                    // Create holiday card
                    const holidayDetail = this.holidayDetails[item.name];
                    if (holidayDetail) {
                        const holidayCard = this.createImportantDayCard(item, holidayDetail);
                        container.appendChild(holidayCard);
                    }
                }
            });
        } else {
            // Show message when no holidays or events
            const noItemsMsg = document.createElement('div');
            noItemsMsg.className = 'no-holidays-message';
            noItemsMsg.textContent = 'No important days this month';
            container.appendChild(noItemsMsg);
        }
    }
    
    createImportantDayCard(holiday, detail) {
        const card = document.createElement('div');
        card.className = `important-day-card`;
        
        // Extract day from date string
        const dayMatch = detail.date.match(/\d+/);
        const day = dayMatch ? dayMatch[0] : '?';
        
        // Get month and day name for the holiday
        const holidayDate = new Date(this.currentDate.getFullYear(), holiday.month - 1, holiday.day);
        const monthName = this.monthNames[holiday.month - 1];
        const dayName = this.dayNames[holidayDate.getDay()];
        const dateDetails = `${monthName}, ${dayName}`;
        
        card.innerHTML = `
            <div class="important-day-header">
                <div class="important-day-left">
                    <div class="important-day-date-badge">${day}</div>
                    <div class="important-day-info">
                        <h3 class="important-day-question">${detail.title}</h3>
                        <div class="important-day-date-details">${dateDetails}</div>
                    </div>
                </div>
                <div class="important-day-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="important-day-content">
                <div class="important-day-content-inner">
                    <div class="important-day-full-date">${detail.date}</div>
                    <div class="important-day-description">
                        <h4>History & Background:</h4>
                        <p>${detail.description}</p>
                        <h4>Importance & Significance:</h4>
                        <p>${detail.significance}</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event listener for accordion functionality
        const header = card.querySelector('.important-day-header');
        const content = card.querySelector('.important-day-content');
        const icon = card.querySelector('.important-day-arrow i');
        
        header.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            
            if (isExpanded) {
                card.classList.remove('expanded');
                icon.style.transform = 'rotate(0deg)';
            } else {
                card.classList.add('expanded');
                icon.style.transform = 'rotate(90deg)';
            }
        });
        
        return card;
    }

    createUserEventCard(eventItem) {
        const card = document.createElement('div');
        card.className = 'important-day-card user-event-card';
        
        // Category colors for user events
        const categoryColors = {
            personal: '#007AFF',
            work: '#FF9500', 
            family: '#FF2D92',
            health: '#30D158',
            education: '#5856D6',
            other: '#8E8E93'
        };
        
        const categoryColor = categoryColors[eventItem.category] || '#8E8E93';
        const timeDisplay = eventItem.time ? ` at ${eventItem.time}` : '';
        const categoryDisplay = eventItem.category.charAt(0).toUpperCase() + eventItem.category.slice(1);
        
        // Get month and day name for the event
        const eventDate = new Date(eventItem.originalEvent.date);
        const monthName = this.monthNames[eventDate.getMonth()];
        const dayName = this.dayNames[eventDate.getDay()];
        const dateDetails = `${monthName}, ${dayName}`;
        
        card.innerHTML = `
            <div class="important-day-header">
                <div class="important-day-left">
                    <div class="important-day-date-badge" style="background: ${categoryColor}; color: white;">${eventItem.day}</div>
                    <div class="important-day-info">
                        <h3 class="important-day-question">${eventItem.name}</h3>
                        <div class="important-day-date-details">${dateDetails}${timeDisplay}</div>
                    </div>
                </div>
                <div class="important-day-actions">
                    <button class="event-delete-btn hidden" title="Delete Event" data-event-id="${eventItem.originalEvent.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="important-day-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <div class="important-day-content">
                <div class="important-day-content-inner">
                    <div class="important-day-full-date">${categoryDisplay} Event</div>
                    <div class="important-day-description">
                        <h4>Event Details:</h4>
                        <p><strong>Category:</strong> ${categoryDisplay}</p>
                        ${eventItem.time ? `<p><strong>Time:</strong> ${eventItem.time}</p>` : ''}
                        ${eventItem.description ? `<p><strong>Description:</strong> ${eventItem.description}</p>` : '<p>No additional details provided.</p>'}
                        <p><strong>Created:</strong> ${new Date(eventItem.originalEvent.created).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        `;
        
        // Get elements for event handling
        const header = card.querySelector('.important-day-header');
        const content = card.querySelector('.important-day-content');
        const icon = card.querySelector('.important-day-arrow i');
        const deleteBtn = card.querySelector('.event-delete-btn');
        
        // Long press variables
        let longPressTimer = null;
        let isLongPress = false;
        const longPressDuration = 800; // 800ms for long press
        
        // Long press functionality for touch devices
        header.addEventListener('touchstart', (e) => {
            isLongPress = false;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                deleteBtn.classList.remove('hidden');
                deleteBtn.classList.add('visible');
                
                // Add vibration feedback if available
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
                
                // Add visual feedback to indicate long press activated
                card.classList.add('long-press-active');
            }, longPressDuration);
        });
        
        header.addEventListener('touchend', (e) => {
            clearTimeout(longPressTimer);
            
            // If it was a long press, don't trigger normal click
            if (isLongPress) {
                e.preventDefault();
                return;
            }
        });
        
        header.addEventListener('touchmove', (e) => {
            clearTimeout(longPressTimer);
        });
        
        // Long press functionality for desktop (mouse events)
        header.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // Left mouse button only
                isLongPress = false;
                longPressTimer = setTimeout(() => {
                    isLongPress = true;
                    deleteBtn.classList.remove('hidden');
                    deleteBtn.classList.add('visible');
                    
                    // Add visual feedback
                    card.classList.add('long-press-active');
                }, longPressDuration);
            }
        });
        
        header.addEventListener('mouseup', (e) => {
            clearTimeout(longPressTimer);
        });
        
        header.addEventListener('mouseleave', (e) => {
            clearTimeout(longPressTimer);
        });
        
        // Click event listener for accordion functionality
        header.addEventListener('click', (e) => {
            // Don't expand if clicking delete button or if it was a long press
            if (e.target.closest('.event-delete-btn') || isLongPress) {
                isLongPress = false; // Reset long press flag
                return;
            }
            
            const isExpanded = card.classList.contains('expanded');
            
            if (isExpanded) {
                card.classList.remove('expanded');
                icon.style.transform = 'rotate(0deg)';
            } else {
                card.classList.add('expanded');
                icon.style.transform = 'rotate(90deg)';
            }
        });
        
        // Hide delete button when clicking outside
        document.addEventListener('click', (e) => {
            if (!card.contains(e.target)) {
                deleteBtn.classList.remove('visible');
                deleteBtn.classList.add('hidden');
                card.classList.remove('long-press-active');
            }
        });
        
        // Add delete functionality
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Show confirmation dialog
            if (confirm(`Are you sure you want to delete "${eventItem.name}"?`)) {
                // Delete the event
                const deleted = UserEventsManager.deleteEvent(eventItem.originalEvent.id);
                
                if (deleted) {
                    // Show success feedback
                    this.showEventDeletedFeedback();
                    
                    // Update calendar and important days
                    this.render();
                    this.updateImportantDays();
                    
                    console.log('Event deleted successfully:', deleted);
                } else {
                    // Show error feedback
                    this.showEventDeleteErrorFeedback();
                }
            }
            
            // Hide delete button after action
            deleteBtn.classList.remove('visible');
            deleteBtn.classList.add('hidden');
            card.classList.remove('long-press-active');
        });
        
        return card;
    }

    isSameDate(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    showEventDeletedFeedback() {
        const feedback = document.createElement('div');
        feedback.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #FF3B30;
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                font-weight: 500;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            ">
                <i class="fas fa-trash" style="margin-right: 8px;"></i>
                Event deleted successfully!
            </div>
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.firstElementChild.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            feedback.firstElementChild.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }

    showEventDeleteErrorFeedback() {
        const feedback = document.createElement('div');
        feedback.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #FF3B30;
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                font-weight: 500;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            ">
                <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>
                Error deleting event. Please try again.
            </div>
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.firstElementChild.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            feedback.firstElementChild.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 3000);
    }

}

// Initialize the calendar when the DOM is loaded
let calendarInstance;
document.addEventListener('DOMContentLoaded', () => {
    calendarInstance = new Calendar();
    initializeFloatingTabBar();
    initializeSearchModal();
});

// Floating Tab Bar functionality
function initializeFloatingTabBar() {
    const homeTab = document.getElementById('homeTab');
    const addTab = document.getElementById('addTab');
    const themeTab = document.getElementById('themeTab');
    const settingsTab = document.getElementById('settingsTab');
    const profileBtn = document.getElementById('profileBtn');
    
    // Add haptic feedback simulation (without zoom animation)
    function addHapticFeedback(element) {
        // Removed zoom animation as requested by user
    }
    
    // Update browser header colors based on theme
    function updateBrowserHeaderColors() {
        const isDark = document.body.classList.contains('dark-theme');
        const themeColorMeta = document.getElementById('theme-color-meta');
        const msThemeColorMeta = document.getElementById('ms-theme-color-meta');
        const appleThemeColorMeta = document.getElementById('apple-theme-color-meta');
        
        if (isDark) {
            // Dark theme colors
            themeColorMeta.setAttribute('content', '#131419');
            msThemeColorMeta.setAttribute('content', '#131419');
            appleThemeColorMeta.setAttribute('content', 'black-translucent');
        } else {
            // Light theme colors
            themeColorMeta.setAttribute('content', '#ffffff');
            msThemeColorMeta.setAttribute('content', '#ffffff');
            appleThemeColorMeta.setAttribute('content', 'default');
        }
    }

    // Toggle theme icon between moon and sun
    function toggleThemeIcon() {
        const themeIcon = themeTab.querySelector('i');
        const isDark = document.body.classList.contains('dark-theme');
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        
        // Update browser header colors
        updateBrowserHeaderColors();
    }
    
    // Home tab click
    homeTab.addEventListener('click', function(e) {
        e.preventDefault();
        resetTabStates();
        this.classList.add('active');
        addHapticFeedback(this);
        
        // Reset calendar to today's actual date
        if (calendarInstance) {
            const today = new Date();
            calendarInstance.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
            calendarInstance.selectedDate = new Date(today);
            calendarInstance.render();
            calendarInstance.updateTodaySection();
            calendarInstance.updateImportantDays();
        }
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        console.log('Home tab active - returned to current month');
    });
    
    // Add tab click  
    addTab.addEventListener('click', function(e) {
        e.preventDefault();
        resetTabStates();
        this.classList.add('active');
        addHapticFeedback(this);
        
        // Show add event modal
        showAddEventModal();
        
        console.log('Add event modal opened');
    });
    
    // Theme tab click
    themeTab.addEventListener('click', function(e) {
        e.preventDefault();
        resetTabStates();
        this.classList.add('active');
        addHapticFeedback(this);
        
        // Toggle theme with smooth transition
        document.body.style.transition = 'all 0.3s ease';
        document.body.classList.toggle('dark-theme');
        
        // Update theme icon and browser header colors
        toggleThemeIcon();
        
        // Save theme preference
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
        
        console.log('Theme toggled');
    });
    
    // Search tab click
    settingsTab.addEventListener('click', function(e) {
        e.preventDefault();
        resetTabStates();
        this.classList.add('active');
        addHapticFeedback(this);
        
        // Show search modal
        showSearchModal();
        
        console.log('Search feature activated');
    });
    
    // About button click
    profileBtn.addEventListener('click', function(e) {
        e.preventDefault();
        resetTabStates();
        addHapticFeedback(this);
        
        // Show about modal
        showAboutModal();
        
        console.log('About modal opened');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
    
    // Initialize theme icon and browser header colors
    toggleThemeIcon();
    
    // Desktop controls functionality
    const desktopThemeToggle = document.getElementById('desktopThemeToggle');
    const desktopHomeBtn = document.getElementById('desktopHomeBtn');
    const desktopAddBtn = document.getElementById('desktopAddBtn');
    const desktopSettingsBtn = document.getElementById('desktopSettingsBtn');
    const desktopProfileBtn = document.getElementById('desktopProfileBtn');
    
    // Desktop theme toggle
    if (desktopThemeToggle) {
        desktopThemeToggle.addEventListener('click', function() {
            console.log('Desktop theme toggle clicked');
            const isDark = document.body.classList.contains('dark-theme');
            console.log('Current theme is dark:', isDark);
            
            if (isDark) {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('darkTheme', 'false');
                desktopThemeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Dark</span>';
                console.log('Switched to light mode');
            } else {
                document.body.classList.add('dark-theme');
                localStorage.setItem('darkTheme', 'true');
                desktopThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light</span>';
                console.log('Switched to dark mode');
            }
            
            // Update mobile theme icon and browser header colors
            toggleThemeIcon();
        });
        
        // Initialize desktop theme toggle text based on current theme
        function updateDesktopThemeToggle() {
            const isDark = document.body.classList.contains('dark-theme');
            const newHTML = isDark ? '<i class="fas fa-sun"></i><span>Light</span>' : '<i class="fas fa-moon"></i><span>Dark</span>';
            desktopThemeToggle.innerHTML = newHTML;
            
            // Update browser header colors
            updateBrowserHeaderColors();
            
            console.log('Desktop theme toggle updated:', isDark ? 'Dark mode (showing Light button)' : 'Light mode (showing Dark button)');
        }
        
        // Use setTimeout to ensure DOM is fully loaded and theme is applied
        setTimeout(() => {
            updateDesktopThemeToggle();
        }, 100);
        
        // Also initialize immediately
        updateDesktopThemeToggle();
    }
    
    // Desktop home functionality
    if (desktopHomeBtn) {
        desktopHomeBtn.addEventListener('click', function() {
            // Add subtle animation
            desktopHomeBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                desktopHomeBtn.style.transform = '';
            }, 150);
            
            // Reset calendar to today's actual date
            if (calendarInstance) {
                const today = new Date();
                calendarInstance.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
                calendarInstance.selectedDate = new Date(today);
                calendarInstance.render();
                calendarInstance.updateTodaySection();
                calendarInstance.updateImportantDays();
            }
            
            console.log('Home feature activated - returned to current month');
        });
    }
    
    // Desktop add functionality
    if (desktopAddBtn) {
        desktopAddBtn.addEventListener('click', function() {
            // Add rotation animation
            const icon = desktopAddBtn.querySelector('i');
            icon.style.transform = 'rotate(90deg)';
            setTimeout(() => {
                icon.style.transform = '';
            }, 200);
            
            // Show add event modal
            showAddEventModal();
            console.log('Add event modal opened');
        });
    }
    
    // Desktop search functionality
    if (desktopSettingsBtn) {
        desktopSettingsBtn.addEventListener('click', function() {
            // Add search icon animation
            const icon = desktopSettingsBtn.querySelector('i');
            icon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                icon.style.transform = '';
            }, 200);
            
            // Show search modal
            showSearchModal();
            
            console.log('Search feature activated');
        });
    }
    
    // Desktop about functionality
    if (desktopProfileBtn) {
        desktopProfileBtn.addEventListener('click', function() {
            // Add pulse effect
            desktopProfileBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                desktopProfileBtn.style.transform = '';
            }, 150);
            
            // Show about modal
            showAboutModal();
            
            console.log('About modal opened');
        });
    }
    
    // Touch feedback removed (zoom animation disabled as per user request)
}

function resetTabStates() {
    const homeTab = document.getElementById('homeTab');
    const iconTabs = document.querySelectorAll('.icon-tab');
    
    // Reset home tab
    homeTab.classList.remove('active');
    
    // Reset icon tabs
    iconTabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.backgroundColor = '';
        tab.style.color = '';
    });
}

// Search Modal Functions
function showSearchModal() {
    const searchModal = document.getElementById('searchModalOverlay');
    const searchInput = document.getElementById('searchInput');
    
    if (searchModal) {
        searchModal.classList.add('active');
        // Focus on input after modal animation
        setTimeout(() => {
            if (searchInput) {
                searchInput.focus();
            }
            // Reset to suggestions view
            const searchSuggestions = document.getElementById('searchSuggestions');
            const searchResults = document.getElementById('searchResults');
            const searchClearBtn = document.getElementById('searchClearBtn');
            
            if (searchSuggestions) searchSuggestions.style.display = 'block';
            if (searchResults) searchResults.style.display = 'none';
            if (searchClearBtn) searchClearBtn.style.display = 'none';
        }, 300);
    }
}

function hideSearchModal() {
    const searchModal = document.getElementById('searchModalOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const searchClearBtn = document.getElementById('searchClearBtn');
    
    if (searchModal) {
        searchModal.classList.remove('active');
    }
    
    // Clear search input and reset to suggestions
    if (searchInput) {
        searchInput.value = '';
    }
    
    if (searchClearBtn) {
        searchClearBtn.style.display = 'none';
    }
    
    if (searchSuggestions) {
        searchSuggestions.style.display = 'block';
    }
    
    if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    }
}

function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults || !calendarInstance) return;
    
    const results = [];
    const queryLower = query.toLowerCase().trim();
    
    if (queryLower.length < 2) {
        searchResults.innerHTML = `
            <div class="search-placeholder">
                <i class="fas fa-search"></i>
                <p>Search for holidays, special days, or dates</p>
                <p class="search-hint">Try searching: "Eid", "Independence", "December", "2025"</p>
            </div>
        `;
        return;
    }
    
    // Search through all holidays
    const allHolidays = [...calendarInstance.holidays.fixed, ...calendarInstance.holidays.islamic];
    
    allHolidays.forEach(holiday => {
        const holidayNameLower = holiday.name.toLowerCase();
        const monthName = calendarInstance.monthNames[holiday.month - 1].toLowerCase();
        
        if (holidayNameLower.includes(queryLower) || 
            monthName.includes(queryLower) ||
            holiday.type.toLowerCase().includes(queryLower)) {
            
            results.push({
                ...holiday,
                date: `${calendarInstance.monthNames[holiday.month - 1]} ${holiday.day}`,
                monthNum: holiday.month,
                dayNum: holiday.day
            });
        }
    });
    
    // Search for month names
    calendarInstance.monthNames.forEach((month, index) => {
        if (month.toLowerCase().includes(queryLower)) {
            results.push({
                name: `${month} 2025`,
                type: 'month',
                date: month,
                monthNum: index + 1,
                dayNum: 1
            });
        }
    });
    
    // Search for years
    if (queryLower.includes('2025') || queryLower.includes('2024')) {
        results.push({
            name: 'Year 2025',
            type: 'year',
            date: 'January 2025',
            monthNum: 1,
            dayNum: 1
        });
    }
    
    // Display results
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h4>No results found</h4>
                <p>Try searching for holidays like "Eid", "Independence", or months like "December"</p>
            </div>
        `;
    } else {
        searchResults.innerHTML = results.map(result => {
            const iconClass = getSearchResultIcon(result.type);
            return `
                <div class="search-result-item" onclick="navigateToSearchResult(${result.monthNum}, ${result.dayNum})">
                    <div class="search-result-icon ${result.type}">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="search-result-content">
                        <h4 class="search-result-title">${result.name}</h4>
                        <p class="search-result-date">${result.date}</p>
                        <span class="search-result-type">${formatSearchType(result.type)}</span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function getSearchResultIcon(type) {
    switch (type) {
        case 'national': return 'fas fa-flag';
        case 'religious': return 'fas fa-pray';
        case 'cultural': return 'fas fa-theater-masks';
        case 'international': return 'fas fa-globe';
        case 'month': return 'fas fa-calendar-alt';
        case 'year': return 'fas fa-calendar';
        default: return 'fas fa-calendar-day';
    }
}

function formatSearchType(type) {
    switch (type) {
        case 'national': return 'National Holiday';
        case 'religious': return 'Religious Holiday';
        case 'cultural': return 'Cultural Holiday';
        case 'international': return 'International Day';
        case 'month': return 'Month';
        case 'year': return 'Year';
        default: return 'Holiday';
    }
}

function navigateToSearchResult(month, day) {
    if (!calendarInstance) return;
    
    // Navigate to the specific month
    const currentYear = new Date().getFullYear();
    calendarInstance.currentDate = new Date(currentYear, month - 1, 1);
    calendarInstance.selectedDate = new Date(currentYear, month - 1, day);
    
    // Re-render calendar
    calendarInstance.render();
    calendarInstance.updateTodaySection();
    calendarInstance.updateImportantDays();
    
    // Close search modal
    hideSearchModal();
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    console.log(`Navigated to ${calendarInstance.monthNames[month - 1]} ${day}, ${currentYear}`);
}

function initializeSearchModal() {
    const searchBackBtn = document.getElementById('searchBackBtn');
    const searchClearBtn = document.getElementById('searchClearBtn');
    const searchMicBtn = document.getElementById('searchMicBtn');
    const searchModalOverlay = document.getElementById('searchModalOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const searchResults = document.getElementById('searchResults');
    
    // Back button
    if (searchBackBtn) {
        searchBackBtn.addEventListener('click', hideSearchModal);
    }
    
    // Clear button
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', function() {
            searchInput.value = '';
            searchClearBtn.style.display = 'none';
            searchSuggestions.style.display = 'block';
            searchResults.style.display = 'none';
            searchInput.focus();
        });
    }
    
    // Voice search functionality
    let recognition = null;
    let isListening = false;

    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = function() {
            isListening = true;
            searchMicBtn.classList.add('listening');
            searchMicBtn.innerHTML = '<i class="fas fa-stop"></i>';
            console.log('Voice search started');
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            if (searchInput) {
                searchInput.value = transcript;
                searchClearBtn.style.display = 'flex';
                performSearch(transcript);
                searchSuggestions.style.display = 'none';
                searchResults.style.display = 'block';
            }
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            stopVoiceSearch();
        };
        
        recognition.onend = function() {
            stopVoiceSearch();
        };
    }

    function stopVoiceSearch() {
        isListening = false;
        if (searchMicBtn) {
            searchMicBtn.classList.remove('listening');
            searchMicBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        }
        if (recognition) {
            recognition.stop();
        }
    }

    // Microphone button functionality
    if (searchMicBtn) {
        searchMicBtn.addEventListener('click', function() {
            if (!recognition) {
                alert('Voice search is not supported in this browser. Please try Chrome, Safari, or Edge.');
                return;
            }

            if (isListening) {
                stopVoiceSearch();
            } else {
                console.log('Voice search activated');
                recognition.start();
            }
        });
    }
    
    // Search input functionality
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const value = e.target.value.trim();
            
            // Show/hide clear button
            if (searchClearBtn) {
                searchClearBtn.style.display = value ? 'flex' : 'none';
            }
            
            // Show suggestions or results
            if (value) {
                searchSuggestions.style.display = 'none';
                searchResults.style.display = 'block';
                performSearch(value);
            } else {
                searchSuggestions.style.display = 'block';
                searchResults.style.display = 'none';
            }
        });
        
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideSearchModal();
            } else if (e.key === 'Enter') {
                if (e.target.value.trim()) {
                    performSearch(e.target.value.trim());
                }
            }
        });
    }
    
    // Add click handlers to suggestion pills
    if (searchSuggestions) {
        searchSuggestions.addEventListener('click', function(e) {
            const suggestionPill = e.target.closest('.suggestion-pill');
            if (suggestionPill) {
                const suggestionText = suggestionPill.textContent;
                searchInput.value = suggestionText;
                searchClearBtn.style.display = 'flex';
                performSearch(suggestionText);
                searchSuggestions.style.display = 'none';
                searchResults.style.display = 'block';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const searchModal = document.getElementById('searchModalOverlay');
            if (searchModal && searchModal.classList.contains('active')) {
                hideSearchModal();
            }
        }
    });
}

// ============================================================================
// ADD EVENT FUNCTIONALITY WITH COOKIE-BASED STORAGE
// ============================================================================

// Cookie utility functions
const CookieManager = {
    // Set cookie with expiration (default 1 year)
    set: function(name, value, days = 365) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))};expires=${expires.toUTCString()};path=/`;
    },
    
    // Get cookie value
    get: function(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                try {
                    return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
                } catch (e) {
                    return null;
                }
            }
        }
        return null;
    },
    
    // Delete cookie
    delete: function(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
};

// User Events Management
const UserEventsManager = {
    events: [],
    
    // Load events from cookies
    loadEvents: function() {
        const savedEvents = CookieManager.get('userCalendarEvents');
        this.events = savedEvents || [];
        return this.events;
    },
    
    // Save events to cookies
    saveEvents: function() {
        CookieManager.set('userCalendarEvents', this.events);
    },
    
    // Add new event
    addEvent: function(eventData) {
        const newEvent = {
            id: this.generateEventId(),
            title: eventData.title,
            date: eventData.date,
            time: eventData.time || null,
            category: eventData.category,
            description: eventData.description || '',
            reminder: eventData.reminder,
            created: new Date().toISOString()
        };
        
        this.events.push(newEvent);
        this.saveEvents();
        return newEvent;
    },
    
    // Update existing event
    updateEvent: function(eventId, updatedData) {
        const eventIndex = this.events.findIndex(event => event.id === eventId);
        if (eventIndex !== -1) {
            this.events[eventIndex] = { ...this.events[eventIndex], ...updatedData };
            this.saveEvents();
            return this.events[eventIndex];
        }
        return null;
    },
    
    // Delete event
    deleteEvent: function(eventId) {
        const eventIndex = this.events.findIndex(event => event.id === eventId);
        if (eventIndex !== -1) {
            const deletedEvent = this.events.splice(eventIndex, 1)[0];
            this.saveEvents();
            return deletedEvent;
        }
        return null;
    },
    
    // Get events for specific date
    getEventsForDate: function(date) {
        const dateString = this.formatDateString(date);
        return this.events.filter(event => event.date === dateString);
    },
    
    // Get all events for a month
    getEventsForMonth: function(year, month) {
        return this.events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getFullYear() === year && eventDate.getMonth() === month;
        });
    },
    
    // Generate unique event ID
    generateEventId: function() {
        return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    // Format date as YYYY-MM-DD
    formatDateString: function(date) {
        if (typeof date === 'string') return date;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
};

// About Modal Functions
function showAboutModal() {
    const aboutModal = document.getElementById('aboutModalOverlay');
    
    if (aboutModal) {
        aboutModal.classList.add('active');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        console.log('About modal displayed');
    }
}

function hideAboutModal() {
    const aboutModal = document.getElementById('aboutModalOverlay');
    
    if (aboutModal) {
        aboutModal.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        console.log('About modal hidden');
    }
}

function initializeAboutModal() {
    const aboutBackBtn = document.getElementById('aboutBackBtn');
    const aboutModalOverlay = document.getElementById('aboutModalOverlay');
    
    // Back button
    if (aboutBackBtn) {
        aboutBackBtn.addEventListener('click', hideAboutModal);
    }
    
    // Close on overlay click (optional)
    if (aboutModalOverlay) {
        aboutModalOverlay.addEventListener('click', function(e) {
            if (e.target === aboutModalOverlay) {
                hideAboutModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aboutModalOverlay && aboutModalOverlay.classList.contains('active')) {
            hideAboutModal();
        }
    });
}

// Add Event Modal Functions
function showAddEventModal() {
    const addEventModal = document.getElementById('addEventModalOverlay');
    const eventDateInput = document.getElementById('eventDate');
    
    if (addEventModal) {
        // Set default date to selected date or today
        const defaultDate = calendarInstance.selectedDate || new Date();
        eventDateInput.value = UserEventsManager.formatDateString(defaultDate);
        
        addEventModal.classList.add('active');
        
        // Focus on title input after animation
        setTimeout(() => {
            const titleInput = document.getElementById('eventTitle');
            if (titleInput) {
                titleInput.focus();
            }
        }, 300);
    }
}

function hideAddEventModal() {
    const addEventModal = document.getElementById('addEventModalOverlay');
    
    if (addEventModal) {
        addEventModal.classList.remove('active');
        clearAddEventForm();
    }
}

function clearAddEventForm() {
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventTime').value = '';
    document.getElementById('eventCategory').value = 'personal';
    document.getElementById('eventDescription').value = '';
    document.getElementById('eventReminder').value = 'none';
}

function validateEventForm() {
    const title = document.getElementById('eventTitle').value.trim();
    const date = document.getElementById('eventDate').value;
    const saveBtn = document.getElementById('addEventSaveBtn');
    
    const isValid = title.length > 0 && date;
    saveBtn.disabled = !isValid;
    
    return isValid;
}

function saveEvent() {
    if (!validateEventForm()) return;
    
    const eventData = {
        title: document.getElementById('eventTitle').value.trim(),
        date: document.getElementById('eventDate').value,
        time: document.getElementById('eventTime').value,
        category: document.getElementById('eventCategory').value,
        description: document.getElementById('eventDescription').value.trim(),
        reminder: document.getElementById('eventReminder').value
    };
    
    try {
        const newEvent = UserEventsManager.addEvent(eventData);
        
        // Show success feedback
        showEventSavedFeedback();
        
        // Update calendar to show new event
        if (calendarInstance) {
            calendarInstance.render();
            calendarInstance.updateTodaySection();
            calendarInstance.updateImportantDays();
        }
        
        // Hide modal
        hideAddEventModal();
        
        console.log('Event saved successfully:', newEvent);
        
    } catch (error) {
        console.error('Error saving event:', error);
        showEventErrorFeedback();
    }
}

function showEventSavedFeedback() {
    const feedback = document.createElement('div');
    feedback.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #30D158;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 500;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        ">
            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
            Event saved successfully!
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.firstElementChild.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        feedback.firstElementChild.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 2000);
}

function showEventErrorFeedback() {
    const feedback = document.createElement('div');
    feedback.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #FF3B30;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 500;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        ">
            <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>
            Error saving event. Please try again.
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.firstElementChild.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        feedback.firstElementChild.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Initialize Add Event Modal
function initializeAddEventModal() {
    const addEventBackBtn = document.getElementById('addEventBackBtn');
    const addEventSaveBtn = document.getElementById('addEventSaveBtn');
    const eventTitle = document.getElementById('eventTitle');
    const eventDate = document.getElementById('eventDate');
    const addEventModalOverlay = document.getElementById('addEventModalOverlay');
    
    // Back button
    if (addEventBackBtn) {
        addEventBackBtn.addEventListener('click', hideAddEventModal);
    }
    
    // Save button
    if (addEventSaveBtn) {
        addEventSaveBtn.addEventListener('click', saveEvent);
    }
    
    // Form validation on input
    if (eventTitle && eventDate) {
        eventTitle.addEventListener('input', validateEventForm);
        eventDate.addEventListener('change', validateEventForm);
    }
    
    // Close modal when clicking overlay
    if (addEventModalOverlay) {
        addEventModalOverlay.addEventListener('click', function(e) {
            if (e.target === addEventModalOverlay) {
                hideAddEventModal();
            }
        });
    }
    
    // Initialize form validation
    validateEventForm();
}

// Load user events from cookies on page load
function loadUserEventsFromCookies() {
    UserEventsManager.loadEvents();
    console.log('User events loaded from cookies:', UserEventsManager.events.length, 'events');
}

// Initialize today menu icon functionality
function initializeTodayMenuIcon() {
    const todayMenuIcon = document.getElementById('todayMenuIcon');
    const todayMenuDropdown = document.getElementById('todayMenuDropdown');
    const goToTodayBtn = document.getElementById('goToTodayBtn');
    const addEventBtn = document.getElementById('addEventBtn');
    const refreshCalendarBtn = document.getElementById('refreshCalendarBtn');
    
    if (todayMenuIcon && todayMenuDropdown) {
        // Toggle dropdown when clicking the 3-dot icon
        todayMenuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Today menu clicked');
            
            // Toggle dropdown visibility
            todayMenuDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!todayMenuIcon.contains(e.target)) {
                todayMenuDropdown.classList.remove('show');
            }
        });
        
        // Menu item functionality
        if (goToTodayBtn) {
            goToTodayBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Go to Today clicked');
                
                // Navigate to current date
                if (calendarInstance) {
                    const today = new Date();
                    calendarInstance.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
                    calendarInstance.selectedDate = new Date(today);
                    calendarInstance.render();
                }
                
                // Close dropdown
                todayMenuDropdown.classList.remove('show');
            });
        }
        
        if (addEventBtn) {
            addEventBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Add Event clicked');
                
                // Open add event modal
                showAddEventModal();
                
                // Close dropdown
                todayMenuDropdown.classList.remove('show');
            });
        }
        
        if (refreshCalendarBtn) {
            refreshCalendarBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Refresh Calendar clicked');
                
                // Refresh calendar display
                if (calendarInstance) {
                    calendarInstance.render();
                }
                
                // Close dropdown
                todayMenuDropdown.classList.remove('show');
            });
        }
    }
}

// Extend Calendar class to show user events with beautiful holiday-style design
Calendar.prototype.renderUserEvents = function(dayElement, date) {
    const userEvents = UserEventsManager.getEventsForDate(date);
    
    if (userEvents.length > 0) {
        // Apply holiday-style background based on event category
        const primaryEvent = userEvents[0];
        dayElement.classList.add('user-event', `user-event-${primaryEvent.category}`);
        
        // Create event name display similar to holidays
        const eventName = document.createElement('div');
        eventName.className = 'user-event-name-visible';
        
        // Show first event name, or count if multiple
        let displayText = userEvents.length === 1 ? 
            this.truncateEventName(primaryEvent.title) : 
            `${userEvents.length} Events`;
            
        eventName.textContent = displayText;
        dayElement.appendChild(eventName);
        
        // Add tooltip with all events
        const tooltipText = userEvents.map(event => 
            `${event.title}${event.time ? ` (${event.time})` : ''}`
        ).join('\n');
        dayElement.title = tooltipText;
        
        // Add hover tooltip for desktop
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'user-event-tooltip';
        tooltipElement.textContent = userEvents.length === 1 ? 
            primaryEvent.title : 
            `${userEvents.length} events today`;
        dayElement.appendChild(tooltipElement);
    }
};

// Helper function to truncate event names like holidays
Calendar.prototype.truncateEventName = function(name) {
    if (name.length <= 8) return name;
    if (name.length <= 12) return name.substring(0, 8) + '...';
    return name.substring(0, 6) + '...';
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadUserEventsFromCookies();
    initializeAddEventModal();
    initializeAboutModal();
    initializeTodayMenuIcon();
    
    // Extend existing calendar render to include user events
    setTimeout(() => {
        if (typeof calendarInstance !== 'undefined' && calendarInstance) {
            const originalCreateDayElement = calendarInstance.createDayElement;
            calendarInstance.createDayElement = function(date, currentMonth) {
                const dayElement = originalCreateDayElement.call(this, date, currentMonth);
                this.renderUserEvents(dayElement, date);
                return dayElement;
            };
            // Force re-render to apply new styling
            calendarInstance.render();
        }
    }, 100);
});

// Toggle legend card function
function toggleLegendCard(headerElement) {
    const card = headerElement.closest('.legend-card');
    const content = card.querySelector('.legend-content');
    const arrow = card.querySelector('.legend-arrow i');
    
    // Toggle expanded class
    card.classList.toggle('expanded');
    
    // Rotate arrow
    if (card.classList.contains('expanded')) {
        arrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}
