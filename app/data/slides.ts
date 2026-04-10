export interface SlideContent {
  id: number;
  day: number;
  title: string;
  subtitle?: string;
  content?: string;
  bulletPoints?: string[];
  type: 'title' | 'content' | 'section' | 'quiz' | 'game' | 'project' | 'resource';
  backgroundColor?: string;
  image?: string;
  duration?: string;
}

export const slides: SlideContent[] = [
  // DAY 1 - FOUNDATIONS (270 min total)
  {
    id: 1,
    day: 1,
    title: 'Web Development Fundamentals',
    subtitle: 'A 3-Day Crash Course: HTML, CSS & JavaScript',
    type: 'title',
    backgroundColor: 'from-purple-900 to-slate-blue-900',
    image: '/hero.webp'
  },

  // SECTION 1: WHAT IS THE WEB? (50 min)
  {
    id: 2,
    day: 1,
    title: 'What is the Web?',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Understanding the internet, browsers, and how information flows',
    duration: '50 min'
  },
  {
    id: 3,
    day: 1,
    title: 'The Internet & Web Basics',
    type: 'content',
    duration: '15 min',
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
    duration: '15 min',
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
    duration: '15 min',
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
    title: 'Curiosity Questions: Explore',
    type: 'quiz',
    duration: '5 min',
    backgroundColor: 'from-orange-900 to-red-900',
    content: 'Research these fascinating web concepts (explore on your own time)',
    bulletPoints: [
      '🔍 How does DNS translate "google.com" to an IP address?',
      '🔍 Why is HTTPS more secure than HTTP?'
    ]
  },

  // SECTION 2: WHAT IS PROGRAMMING? (55 min)
  {
    id: 7,
    day: 1,
    title: 'What is Programming?',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Learning the logic and language of computers',
    duration: '55 min'
  },
  {
    id: 8,
    day: 1,
    title: 'The Core: Creative Problem Solving',
    type: 'content',
    duration: '15 min',
    content: 'Programming is just a tool to solve human problems',
    bulletPoints: [
      'Mindset Shift: Don\'t just write code; find solutions',
      'Break it Down: Cut large problems into tiny pieces',
      'Creativity > Memorization: Think logically, don\'t memorize syntax',
      'Rule #1: Solve the problem on paper first, then code it'
    ]
  },
  {
    id: 9,
    day: 1,
    title: 'Programming Fundamentals',
    type: 'content',
    duration: '15 min',
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
    duration: '10 min',
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
    duration: '15 min',
    backgroundColor: 'from-emerald-900 to-teal-900',
    content: 'Can you write pseudocode for a traffic light?',
    bulletPoints: [
      'Pseudocode = English-like instructions (not real code)',
      'Step 1: Start with red light (30 sec)',
      'Step 2: Change to yellow (5 sec)',
      'Step 3: Change to green (25 sec)',
      'Step 4: Repeat forever',
      'Activity: Write this out in plain English before coding. This is real programming.'
    ]
  },

  // SECTION 3: WHAT IS WEB DEVELOPMENT? (45 min)
  {
    id: 12,
    day: 1,
    title: 'What is Web Development?',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Building the websites and applications we use daily',
    duration: '45 min'
  },
  {
    id: 13,
    day: 1,
    title: 'Frontend vs Backend vs Full Stack',
    type: 'content',
    duration: '15 min',
    content: 'Different roles in creating web applications',
    bulletPoints: [
      'Frontend: What users see and interact with (HTML, CSS, JavaScript)',
      'Backend: Servers, databases, business logic (Python, Node.js)',
      'Full Stack: Developers who do both',
      'Web Dev Career: High demand, creative, well-paid'
    ]
  },
  {
    id: 14,
    day: 1,
    title: 'The Core Trio: HTML, CSS & JavaScript',
    type: 'content',
    duration: '15 min',
    content: 'The essential languages for building web pages',
    bulletPoints: [
      'HTML: The structure and skeleton (what is on the page)',
      'CSS: The look, feel, and decoration (how it looks)',
      'JavaScript: The interactive behavior (how it responds to users)',
      'Together, they form the foundation of all frontend development'
    ]
  },
  {
    id: 15,
    day: 1,
    title: 'Real-World Example: Netflix Architecture',
    type: 'content',
    duration: '15 min',
    content: 'How a platform serves millions of users',
    bulletPoints: [
      'Frontend: React app for smooth playback UI',
      'Backend: Servers handling user data & payments',
      'Database: Millions of movies and user preferences',
      'API: Communication between frontend & backend',
      'Result: Seamless streaming experience'
    ]
  },

  // HANDS-ON EXERCISE: YOUR FIRST HTML PAGE (70 min)
  {
    id: 16,
    day: 1,
    title: 'Hands-On Exercise: Your First HTML Page',
    type: 'project',
    duration: '70 min',
    backgroundColor: 'from-fuchsia-900 to-purple-900',
    content: 'Write your first HTML file, open it in a browser, and see it render',
    bulletPoints: [
      'Part 1 (15 min): Create an HTML file in VSCode',
      'Part 2 (10 min): Open in a browser - watch your code come to life',
      'Part 3 (30 min): Modify it - add content, experiment, make it yours',
      'Part 4 (15 min): Celebrate - you just wrote your first webpage!'
    ]
  },

  // DAY 2 - HTML & CSS MASTERY (270 min total)
  {
    id: 17,
    day: 2,
    title: 'Day 2: HTML & CSS Mastery',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Structure and styling that powers the web',
    duration: '270 min'
  },

  // SECTION 4: HTML IN DETAIL (80 min)
  {
    id: 18,
    day: 2,
    title: 'HTML In Detail',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Building the structure of web pages',
    duration: '80 min'
  },
  {
    id: 19,
    day: 2,
    title: 'HTML Fundamentals',
    type: 'content',
    duration: '18 min',
    content: 'Tags are instructions that tell browsers how to display content',
    bulletPoints: [
      '<html> - Root element wrapping entire page',
      '<head> - Metadata: title, meta tags, stylesheets (not visible)',
      '<body> - Visible content users see',
      'Self-closing tags: <img />, <input />, <br />',
      'Golden Rule: Always close your tags <tag>content</tag>'
    ]
  },
  {
    id: 20,
    day: 2,
    title: 'Semantic HTML5 Elements',
    type: 'content',
    duration: '20 min',
    content: 'Meaningful tags that describe content purpose',
    bulletPoints: [
      '<header> - Site header with logo & navigation',
      '<nav> - Navigation links',
      '<main> - Primary content (only ONE per page!)',
      '<article> - Self-contained content (blog post, news)',
      '<section> - Thematic grouping with heading',
      '<aside> - Sidebar or related content',
      '<footer> - Footer with copyright & links',
      'Why this matters: Search engines understand content better; screen readers work; code is cleaner'
    ]
  },
  {
    id: 21,
    day: 2,
    title: 'Forms: Collecting User Input',
    type: 'content',
    duration: '20 min',
    content: 'Interactive elements that capture data from users',
    bulletPoints: [
      '<form> - Container for input elements',
      '<input type="text"> - Text field',
      '<input type="email"> - Email field (with validation)',
      '<textarea> - Multi-line text input',
      '<button type="submit"> - Form submission',
      'Example: Use <label> with <input> for accessibility'
    ]
  },
  {
    id: 22,
    day: 2,
    title: 'Game: Spot the HTML Mistakes',
    type: 'game',
    duration: '15 min',
    backgroundColor: 'from-emerald-900 to-teal-900',
    content: 'Identify semantic HTML errors in bad code',
    bulletPoints: [
      'Bad: <div>Contact Us</div> (using div instead of nav)',
      'Good: <nav><a href="/contact">Contact</a></nav>',
      'Bad: Multiple <main> tags on one page',
      'Good: Single <main> with multiple <section> tags inside',
      'Activity: Spot these mistakes in real websites!'
    ]
  },

  // SECTION 5: CSS IN DETAIL (105 min)
  {
    id: 23,
    day: 2,
    title: 'CSS In Detail',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Making websites beautiful and responsive',
    duration: '105 min'
  },
  {
    id: 24,
    day: 2,
    title: 'CSS Selectors & Specificity',
    type: 'content',
    duration: '15 min',
    content: 'Targeting elements with precision',
    bulletPoints: [
      'Element: p {} - All paragraphs',
      'Class: .button {} - Elements with class="button"',
      'ID: #header {} - Single element with id="header"',
      'Specificity rule: ID > Class > Element',
      'Pro tip: Use classes most, IDs rarely'
    ]
  },
  {
    id: 25,
    day: 2,
    title: 'The CSS Box Model',
    type: 'content',
    duration: '18 min',
    content: 'Every element is a box with padding, border, margin',
    bulletPoints: [
      'Content: Actual element (text, image, etc.)',
      'Padding: Space INSIDE border',
      'Border: Line around element',
      'Margin: Space OUTSIDE border',
      'box-sizing: border-box; includes padding/border in width calculation',
      'All four work together to create spacing and visual hierarchy'
    ]
  },
  {
    id: 26,
    day: 2,
    title: 'Flexbox: One-Dimensional Layouts',
    type: 'content',
    duration: '20 min',
    content: 'Align items in rows or columns with ease',
    bulletPoints: [
      'display: flex; - Enable flexbox',
      'flex-direction: row | column - Direction',
      'justify-content: center/space-between - Horizontal alignment',
      'align-items: center - Vertical alignment',
      'gap: 20px; - Space between items',
      'The most important CSS layout tool for beginners'
    ]
  },
  {
    id: 27,
    day: 2,
    title: 'Responsive Design: Mobile First',
    type: 'content',
    duration: '15 min',
    content: 'Websites that look great on all device sizes',
    bulletPoints: [
      'Mobile-first approach: Code for mobile first (small screens)',
      '@media (min-width: 768px) {} - Tablet breakpoint',
      '@media (min-width: 1024px) {} - Desktop breakpoint',
      'Always set width: 100%; on images',
      'Test on your phone! (Chrome DevTools has mobile view)',
      'Start mobile, add complexity for larger screens'
    ]
  },
  {
    id: 28,
    day: 2,
    title: 'Developer Tools: Your Superpower',
    type: 'content',
    duration: '10 min',
    content: 'Inspect and debug any website on the internet',
    bulletPoints: [
      'Press F12 (or Right Click → Inspect) to open DevTools',
      'Elements Tab: See the HTML & CSS of any website',
      'Live Editing: Change styles to test ideas instantly',
      'Mobile View: Emulate phones and tablets to test responsiveness',
      'This is THE most essential tool for every web developer!',
      'Pro tips: Click color swatches to change colors; learn from beautiful websites'
    ]
  },
  {
    id: 29,
    day: 2,
    title: 'Quiz: CSS Knowledge Check',
    type: 'quiz',
    duration: '12 min',
    backgroundColor: 'from-orange-900 to-red-900',
    content: 'Test your understanding of CSS concepts',
    bulletPoints: [
      '❓ What\'s the difference between padding and margin?',
      '❓ When would you use Flexbox vs normal flow?',
      '❓ How does the cascade determine which rule wins?',
      '❓ What\'s a media query and why use mobile-first?'
    ]
  },
  {
    id: 30,
    day: 2,
    title: 'Senior Dev Tips: Code Like a Pro',
    type: 'content',
    duration: '15 min',
    content: 'HTML & CSS pitfalls to avoid from day one',
    bulletPoints: [
      'Stop using <div> for everything. Use semantic tags.',
      'CSS gets messy fast. Comment your code. Organize logically.',
      'Pitfall: Focusing too much on Desktop. ALWAYS design Mobile-First.',
      'Mentality: Steal like an artist. Learn from beautiful websites using DevTools.',
      'Perfection is the enemy of progress. Build it messy first. Then refactor.'
    ]
  },

  // MINI PROJECT 1: BUILD A PORTFOLIO WEBSITE (80 min)
  {
    id: 31,
    day: 2,
    title: 'Mini Project 1: Build a Portfolio Website',
    type: 'project',
    duration: '80 min',
    backgroundColor: 'from-fuchsia-900 to-purple-900',
    content: 'Create your first real website using HTML & CSS',
    bulletPoints: [
      'Planning Phase (10 min): Sketch your layout on paper',
      'Build Phase (50 min): Write HTML structure with semantic tags',
      'Styling Phase (20 min): Add CSS for layout, colors, fonts',
      'Include: Header, navigation, about section, projects, contact, footer',
      'Make it responsive using @media queries',
      'Bonus: Deploy to Vercel or GitHub Pages'
    ]
  },

  // DAY 3 - JAVASCRIPT FUNDAMENTALS (270 min total)
  {
    id: 32,
    day: 3,
    title: 'Day 3: JavaScript Fundamentals',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Making websites interactive and building real applications',
    duration: '270 min'
  },

  // SECTION 6: JAVASCRIPT IN DEPTH (155 min)
  {
    id: 33,
    day: 3,
    title: 'JavaScript In Depth',
    type: 'section',
    backgroundColor: 'from-blue-900 to-indigo-900',
    content: 'Bringing web pages to life with dynamic behavior',
    duration: '155 min'
  },
  {
    id: 34,
    day: 3,
    title: 'Variables & Data Types',
    type: 'content',
    duration: '15 min',
    content: 'Storing and managing information in JavaScript',
    bulletPoints: [
      'const name = "Alice"; - Use this by default',
      'let age = 25; - Use when value changes',
      'var old = 1; - Don\'t use (legacy)',
      'Strings: "text" or `template with ${variables}`',
      'Numbers: 42, 3.14 (no separate int type)',
      'Booleans: true/false for logic',
      'Arrays: [1, 2, 3] - Ordered lists',
      'Objects: {name: "Alice", age: 25} - Key-value pairs'
    ]
  },
  {
    id: 35,
    day: 3,
    title: 'Objects & Arrays: Organizing Data',
    type: 'content',
    duration: '15 min',
    content: 'Complex data structures for real applications',
    bulletPoints: [
      'Arrays: [1, 2, 3] - Ordered lists',
      'Objects: {name: "John", age: 30} - Key-value pairs',
      'Accessing: array[0], object.name or object["name"]',
      'Methods: .push(), .pop(), .includes(), .length',
      'Loop through arrays: for (let i = 0; i < array.length; i++)',
      'Working with JSON from APIs'
    ]
  },
  {
    id: 36,
    day: 3,
    title: 'Functions: Reusable Code Blocks',
    type: 'content',
    duration: '18 min',
    content: 'DRY Principle: Don\'t Repeat Yourself',
    bulletPoints: [
      'Function declaration: function greet(name) {}',
      'Arrow function: const greet = (name) => {}',
      'Parameters: Inputs to the function',
      'Return: Output from the function',
      'Real example: Validate email format',
      'Functions save time and make code cleaner'
    ]
  },
  {
    id: 37,
    day: 3,
    title: 'Most Used: ES6+ Features',
    type: 'content',
    duration: '12 min',
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
    id: 38,
    day: 3,
    title: 'DOM Manipulation: Interactive Pages',
    type: 'content',
    duration: '20 min',
    content: 'JavaScript controls HTML elements in real-time',
    bulletPoints: [
      'DOM = Document Object Model (the page itself)',
      'Select: document.querySelector(".button")',
      'Select multiple: document.querySelectorAll(".btn")',
      'Change text: element.textContent = "New text"',
      'Change HTML: element.innerHTML = "<em>Fancy</em>"',
      'Add/remove class: element.classList.add("active")',
      'Change styles: element.style.color = "red"',
      'Create elements: document.createElement("div")'
    ]
  },
  {
    id: 39,
    day: 3,
    title: 'Events: Responding to User Actions',
    type: 'content',
    duration: '20 min',
    content: 'Code runs when user clicks, types, scrolls, etc.',
    bulletPoints: [
      'Click: element.addEventListener("click", handler)',
      'Submit: form.addEventListener("submit", validate)',
      'Input: input.addEventListener("input", handleChange)',
      'Keyboard: document.addEventListener("keydown", moveCharacter)',
      'Mouse: element.addEventListener("mouseover", highlight)',
      'Example: button.addEventListener("click", () => { count++; })'
    ]
  },
  {
    id: 40,
    day: 3,
    title: 'Game: Debug the JavaScript',
    type: 'game',
    duration: '15 min',
    backgroundColor: 'from-emerald-900 to-teal-900',
    content: 'Find and fix common JavaScript errors',
    bulletPoints: [
      'Error: const x = {age: 30}; console.log(x.name) // undefined',
      'Error: const arr = [1,2,3]; arr[10] // undefined',
      'Error: Forgetting parentheses on function call: greet; vs greet()',
      'Fix: Always check if values exist before using them',
      'Pro Tip: Use console.log() constantly while debugging!'
    ]
  },
  {
    id: 41,
    day: 3,
    title: 'Tools That Help You Code Better',
    type: 'content',
    duration: '10 min',
    content: 'Professional tools that make development faster',
    bulletPoints: [
      'ESLint: Detects unused variables and bad practices',
      'Prettier: Automatically formats your code nicely',
      'Chrome DevTools: Debug your JavaScript in real-time',
      'VS Code Extensions: Make editing faster and easier',
      'GitHub Copilot: AI-assisted coding suggestions (optional)',
      'Result: Better, safer code in less time'
    ]
  },
  {
    id: 42,
    day: 3,
    title: 'Curiosity Questions: Go Deeper',
    type: 'quiz',
    duration: '10 min',
    backgroundColor: 'from-orange-900 to-red-900',
    content: 'Research advanced JavaScript concepts (on your own time)',
    bulletPoints: [
      '🔍 What is the difference between let and const?',
      '🔍 How do you loop through an array?',
      '🔍 What is the Event Loop and how does JavaScript handle events?'
    ]
  },
  {
    id: 43,
    day: 3,
    title: 'Senior Dev Mentality: JavaScript Pitfalls',
    type: 'content',
    duration: '10 min',
    content: 'How experienced developers approach JavaScript',
    bulletPoints: [
      'console.log() is your best friend. Print everything!',
      'Read error messages carefully. They tell you exactly what\'s wrong.',
      'Never copy-paste AI code without reading it. You MUST understand it.',
      'Imposter Syndrome is real and normal. We all Google stuff constantly.',
      'Focus on fundamentals. Frameworks change, but JavaScript logic stays.'
    ]
  },

  // MINI PROJECT 2: INTERACTIVE QUIZ (85 min)
  {
    id: 44,
    day: 3,
    title: 'Mini Project 2: Interactive Quiz Game',
    type: 'project',
    duration: '85 min',
    backgroundColor: 'from-fuchsia-900 to-purple-900',
    content: 'Build a quiz that tracks your score using variables, functions, and events',
    bulletPoints: [
      'Planning Phase (10 min): Decide on 5 quiz questions',
      'Build Phase (65 min): Create HTML, CSS, and JavaScript',
      'Testing Phase (10 min): Test all functionality',
      'Uses: Variables, functions, DOM selectors, event listeners, classList',
      'No async/await or fetch - pure DOM manipulation',
      'Bonus: Customize with your own questions and styling'
    ]
  },

  // SECTION 7: WHAT'S NEXT? (20 min)
  {
    id: 45,
    day: 3,
    title: 'Congratulations! You\'re a Web Developer',
    type: 'content',
    duration: '5 min',
    content: 'You just learned the fundamentals in 3 days',
    bulletPoints: [
      '✅ HTML structure and semantics',
      '✅ CSS styling and responsive design',
      '✅ JavaScript variables, functions, and events',
      '✅ DOM manipulation',
      '✅ How to build three real projects',
      'This is the foundation. Everything else is built on this.'
    ]
  },
  {
    id: 46,
    day: 3,
    title: 'Where to Go From Here',
    type: 'content',
    duration: '15 min',
    content: 'Your path to becoming a professional web developer',
    bulletPoints: [
      'Immediate: Rebuild projects, make them better, deploy to the internet',
      'Free hosting: Vercel (vercel.com) or Netlify (netlify.com)',
      'This week: Build 2-3 small tools (calculator, color picker, todo list)',
      'What employers want: Strong fundamentals, portfolio projects, problem-solving ability',
      'Next month: Learn React (or Vue/Angular), Node.js, Databases',
      'Free resources: freeCodeCamp, MDN Web Docs, JavaScript.info, Dev.to',
      'Community: GitHub (save code), local meetups, Twitter, Discord servers',
      'Remember: Consistency beats perfection. Code every day.'
    ]
  },

  // DAY 3 SUMMARY
  {
    id: 47,
    day: 3,
    title: 'Day 3 Summary',
    type: 'content',
    duration: '5 min',
    content: 'What you learned today',
    bulletPoints: [
      '⚙️ JavaScript variables, functions, and data structures',
      '🔧 DOM manipulation and events',
      '🎮 Built an interactive quiz game',
      '🚀 Clear next steps to continue your journey',
      'You are no longer a complete beginner. You are a junior web developer.'
    ]
  },

  // TAKE-HOME CHALLENGE
  {
    id: 48,
    day: 3,
    title: 'Take-Home Challenge: Personal Blog',
    type: 'project',
    backgroundColor: 'from-fuchsia-900 to-purple-900',
    content: 'Combine all skills from Days 1-3 in one complete project',
    bulletPoints: [
      'HTML: Semantic structure with header, nav, main, footer',
      'CSS: Responsive design (mobile-first, Flexbox layouts)',
      'JavaScript: 3+ interactive features (toggle menu, expand articles, search filter, dark mode)',
      'Scope: Build over 2-3 days in your own time (8-12 hours total)',
      'Deploy: Push to GitHub, deploy to Vercel/Netlify, share with friends',
      'Use this as your primary portfolio piece'
    ]
  },

  // APPENDIX: BONUS TOPICS
  {
    id: 49,
    day: 3,
    title: 'Bonus Topic: CSS Grid (Optional)',
    type: 'resource',
    backgroundColor: 'from-slate-800 to-gray-900',
    content: 'Advanced layouts after you master Flexbox',
    bulletPoints: [
      'Grid is powerful but can confuse beginners',
      'Perfect for: Dashboards, photo galleries, complex layouts',
      'display: grid; enables grid layout',
      'grid-template-columns: 1fr 2fr 1fr; defines columns',
      'Learn this AFTER mastering Flexbox and basic layouts'
    ]
  },

  // FINAL RESOURCES
  {
    id: 50,
    day: 3,
    title: 'Complete Learning Resources',
    type: 'resource',
    backgroundColor: 'from-slate-800 to-gray-900',
    content: 'Your toolkit for continuous growth',
    bulletPoints: [
      '📖 freeCodeCamp.org - Free comprehensive courses',
      '📖 MDN Web Docs - Official web standards docs',
      '📖 CSS-Tricks - Advanced CSS tutorials',
      '📖 JavaScript.info - Complete JavaScript guide',
      '📖 Dev.to - Daily web dev articles'
    ]
  },
  {
    id: 51,
    day: 3,
    title: 'Advanced Topics to Explore',
    type: 'resource',
    backgroundColor: 'from-slate-800 to-gray-900',
    content: 'Next steps after mastering fundamentals',
    bulletPoints: [
      '⚛️ React/Vue/Angular - Frontend frameworks',
      '🟢 Node.js - Backend JavaScript',
      '🗄️ Databases - SQL & MongoDB',
      '🔐 Security - HTTPS, authentication, passwords',
      '🚀 DevOps - Deployment & infrastructure'
    ]
  },

  // FINAL WISDOM
  {
    id: 52,
    day: 3,
    title: 'The Most Important Advice',
    type: 'content',
    content: 'Wisdom for a successful development career',
    bulletPoints: [
      'Consistency beats perfection. Code 30 min every day.',
      'Google and Stack Overflow are professional tools. Use them!',
      'Read error messages carefully. They tell you what\'s wrong.',
      'Use developer tools (F12) constantly. Inspect everything.',
      'Help others. Teaching reinforces your own learning.'
    ]
  },
  {
    id: 53,
    day: 3,
    title: 'Thank You & Good Luck!',
    subtitle: 'The web is waiting for your creations',
    type: 'title',
    backgroundColor: 'from-slate-blue-900 to-purple-900'
  }
];
