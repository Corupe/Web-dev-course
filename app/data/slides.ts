export interface SlideContent {
  id: number;
  day: number;
  title: string;
  subtitle?: string;
  content?: string;
  bulletPoints?: string[];
  type: 'title' | 'content' | 'section' | 'quiz' | 'game' | 'project' | 'resource';
  backgroundColor?: string;
}

export const slides: SlideContent[] = [
  // DAY 1 - FOUNDATIONS
  {
    id: 1,
    day: 1,
    title: 'Web Development Fundamentals',
    subtitle: 'Master HTML, CSS & JavaScript in 3 Days',
    type: 'title',
    backgroundColor: 'from-purple-900 to-slate-blue-900'
  },

  // SECTION 1: WHAT IS THE WEB?
  {
    id: 2,
    day: 1,
    title: 'What is the Web?',
    type: 'section',
    content: 'Understanding the internet, browsers, and how information flows'
  },
  {
    id: 3,
    day: 1,
    title: 'The Internet & Web Basics',
    type: 'content',
    content: 'The World Wide Web: A system of interconnected documents and resources',
    bulletPoints: [
      'Internet: Network of networks connecting computers globally',
      'Web: System of documents linked via hyperlinks (HTTP/HTTPS)',
      'Browser: Software that requests and displays web pages',
      'Server: Computer that stores and serves web pages to clients'
    ]
  },
  {
    id: 4,
    day: 1,
    title: 'How the Web Works: Request/Response',
    type: 'content',
    bulletPoints: [
      '1. User types URL in browser',
      '2. Browser sends HTTP request to server',
      '3. Server processes request and sends response',
      '4. Browser receives HTML, CSS, JS files',
      '5. Browser renders the page for user'
    ]
  },
  {
    id: 5,
    day: 1,
    title: 'Real-World Example: Google Search',
    type: 'content',
    content: 'See the web in action with Google\'s simple interface',
    bulletPoints: [
      'You type a search query (input)',
      'Google servers process your query',
      'Results are sent back as HTML',
      'Your browser renders 10 blue links',
      'Click a link → new HTTP request starts'
    ]
  },
  {
    id: 6,
    day: 1,
    title: 'AI Optimization: Smart Caching',
    type: 'content',
    content: 'How AI speeds up your web browsing experience',
    bulletPoints: [
      'AI predicts which pages you\'ll visit next',
      'Pages pre-cache before you click',
      'Machine learning learns your habits',
      'Result: Faster page loads',
      'Example: Google Instant predictions'
    ]
  },
  {
    id: 7,
    day: 1,
    title: 'Curiosity Questions: Explore',
    type: 'quiz',
    content: 'Research these fascinating web concepts',
    bulletPoints: [
      '🔍 How does DNS translate "google.com" to an IP address?',
      '🔍 Why is HTTPS more secure than HTTP?',
      '🔍 What happens when you press F12 in your browser?',
      '🔍 How do cookies track your activity?'
    ]
  },

  // SECTION 2: WHAT IS PROGRAMMING?
  {
    id: 8,
    day: 1,
    title: 'What is Programming?',
    type: 'section',
    content: 'Learning the logic and language of computers'
  },
  {
    id: 9,
    day: 1,
    title: 'Programming Fundamentals',
    type: 'content',
    content: 'Programming is giving computers step-by-step instructions',
    bulletPoints: [
      'Variables: Named storage for data',
      'Data Types: Strings, numbers, booleans',
      'Logic: If/else decisions and loops',
      'Functions: Reusable blocks of code',
      'Algorithms: Step-by-step problem solving'
    ]
  },
  {
    id: 10,
    day: 1,
    title: 'Real-World Example: ATM Machine',
    type: 'content',
    content: 'Programming logic in an everyday device',
    bulletPoints: [
      'Input: User enters PIN',
      'Logic: Check PIN against database',
      'Decision: PIN correct? Yes/No',
      'Action: Dispense cash or deny access',
      'Loop: Ask if want another transaction'
    ]
  },
  {
    id: 11,
    day: 1,
    title: 'Game: Code the Logic',
    type: 'game',
    content: 'Can you write pseudocode for a traffic light?',
    bulletPoints: [
      'Pseudocode = English-like instructions',
      '1. Start with red light (30 sec)',
      '2. Change to yellow (5 sec)',
      '3. Change to green (25 sec)',
      '4. Repeat forever'
    ]
  },
  {
    id: 12,
    day: 1,
    title: 'AI in Programming: Code Assistance',
    type: 'content',
    content: 'Artificial Intelligence helps developers write faster',
    bulletPoints: [
      'GitHub Copilot: AI suggests code completions',
      'ChatGPT: Helps debug and explain code',
      'AI detects bugs before testing',
      'Machine learning predicts performance issues',
      '⚡ Result: Faster development cycles'
    ]
  },

  // SECTION 3: WHAT IS WEB DEVELOPMENT?
  {
    id: 13,
    day: 1,
    title: 'What is Web Development?',
    type: 'section',
    content: 'Building the websites and applications we use daily'
  },
  {
    id: 14,
    day: 1,
    title: 'Frontend vs Backend vs Full Stack',
    type: 'content',
    content: 'Different roles in creating web applications',
    bulletPoints: [
      'Frontend: What users see and interact with (HTML, CSS, JS)',
      'Backend: Servers, databases, business logic (Python, Node.js)',
      'Full Stack: Developers who do both',
      'DevOps: Deployment and infrastructure',
      'Web Dev Career: High demand, creative, well-paid'
    ]
  },
  {
    id: 15,
    day: 1,
    title: 'Real-World Example: Netflix Architecture',
    type: 'content',
    content: 'How a million users watch movies simultaneously',
    bulletPoints: [
      'Frontend: React app for smooth playback UI',
      'Backend: Servers handling user data & payments',
      'Database: Millions of movies and user preferences',
      'API: Communication between frontend & backend',
      'Streaming CDN: Videos delivered from closest servers'
    ]
  },
  {
    id: 16,
    day: 1,
    title: 'Curiosity Questions: Dig Deeper',
    type: 'quiz',
    content: 'Research web development careers',
    bulletPoints: [
      '💼 What\'s the average salary for frontend developers?',
      '💼 Which companies have the most interesting tech stacks?',
      '💼 What is DevOps and why is it important?',
      '💼 How do developers handle millions of users?'
    ]
  },

  // DAY 2 - HTML & CSS IN DETAIL
  {
    id: 17,
    day: 2,
    title: 'Day 2: HTML & CSS Deep Dive',
    type: 'section',
    content: 'Structure and styling that powers the web'
  },

  // SECTION 4: HTML IN DETAIL
  {
    id: 18,
    day: 2,
    title: 'HTML: Building Page Structure',
    type: 'section',
    content: 'HyperText Markup Language - The skeleton of web pages'
  },
  {
    id: 19,
    day: 2,
    title: 'HTML Fundamentals',
    type: 'content',
    content: 'Tags are instructions that tell browsers how to display content',
    bulletPoints: [
      '<html> - Root element wrapping entire page',
      '<head> - Metadata: title, meta tags, stylesheets',
      '<body> - Visible content users see',
      'Self-closing tags: <img />, <input />, <br />',
      'Nesting: Elements inside elements for hierarchy'
    ]
  },
  {
    id: 20,
    day: 2,
    title: 'Semantic HTML5 Elements',
    type: 'content',
    content: 'Meaningful tags that describe content purpose to browsers & assistants',
    bulletPoints: [
      '<header> - Site header with logo & nav',
      '<nav> - Navigation links',
      '<main> - Primary content (only ONE per page)',
      '<article> - Self-contained content (blog post, news)',
      '<section> - Thematic grouping with heading',
      '<aside> - Sidebar or related content',
      '<footer> - Footer with copyright & links'
    ]
  },
  {
    id: 21,
    day: 2,
    title: 'Forms: Collecting User Input',
    type: 'content',
    content: 'Interactive elements that capture data from users',
    bulletPoints: [
      '<form> - Container for input elements',
      '<input type="text"> - Text field',
      '<textarea> - Multi-line text input',
      '<select> - Dropdown menu',
      '<button type="submit"> - Form submission',
      'name attribute - Data label on submission'
    ]
  },
  {
    id: 22,
    day: 2,
    title: 'Real-World: Building a Contact Form',
    type: 'content',
    bulletPoints: [
      'User enters: Name, Email, Message',
      'Browser packages data in form submission',
      'Server receives POST request with data',
      'Server validates & saves to database',
      'Send confirmation email to user'
    ]
  },
  {
    id: 23,
    day: 2,
    title: 'Game: Identify HTML Mistakes',
    type: 'game',
    content: 'Spot the semantic HTML errors in bad code',
    bulletPoints: [
      'Bad: <div>Contact</div> for navigation',
      'Good: <nav><a href="/contact">Contact</a></nav>',
      'Bad: Multiple <main> tags',
      'Good: Single <main> with semantic sections'
    ]
  },
  {
    id: 24,
    day: 2,
    title: 'AI-Generated Accessibility',
    type: 'content',
    content: 'AI tools ensure websites work for everyone',
    bulletPoints: [
      'AI adds alt text to images automatically',
      'Screen reader optimization with semantic HTML',
      'WCAG accessibility standards checked by AI',
      'Alt text example: <img alt="A golden retriever playing fetch">',
      'Result: More users can use your site'
    ]
  },

  // SECTION 5: CSS IN DETAIL
  {
    id: 25,
    day: 2,
    title: 'CSS: Styling & Layout Mastery',
    type: 'section',
    content: 'Making websites beautiful and responsive'
  },
  {
    id: 26,
    day: 2,
    title: 'CSS Selectors & Specificity',
    type: 'content',
    content: 'Targeting elements with precision',
    bulletPoints: [
      'Element: p {} - All paragraphs',
      'Class: .button {} - Elements with class="button"',
      'ID: #header {} - Single element with id="header"',
      'Attribute: [type="email"] {} - Input type email',
      'Specificity: ID > Class > Element'
    ]
  },
  {
    id: 27,
    day: 2,
    title: 'The CSS Box Model',
    type: 'content',
    content: 'Every element is a box with padding, border, margin',
    bulletPoints: [
      'Content: Actual element (text, image)',
      'Padding: Space INSIDE border',
      'Border: Line around element',
      'Margin: Space OUTSIDE border',
      'box-sizing: border-box; includes padding/border in width'
    ]
  },
  {
    id: 28,
    day: 2,
    title: 'Flexbox: One-Dimensional Layouts',
    type: 'content',
    content: 'Align items in rows or columns with ease',
    bulletPoints: [
      'display: flex; - Enable flexbox',
      'flex-direction: row | column - Direction',
      'justify-content: center/space-between - Horizontal align',
      'align-items: center - Vertical align',
      'gap: 20px; - Space between items'
    ]
  },
  {
    id: 29,
    day: 2,
    title: 'Grid: Two-Dimensional Layouts',
    type: 'content',
    content: 'Complex layouts with rows AND columns',
    bulletPoints: [
      'display: grid; - Enable grid',
      'grid-template-columns: 1fr 2fr 1fr; - Column sizes',
      'grid-template-rows: auto 200px; - Row sizes',
      'gap: 20px; - Space between items',
      'Perfect for: Dashboards, photo galleries'
    ]
  },
  {
    id: 30,
    day: 2,
    title: 'Responsive Design: Mobile First',
    type: 'content',
    content: 'Websites that look great on all device sizes',
    bulletPoints: [
      'Start with mobile layout, add features for larger screens',
      '@media (min-width: 768px) {} - Tablet breakpoint',
      '@media (min-width: 1024px) {} - Desktop breakpoint',
      'Responsive images: max-width: 100%;',
      'Mobile-first approach increases performance'
    ]
  },
  {
    id: 31,
    day: 2,
    title: 'Quiz: CSS Knowledge Check',
    type: 'quiz',
    content: 'Test your understanding of CSS concepts',
    bulletPoints: [
      '❓ What\'s the difference between padding and margin?',
      '❓ When would you use Grid vs Flexbox?',
      '❓ How does the cascade determine which rule wins?',
      '❓ What\'s a media query and why use mobile-first?'
    ]
  },

  // MINI PROJECT 1: HTML & CSS
  {
    id: 32,
    day: 2,
    title: 'Mini Project: Build a Portfolio Website',
    type: 'project',
    content: 'Create your first real website using HTML & CSS',
    bulletPoints: [
      'HTML: Semantic structure with header, nav, main, footer',
      'CSS: Responsive design using Flexbox/Grid',
      'Include: About, Projects, Contact sections',
      'Add: Navigation links between sections',
      'Deploy: Free hosting on GitHub Pages or Vercel'
    ]
  },
  {
    id: 33,
    day: 2,
    title: 'Portfolio Project: Resources & Tools',
    type: 'resource',
    content: 'Free tools to build your portfolio',
    bulletPoints: [
      '🔗 Figma.com - Design your layout first',
      '🔗 VSCode - Professional code editor',
      '🔗 GitHub - Store your code & deploy',
      '🔗 Vercel.com - Free hosting for websites',
      '🔗 Unsplash - Free high-quality images'
    ]
  },

  // DAY 3 - JAVASCRIPT & PROJECTS
  {
    id: 34,
    day: 3,
    title: 'Day 3: JavaScript & Modern Web Dev',
    type: 'section',
    content: 'Making websites interactive and building real applications'
  },

  // SECTION 6: JAVASCRIPT IN DEPTH
  {
    id: 35,
    day: 3,
    title: 'JavaScript: The Language of Interactivity',
    type: 'section',
    content: 'Bringing web pages to life with dynamic behavior'
  },
  {
    id: 36,
    day: 3,
    title: 'Variables & Data Types',
    type: 'content',
    content: 'Storing and managing information in JavaScript',
    bulletPoints: [
      'const - Constant (most used, default choice)',
      'let - Variable that changes',
      'Strings: "text" or `template`',
      'Numbers: 42, 3.14 (no separate int)',
      'Booleans: true/false for logic'
    ]
  },
  {
    id: 37,
    day: 3,
    title: 'Objects & Arrays: Organizing Data',
    type: 'content',
    content: 'Complex data structures for real applications',
    bulletPoints: [
      'Arrays: [1, 2, 3] - Ordered lists',
      'Objects: {name: "John", age: 30} - Key-value pairs',
      'Accessing: array[0], object.name or object["name"]',
      'Methods: .push(), .pop(), .map(), .filter()',
      'Common: Working with JSON from APIs'
    ]
  },
  {
    id: 38,
    day: 3,
    title: 'Functions: Reusable Code Blocks',
    type: 'content',
    content: 'DRY principle - Don\'t Repeat Yourself',
    bulletPoints: [
      'Function declaration: function greet(name) {}',
      'Arrow function: const greet = (name) => {}',
      'Parameters: Inputs to the function',
      'Return: Output from the function',
      'Real example: Validate email format'
    ]
  },
  {
    id: 39,
    day: 3,
    title: 'Most Used: ES6+ Features',
    type: 'content',
    content: 'Modern JavaScript syntax every web dev uses',
    bulletPoints: [
      'Arrow functions: (x) => x * 2',
      'Template literals: `Hello ${name}`',
      'Destructuring: const {name, age} = user',
      'Spread operator: [...array1, ...array2]',
      'Default parameters: const func = (x = 10) => {}'
    ]
  },
  {
    id: 40,
    day: 3,
    title: 'DOM Manipulation: Interactive Pages',
    type: 'content',
    content: 'JavaScript controls HTML elements in real-time',
    bulletPoints: [
      'Select: document.querySelector(".button")',
      'Change text: element.textContent = "New text"',
      'Change style: element.style.color = "red"',
      'Add/remove class: element.classList.add("active")',
      'Create new: document.createElement("div")'
    ]
  },
  {
    id: 41,
    day: 3,
    title: 'Events: Responding to User Actions',
    type: 'content',
    content: 'Code runs when user clicks, types, scrolls, etc.',
    bulletPoints: [
      'Click: element.addEventListener("click", handler)',
      'Submit: form.addEventListener("submit", validate)',
      'Input: input.addEventListener("input", handleChange)',
      'Keyboard: document.addEventListener("keydown", moveCharacter)',
      'Mouse: element.addEventListener("mouseover", highlight)'
    ]
  },
  {
    id: 42,
    day: 3,
    title: 'Real-World: Building a Todo App',
    type: 'content',
    bulletPoints: [
      'HTML: Input field + button + list',
      'JS: Listen for submit event',
      'JS: Create <li> for each todo',
      'JS: Add delete button to each item',
      'JS: Save todos to localStorage'
    ]
  },
  {
    id: 43,
    day: 3,
    title: 'Asynchronous JavaScript: APIs & Promises',
    type: 'content',
    content: 'Fetching data without blocking user interaction',
    bulletPoints: [
      'Promises: Handle future results (.then())',
      'async/await: Cleaner promise syntax',
      'fetch() API: Get data from servers',
      'Real example: Fetch weather data, display instantly',
      'Error handling: try/catch for failed requests'
    ]
  },
  {
    id: 44,
    day: 3,
    title: 'Game: Debug the JavaScript',
    type: 'game',
    content: 'Find and fix common JavaScript errors',
    bulletPoints: [
      'Error: const x = {age: 30}; console.log(x.name) // undefined',
      'Error: const arr = [1,2,3]; arr[10] // undefined',
      'Error: const func = (x) => x + 1; func() // NaN',
      'Tip: Use console.log() to debug!'
    ]
  },
  {
    id: 45,
    day: 3,
    title: 'AI in JavaScript: Smart Code Review',
    type: 'content',
    content: 'AI catches bugs before they reach production',
    bulletPoints: [
      'ESLint with AI: Detects unused variables',
      'Prettier: Automatically formats code',
      'AI suggests performance improvements',
      'Find security vulnerabilities automatically',
      'Result: Better, safer code in less time'
    ]
  },
  {
    id: 46,
    day: 3,
    title: 'Curiosity Questions: Go Deeper',
    type: 'quiz',
    content: 'Research advanced JavaScript concepts',
    bulletPoints: [
      '🔍 What is the Event Loop? (Advanced!)',
      '🔍 How does JavaScript handle async operations?',
      '🔍 What are Closures and why are they useful?',
      '🔍 What is "this" and why is it confusing?'
    ]
  },

  // MINI PROJECT 2: JAVASCRIPT
  {
    id: 47,
    day: 3,
    title: 'Mini Project: Interactive Weather App',
    type: 'project',
    content: 'Fetch real weather data and display it beautifully',
    bulletPoints: [
      'HTML: Input for city name, display area',
      'JavaScript: Fetch weather from free API (OpenWeatherMap)',
      'Dynamic: Show temperature, humidity, conditions',
      'Styling: Color codes (blue=cold, red=hot)',
      'User-friendly: Handle errors gracefully'
    ]
  },
  {
    id: 48,
    day: 3,
    title: 'Weather App: Useful Resources',
    type: 'resource',
    content: 'APIs and tools for your project',
    bulletPoints: [
      '🌤️ OpenWeatherMap.org - Free weather API',
      '🌍 Geolocation API - Get user location automatically',
      '📚 MDN Web Docs - JavaScript documentation',
      '💡 Stack Overflow - Help when stuck',
      '🐛 Chrome DevTools - Debug your code'
    ]
  },

  // ADVANCED SECTION: FREELANCE WEB DEV
  {
    id: 49,
    day: 3,
    title: 'Freelance Web Development: Career Path',
    type: 'section',
    content: 'Turn your skills into a sustainable income'
  },
  {
    id: 50,
    day: 3,
    title: 'Freelance Fundamentals',
    type: 'content',
    content: 'Starting your web development business',
    bulletPoints: [
      'Portfolio: Showcase your best projects',
      'Platforms: Fiverr, Upwork, Toptal for clients',
      'Pricing: Research market rates ($25-150/hour)',
      'Contracts: Always have written agreements',
      'Communication: Clear client expectations = happy projects'
    ]
  },
  {
    id: 51,
    day: 3,
    title: 'In-Demand Skills for Freelancers',
    type: 'content',
    content: 'What clients are actively seeking',
    bulletPoints: [
      'Responsive web design - Essential',
      'WordPress customization - High demand',
      'React/Vue development - Premium rates',
      'Performance optimization - Valued skill',
      'SEO optimization - Business-focused clients'
    ]
  },
  {
    id: 52,
    day: 3,
    title: 'Real-World: Building Your First Client Project',
    type: 'content',
    bulletPoints: [
      '1. Discovery call with client about their needs',
      '2. Create wireframes and get approval',
      '3. Build static pages with HTML/CSS',
      '4. Add JavaScript interactivity',
      '5. Test thoroughly, get client feedback',
      '6. Deploy and provide maintenance'
    ]
  },
  {
    id: 53,
    day: 3,
    title: 'AI Tools for Freelancers: Work Smarter',
    type: 'content',
    content: 'Increase productivity and quality',
    bulletPoints: [
      'ChatGPT: Generate copy, debug code instantly',
      'GitHub Copilot: AI-assisted coding (saves hours)',
      'Figma AI: Auto-generate design variations',
      'Google PageSpeed AI: Optimize performance',
      'Result: Deliver more projects, earn more'
    ]
  },
  {
    id: 54,
    day: 3,
    title: 'Quiz: Ready to Freelance?',
    type: 'quiz',
    content: 'Self-assessment questions',
    bulletPoints: [
      '✓ Can you build a website from scratch?',
      '✓ Do you understand client communication?',
      '✓ Can you handle feedback and revisions?',
      '✓ Are you comfortable with self-promotion?'
    ]
  },

  // FINAL RESOURCES SECTION
  {
    id: 55,
    day: 3,
    title: 'Complete Learning Resources',
    type: 'resource',
    content: 'Your toolkit for continuous growth',
    bulletPoints: [
      '📖 freeCodeCamp - Free comprehensive courses',
      '📖 MDN Web Docs - Official web standards docs',
      '📖 CSS-Tricks - Advanced CSS tutorials',
      '📖 JavaScript.info - Complete JS guide',
      '📖 Dev.to - Daily web dev articles'
    ]
  },
  {
    id: 56,
    day: 3,
    title: 'Advanced Topics to Explore',
    type: 'resource',
    content: 'Next steps after mastering fundamentals',
    bulletPoints: [
      '⚛️ React/Vue/Angular - Frontend frameworks',
      '🟢 Node.js - Backend JavaScript',
      '🗄️ Databases - SQL & MongoDB',
      '🔐 Security - HTTPS, authentication',
      '🚀 DevOps - Deployment & infrastructure'
    ]
  },
  {
    id: 57,
    day: 3,
    title: 'AI-Powered Learning Tools',
    type: 'resource',
    content: 'Use AI to accelerate your learning',
    bulletPoints: [
      '🤖 ChatGPT - Ask any programming question',
      '🤖 GitHub Copilot - AI pair programmer',
      '🤖 Codeium - Free AI code completion',
      '🤖 Tabnine - Intelligent code assistant',
      '⚡ Tip: Use AI to understand concepts faster'
    ]
  },
  {
    id: 58,
    day: 3,
    title: 'Challenge: Build a Full Project',
    type: 'project',
    content: 'Capstone: Combine everything you\'ve learned',
    bulletPoints: [
      'Portfolio Site - HTML, CSS, responsive design',
      'Contact Form - Validation, submission handling',
      'Blog Post Listing - Fetch from mock API',
      'Interactive Features - At least 3 JS interactions',
      'Deploy: Live on internet, share with network'
    ]
  },

  // CLOSING SLIDES
  {
    id: 59,
    day: 3,
    title: 'Your Web Dev Journey Continues',
    type: 'content',
    content: 'You\'ve learned the fundamentals. Now build!',
    bulletPoints: [
      'Practice: Build projects, not tutorials',
      'Read Others\' Code: Learn industry standards',
      'Stay Updated: Tech evolves, keep learning',
      'Build in Public: Share projects, get feedback',
      'Network: Connect with other developers'
    ]
  },
  {
    id: 60,
    day: 3,
    title: 'Quick Recap: Core Concepts',
    type: 'content',
    content: 'What you\'ve mastered in 3 days',
    bulletPoints: [
      '🌐 Web Fundamentals - How browsers request/display pages',
      '🏗️ HTML - Semantic structure for accessibility',
      '🎨 CSS - Beautiful, responsive layouts',
      '⚙️ JavaScript - Dynamic interactions & APIs',
      '💼 Freelancing - Path to income from your skills'
    ]
  },
  {
    id: 61,
    day: 3,
    title: 'The Most Important Advice',
    type: 'content',
    content: 'Wisdom for a successful development career',
    bulletPoints: [
      'Consistency beats perfection - Code daily',
      'Google + Stack Overflow are your friends',
      'Read error messages carefully - They help',
      'Use developer tools (F12) constantly - Debug like a pro',
      'Help others - Teaching reinforces learning'
    ]
  },
  {
    id: 62,
    day: 3,
    title: 'Thank You & Good Luck!',
    subtitle: 'The web is waiting for your creations',
    type: 'title',
    backgroundColor: 'from-slate-blue-900 to-purple-900'
  }
];
