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
      '/projects/audioplayer/screenshot-1.jpg',
      '/projects/audioplayer/screenshot-2.jpg',
      '/projects/audioplayer/screenshot-3.jpg',
    ],
    features: [
      'Admob: Banner, interstitial',
      'ExoPlayer integration for audio playback',
      'Foreground service for continuous playback',
      'notify: MediaStyle notification with playback controls',
      'MVVM architecture with ViewModel and LiveData',
      'Jetpack Compose for modern UI',
     
    ],
  },
  {
    id: 'weather-forecast',
    name: 'Anti-Theft-App',
    description: 'An advanced anti-theft application that provides real-time tracking, alerts, and security features to protect your device.',
    detailedDescription: 'The Anti-Theft-App is designed to safeguard your device against theft and unauthorized access. It offers features such as Charger Removal Alerts, Pocket Removal Alerts, Motion Detection and alerts for suspicious activities. Built with Jetpack Compose and Material Design 3, the app provides a user-friendly interface and seamless experience.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Background Service', 'Accelerometer', 'proximity Sensor'],
    gradient: 'from-blue-500 to-indigo-600',
    githubLink: 'https://github.com/Faizan18506',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'android',
    screenshots: [
      '/projects/antitheftapp/screenshot-1.jpg',
      '/projects/antitheftapp/screenshot-2.jpg',
      '/projects/antitheftapp/screenshot-3.jpg',
    ],
    features: [
      'Charger Removal Alerts using BroadcastReceiver',
      'Pocket Removal Alerts using Proximity Sensor',
      'Motion Detection using Accelerometer',
      'Suspicious Activity Alerts using Proximity Sensor',
      'Alarm Sounding and Vibration using MediaPlayer',
      'Alarm Stop using BroadcastReceiver lock unlock event',
      'Foreground Service for continuous monitoring',
      'Background Service for continuous monitoring',
    ],
  },
  {
    id: 'thesis-creator-chat-bot',
    name: 'Theises Creator Chat BOT',
    description: 'Theises Creator Chat BOT is an AI assistant designed to make theises in just write their own topic and everything perfectly generates by app using gimini 2.5.',
    detailedDescription: 'The Thesis Creator ChatBot is an innovative AI-powered application that revolutionizes academic writing by leveraging the advanced capabilities of Gemini 2.5. This sophisticated tool assists students, researchers, and academics in developing comprehensive thesis documents with minimal effort. Users simply input their topic of interest, and the application generates a well-structured thesis complete with research objectives, methodology, literature review suggestions, and conclusion frameworks. The app incorporates advanced natural language processing to ensure academic writing standards, proper citations, and coherent argument development. It features smart topic analysis to suggest relevant research directions, automated outline generation, and context-aware content recommendations. The integration with Gemini 2.5 enables it to understand complex academic concepts across various disciplines, from humanities to sciences, providing tailored assistance for each field of study.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Agentic A.i', 'gimini 2.5', 'MVVM'],
    gradient: 'from-purple-500 to-pink-600',
    githubLink: 'https://github.com/Faizan18506/TheisesCreator',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'android',
    screenshots: [
      '/projects/chatbot/screenshot-1.jpg',
      '/projects/chatbot/screenshot-2.jpg',
      '/projects/chatbot/screenshot-3.jpg',
    ],
    features: [
      'Intelligent Topic Analysis: Advanced processing to understand and expand research topics',
      'Structured Thesis Generation: Creates complete thesis frameworks with chapters, sections, and subsections',
      'Research Methodology Support: Suggests appropriate research methods and data collection strategies',
      'Literature Review Assistant: Helps identify key areas for literature review and theoretical framework',
      'Citation Management: Assists in organizing and formatting academic citations',
      'Multi-disciplinary Support: Adapts to various academic fields and research methodologies',
      'Interactive Refinement: Allows users to iteratively improve and customize generated content',
      'Academic Writing Style: Maintains formal academic language and proper scholarly tone',
    ],
  },
  {
    id: 'stripe-integration',
    name: 'Stripe Integration',
    description: 'Integrate Stripe payment processing into your application with ease.',
    detailedDescription: 'The Stripe Integration project provides a seamless way to incorporate Stripe\'s payment processing capabilities into your application. By leveraging Stripe\'s robust API, developers can implement secure and efficient payment solutions, including one-time payments, subscriptions, and invoicing. This project includes comprehensive documentation, code samples, and best practices to help you get started quickly and ensure a smooth integration process.',
    technologies: ['Jetpack Compose', 'Kotlin', 'mvvm', 'Stripe API'],
    gradient: 'from-green-400 to-blue-500',
    githubLink: 'https://github.com/Faizan18506/Stripe',
    youtubeLink: 'https://www.youtube.com/watch?v=RtpVtTmZny0&t=780s',
    category: 'android',
    screenshots: [
      '/projects/stripe/screenshot-1.jpg',
      '/projects/stripe/screenshot-2.jpg',
      '/projects/stripe/screenshot-3.jpg',
    ],
    features: [
      'Easy integration with Stripe API',
      'Support for one-time payments and subscriptions',
      'Secure payment processing with Secret key',
    ],
  },
  {
    id: 'Food-Delivery-App',
    name: 'Food Ordering App',
    description: 'A food ordering application that allows users to browse menus, place orders, and track deliveries in real-time.',
    detailedDescription: 'The Food Ordering App project provides a seamless way to incorporate food ordering capabilities into your application. By leveraging a robust API, developers can implement secure and efficient food ordering solutions, including menu browsing, real-time order tracking, and payment processing. This project includes comprehensive documentation, code samples, and best practices to help you get started quickly and ensure a smooth integration process.',
    technologies: ['Jetpack Compose', 'Kotlin', 'mvvm', 'Firebase', 'clean architecture'],
    gradient: 'from-green-400 to-blue-500',
    githubLink: 'https://github.com/Faizan18506/FoodOrderingApp',
    youtubeLink: 'https://www.youtube.com/watch?v=RtpVtTmZny0&t=780s',
    category: 'android',
    screenshots: [
      '/projects/foodorder/screenshot-1.jpg',
      '/projects/foodorder/screenshot-2.jpg',
      '/projects/foodorder/screenshot-3.jpg',
    ],
    features: [
      'Easy integration with Food Ordering API',
      'Support for browsing menus and placing orders',
      'Firebase authentication and Firestore database',
      'Real-time order tracking and notifications',
      'Clean architecture with MVVM pattern',
    ],
  },
  {
    id: 'other-projects',
    name: 'Other Projects',
    description: 'A collection of various other projects showcasing different features and functionalities.',
    detailedDescription: 'This section includes a variety of projects that demonstrate different aspects of mobile app development, including UI design, state management, and API integration. Each project is designed to be a standalone example, complete with documentation and code samples to help you understand the implementation details.',
    technologies: ['Jetpack Compose', 'Kotlin', 'mvvm', 'Firebase', 'clean architecture', 'AdMob', 'Stripe API'],
    gradient: 'from-green-400 to-blue-500',
    githubLink: 'https://github.com/Faizan18506?tab=repositories',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev',
    category: 'android',
    screenshots: [
      '/projects/otherapps/screenshot-1.jpg',
      '/projects/otherapps/screenshot-2.jpg',
      '/projects/otherapps/screenshot-3.jpg',
    ],
    features: [
      'Various projects showcasing different features and functionalities',
      'Augemented Reality App in real Estate using Arcore',
      'Online Movie Ticket Booking App',
      'WorkerSheild - An app to connect workers with employers',
    ],
  },
  {
    id: 'task-management',
    name: 'A.i Crypto Agent',
    description: 'Crypto A.I Agent is a Flutter-based intelligent module powered by ChatGPT 3.5 that provides real-time insights and explanations about cryptocurrencies. It can be integrated into other apps to deliver AI-powered crypto conversations and analysis.',
    detailedDescription: 'esigned to bart reminders. Built using the BLoC pattern for robust state management and offline functionality.Crypto A.I Agent is an innovative Flutter application designed to serve as a smart crypto assistant. Built with Provider state management and integrated with ChatGPT 3.5, it offers dynamic and contextual answers to users’ crypto-related queries. The app functions as an embeddable module that can easily fit into any other application, allowing users to interact naturally and receive AI-driven crypto information. It enhances user engagement by generating detailed insights, market trends, and token details based on pre-set prompts. The system ensures smooth UI performance and seamless API communication for fast, intelligent responses.',
    technologies: ['Flutter', 'Rest API', 'Provider', 'ChatGPT 3.5', 'Dart'],
    gradient: 'from-orange-500 to-red-600',
    githubLink: 'https://github.com/Faizan18506/aiagent',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'flutter',
    screenshots: [
      '/projects/f_cryptoapp/screenshot-1.jpg',
      '/projects/f_cryptoapp/screenshot-2.jpg',
      '/projects/f_cryptoapp/screenshot-3.jpg',
    ],
    features: [
      'AI chatbot specialized in cryptocurrency discussions',

      'Ready-to-integrate module for other Flutter apps',

      'Real-time response generation using ChatGPT 3.5',  

      'Context-based crypto information and insights',

      'Clean, responsive UI with efficient state handling'
    ],
  },
  {
    id: 'movo prive',
    name: 'Kids PlayRoom',
    description: 'KidsPlayRoom is an engaging and educational Flutter app designed for children. It offers fun learning activities like counting, ABCs, drawing, YouTube videos, and more — all in one colorful, kid-friendly space.',
    detailedDescription: 'KidsPlayRoom is an interactive Flutter-based learning and entertainment app specially built for kids. It combines education and fun through a collection of modules such as alphabet learning, number counting, drawing boards, and safe YouTube video integration. The app supports subscription-based access for premium content and ensures a playful and intuitive user experience. With smooth navigation, appealing animations, and vibrant UI, KidsPlayRoom encourages children to learn and create while having fun in a digital playroom designed just for them.',
    technologies: ['Flutter', 'Provider/Bloc', 'Youtube Api'],
    gradient: 'from-yellow-500 to-orange-600',
    githubLink: 'https://github.com/Faizan18506/Reading-Zoomers-Source-Code',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'flutter',
    screenshots: [
      '/projects/f_kidsroom/screenshot-1.jpg',
      '/projects/f_kidsroom/screenshot-2.jpg',
      '/projects/f_kidsroom/screenshot-3.jpg',
    ],
    features: [
      'Interactive learning (ABC, counting, shapes, and colors)',

      'Drawing and creativity board for kids',


      'YouTube educational video integration',

      'Subscription system for premium features',

      'Colorful, safe, and child-friendly UI'
    ],
  },
  {
    id: 'movo-prive',
    name: 'Movo Prive',
    description: 'A comprehensive ride-hailing platform similar to inDrive, connecting passengers with drivers in Pakistan. Features both passenger and driver apps with real-time tracking and secure payments.',
    detailedDescription: 'Movo Prive is a modern ride-hailing solution designed specifically for the Pakistani market, following the successful model of inDrive. The platform consists of two interconnected apps - one for passengers and one for drivers. Passengers can easily book rides, negotiate fares, and track their drivers in real-time. Drivers can register their vehicles, accept ride requests, and manage their earnings efficiently. The app incorporates local preferences and pricing flexibility where passengers can propose fares and drivers can accept or counter-offer. Built with robust location tracking and real-time updates, the platform ensures reliable service while maintaining user privacy and security. The app includes features like fare estimation, multiple payment options, and comprehensive driver verification systems.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Socket.io', 'Payment Gateway'],
    gradient: 'from-yellow-500 to-orange-600',
    githubLink: 'https://github.com/Faizan18506/movoprive',
    youtubeLink: 'https://www.youtube.com/@AndroidComposeDev/videos',
    category: 'flutter',
    screenshots: [
      '/projects/f-movoprive/screenshot-1.jpg',
      '/projects/f-movoprive/screenshot-2.jpg',
      '/projects/f-movoprive/screenshot-3.jpg',
    ],
    features: [
      'Dual App Architecture: Separate interfaces for riders and drivers',
      'Real-time Location Tracking: Live GPS tracking and route visualization',
      'Fare Negotiation System: Flexible pricing with bidding functionality',
      'Driver Verification: Complete driver and vehicle documentation system',
      'Multiple Payment Methods: Cash, cards, and digital wallet support',
      'Smart Matching Algorithm: Efficient driver-passenger pairing',
      'In-app Chat & Calling: Built-in communication features',
      'Trip History & Analytics: Detailed reports for users and drivers'
    ],
  },
];
