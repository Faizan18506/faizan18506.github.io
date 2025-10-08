export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  gradient: string;
  githubLink: string;
  screenshots: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: 'ecommerce-app',
    name: 'E-Commerce Android App',
    description: 'Full-featured shopping app with real-time cart, payment integration, and order tracking. Built with Jetpack Compose and Firebase.',
    detailedDescription: 'A comprehensive e-commerce mobile application built with modern Android development practices. This app provides users with a seamless shopping experience, featuring product browsing, cart management, secure payment processing, and real-time order tracking. The application is built using Jetpack Compose for a modern, declarative UI and follows MVVM architecture for clean, maintainable code.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
    gradient: 'from-cyan-500 to-blue-600',
    githubLink: 'https://github.com/Faizan18506',
    screenshots: [
      'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'User authentication with Firebase Auth',
      'Real-time product catalog with search and filters',
      'Shopping cart with persistent storage',
      'Secure payment integration with Stripe',
      'Order history and tracking',
      'Push notifications for order updates',
      'Wishlist functionality',
      'Product reviews and ratings',
    ],
  },
  {
    id: 'social-media-platform',
    name: 'Social Media Platform',
    description: 'Real-time social networking app with posts, stories, chat, and notifications. Optimized for performance with clean architecture.',
    detailedDescription: 'A feature-rich social media application designed for seamless user interaction. The app supports real-time posting, story sharing, direct messaging, and instant notifications. Built with a focus on performance optimization and scalability, utilizing clean architecture principles and modern Android development tools.',
    technologies: ['Kotlin', 'XML', 'Retrofit', 'Room DB'],
    gradient: 'from-purple-500 to-pink-600',
    githubLink: 'https://github.com/Faizan18506',
    screenshots: [
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'Create and share posts with images and videos',
      'Story feature with 24-hour expiration',
      'Real-time chat messaging with typing indicators',
      'Follow/unfollow users',
      'Like, comment, and share posts',
      'Push notifications for interactions',
      'User profile customization',
      'Explore feed with trending content',
    ],
  },
  {
    id: 'fitness-tracker',
    name: 'Fitness Tracker App',
    description: 'Cross-platform fitness app tracking workouts, calories, and progress. Beautiful UI with charts and animations built in Flutter.',
    detailedDescription: 'A comprehensive fitness tracking application built with Flutter for cross-platform compatibility. This app helps users monitor their workouts, track calories, set fitness goals, and visualize their progress through interactive charts and graphs. The app features a beautiful, intuitive interface with smooth animations and responsive design.',
    technologies: ['Flutter', 'Dart', 'Provider', 'SQLite'],
    gradient: 'from-green-500 to-teal-600',
    githubLink: 'https://github.com/Faizan18506',
    screenshots: [
      'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4058316/pexels-photo-4058316.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    screenshots: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    screenshots: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    technologies: ['Kotlin', 'Firebase', 'Stripe API', 'MVVM'],
    gradient: 'from-yellow-500 to-orange-600',
    githubLink: 'https://github.com/Faizan18506',
    screenshots: [
      'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
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
