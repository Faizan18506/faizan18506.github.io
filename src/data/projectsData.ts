export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  gradient: string;
  githubLink: string;
  youtubeLink: string;
  screenshots: string[];
  features: string[];
  category: 'android' | 'flutter';
}

export const projectsData: Project[] = [
  {
    id: 'ecommerce-app',
    name: 'A-Helps-Agentic-Ai',
    description: 'This app lets you chat for help and generate creative outputs with a daily free message limit. You can earn extra message credits by watching rewarded ads or upgrade in the premium screen. It supports multiple languages, auto‑checks for app updates, and sends daily reminders.',
    detailedDescription: 'The app provides an assistant you can message for help and creativity, with a simple credit system: you start with daily free messages and can unlock more via rewarded ads or premium. A built‑in update flow ensures you’re always on the latest version. Language can be switched from the app’s settings, and dark mode keeps the experience easy on the eyes. A daily reminder helps you come back and use remaining credits. Navigation guides you to premium when you want to upgrade, and ad flows are designed with a fallback so you rarely hit a dead end. Overall, it’s a lightweight, localized helper app that balances free access with optional monetization.',
    technologies: ['Kotlin', 'XML', 'Agentic A.i', 'MVVM'],
    gradient: 'from-cyan-500 to-blue-600',
    githubLink: 'https://github.com/Faizan18506/creatimate',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'android',
    screenshots: [
      '/projects/ahelps/screenshot-1.jpg',
      '/projects/ahelps/screenshot-2.jpg',
      '/projects/ahelps/screenshot-3.jpg',
    ],
    features: [
      'AdMob: Banner, interstitial, rewarded, app-open ads',
      'MVVM architecture: ViewModel + LiveData/StateFlow',
      'Room DB: Local SQLite with DAO',
      'Retrofit + OkHttp: REST API calls with interceptors',
      'Hilt/Dagger: Dependency injection',
      'Push notifications for order updates',
      'Coroutines/Flow: Async work and reactive streams',
      'Crashlytics & Analytics: Crash reports and usage tracking',
    ],
  },
  {
    id: 'social-media-platform',
    name: 'MySentry A.I',
    description: 'MySentry is an AI assistant designed to keep employees safe and secure anytime, anywhere.',
    detailedDescription: 'MySentry is a cutting-edge app designed to ensure the safety, security, and well-being of employees while empowering organizations to create a secure and productive work environment. With its advanced features, MySentry ensures quick responses during emergencies and helps employees feel protected no matter where they are.',
    technologies: ['Kotlin', 'Sockets', 'Firebase', 'Google Maps API', 'MVVM'],
    gradient: 'from-purple-500 to-pink-600',
    githubLink: 'https://play.google.com/store/apps/details?id=com.eagleeye.mysentry',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'android',
    screenshots: [
      '/projects/mysentry/screenshot-1.png',
      '/projects/mysentry/screenshot-2.png',
      '/projects/mysentry/screenshot-3.png',
    ],
    features: [
      'Panic Alarm: Trigger the panic alarm through an in-app button, volume button, voice command, or smartwatch. When activated, live audio and video are streamed to emergency responders and the 24/7 professional monitoring team.',
      'Emergency Contacts: Build a safety network with up to five trusted contacts who receive instant alerts during emergencies',
      'Real-time chat messaging with typing indicators',
      'Smart Connectivity: Share live location updates with designated emergency contacts at chosen intervals.',
      'MeetSafe: Log meetings and set check-ins; unresponsiveness triggers alerts to emergency contacts and monitoring teams',
      'Crash/Fall Detection',
      'User profile customization',
      'Automated Calls',
    ],
  },
  {
    id: 'fitness-tracker',
    name: 'Audio Player App',
    description: 'A modern audio player app with beautiful UI and smooth animations built in Jetpack Compose.',
    detailedDescription: 'A comprehensive audio player application built with Jetpack Compose for a modern, responsive design. This app allows users to play, pause, and manage their audio files with ease. It features a beautiful, intuitive interface with smooth animations and responsive design, providing an enjoyable user experience.',
    technologies: ['Kotlin', 'Jetpack Compose', 'ExoPlayer', 'Foreground Service', 'MVVM'],
    gradient: 'from-green-500 to-teal-600',
    githubLink: 'https://github.com/Faizan18506/audioplayer',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'android',
    screenshots: [
      '/projects/fitness-tracker/screenshot-1.jpg',
      '/projects/fitness-tracker/screenshot-2.jpg',
      '/projects/fitness-tracker/screenshot-3.jpg',
    ],
    features: [
      'Workout logging and tracking',
      'Calorie counter with food database',
      'Progress visualization with interactive charts',
      'Custom workout plans',
      'Goal setting and achievement tracking',
      'Exercise library with instructions',
      'Daily reminders and notifications',
      'BMI calculator and fitness metrics',
    ],
  },
  {
    id: 'weather-forecast',
    name: 'Weather Forecast App',
    description: 'Modern weather app with location-based forecasts, hourly predictions, and weather alerts. Sleek Material Design implementation.',
    detailedDescription: 'A sophisticated weather forecasting application that provides accurate, location-based weather information. The app offers hourly and daily forecasts, severe weather alerts, and detailed weather metrics. Built with Jetpack Compose and Material Design 3, it delivers a beautiful, intuitive user experience.',
    technologies: ['Kotlin', 'Jetpack Compose', 'OpenWeather API'],
    gradient: 'from-blue-500 to-indigo-600',
    githubLink: 'https://github.com/Faizan18506',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'android',
    screenshots: [
      '/projects/weather-forecast/screenshot-1.jpg',
      '/projects/weather-forecast/screenshot-2.jpg',
      '/projects/weather-forecast/screenshot-3.jpg',
    ],
    features: [
      'Current weather conditions with detailed metrics',
      'Hourly and 7-day weather forecasts',
      'Location-based automatic updates',
      'Multiple location management',
      'Severe weather alerts and notifications',
      'Weather radar and maps',
      'UV index and air quality information',
      'Beautiful weather animations',
    ],
  },
  {
    id: 'task-management',
    name: 'Task Management System',
    description: 'Productivity app with task organization, reminders, and team collaboration. Implements advanced state management patterns.',
    detailedDescription: 'A powerful task management application built with Flutter, designed to boost productivity for individuals and teams. The app features advanced task organization, priority management, collaboration tools, and smart reminders. Built using the BLoC pattern for robust state management and offline functionality.',
    technologies: ['Flutter', 'Firebase', 'Bloc Pattern'],
    gradient: 'from-orange-500 to-red-600',
    githubLink: 'https://github.com/Faizan18506',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'flutter',
    screenshots: [
      '/projects/task-management/screenshot-1.jpg',
      '/projects/task-management/screenshot-2.jpg',
      '/projects/task-management/screenshot-3.jpg',
    ],
    features: [
      'Create and organize tasks with categories',
      'Priority levels and due dates',
      'Recurring tasks and reminders',
      'Team collaboration and task assignment',
      'Progress tracking with statistics',
      'Subtasks and checklists',
      'File attachments and notes',
      'Offline mode with cloud sync',
    ],
  },
  {
    id: 'restaurant-ordering',
    name: 'Restaurant Ordering App',
    description: 'Food ordering platform with menu browsing, real-time order tracking, and payment gateway integration for seamless transactions.',
    detailedDescription: 'A complete restaurant ordering solution that connects customers with their favorite restaurants. The app features an intuitive menu browsing experience, customizable orders, real-time order tracking, and secure payment processing. Built with Kotlin and Firebase for real-time updates and reliable performance.',
    technologies: ['Flutter', 'Firebase', 'Stripe API'],
    gradient: 'from-yellow-500 to-orange-600',
    githubLink: 'https://github.com/Faizan18506',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'flutter',
    screenshots: [
      '/projects/restaurant-ordering/screenshot-1.jpg',
      '/projects/restaurant-ordering/screenshot-2.jpg',
      '/projects/restaurant-ordering/screenshot-3.jpg',
    ],
    features: [
      'Browse restaurants and menus',
      'Advanced search and filters',
      'Customizable menu items',
      'Shopping cart with order summary',
      'Multiple payment options',
      'Real-time order tracking',
      'Order history and reordering',
      'Ratings and reviews system',
    ],
  },
];
