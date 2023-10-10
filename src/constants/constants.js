export const projects = [
  {
    "name": "MealDrop",
    "description":["A complete, full-stack application that helps solve food waste! Restaurants with extra food can create a posting. Once a food bank notices a nearby posting, they can submit a pickup request and collect the extra food."],
    "tech":['JWT','Express JS','Node JS','MongoDB Cloud','Authentication',"API", "React", "Heroku"],
    "link":"https://github.com/PalaashKolhe/Meal-Drop",
    "img": "media/mealdrop.png"
  },{
    "name": "Project-Builder Social Platform",
    "description": ['A collaboration platform where people can see potential project ideas submitted by others.','It will allow authenticated users to create, view, interact (comment & like), and delete (their own) project ideas.','The Authentication system uses JWT, and therefore, we don\'t have to save any session data'],
    "tech": ['JWT','Express JS','Node JS','MongoDB Cloud','Authentication','Unit-tests',"API"],
    "link": "https://github.com/ShaishavShah04/Project-Builder",
    "img": "./media/projectbuilder.png"
  },{
    "name": "QR Code Game",
    "description":["A game allowing users to compete with other users to score nearby QR codes.", "Each QR code scanned is uploaded with a location and photo, adding points to your account","Other players can see this QR code on the map along with the image of surroundings! They can collect it for points", "You can also interact with other players by the leaderboards, searching, commenting, etc."],
    "tech":["Java", "Android", "Firebase","Google Cloud","Google Maps API"],
    "link":"https://github.com/CMPUT301W22T23/QR-Code-Game",
    "img": "./media/qrcodegame.png"
  },
  {
      "name": "Algorithmic CryptoCurrency Scanner",
      "description":["A script running on a EC2 instance that scans the cryptocurrency markets hourly. It fetches data from exchanges and analyzes the data for potential bullish indicators.","The results are compared with previously issued alerts to reduce redundancy, and are texted to my number."],
      "tech":["Python", "AWS (Hosting)", "CCXT Library (Data)", "Twilio (Messaging)"],
      "link":"https://github.com/ShaishavShah04/Crypto-Scanner",
      "img": "./media/scanner.png"
  },
  {
    "name": "Carbon Offset",
    "description":["An ASP.NET web-app which, given a tracking number, informs users of how much they should donate to offset the carbon emissions from their package.","The app queries 3 external APIs to get longitute and latitude points for the route of the package.","This was an app built to get exposure to the C# Language and ASP.NET MVC framework."],
    "tech":["C#","MVC","ASP.NET","API","HTML","CSS"],
    "link":"https://github.com/ShaishavShah04/Offset-Carbon-From-Packages/tree/master",
    "img": "./media/carbon.png"
  }, 
  {
      "name": "Cash Flow Management App",
      "description":["This is an android app that utilizes Firebase's OCR model to scan reciepts and summarize the spending habits in form of a pie chart."],
      "tech": ["Java","Firebase","Machine Learning (OCR)"],
      "link":"https://github.com/ShaishavShah04/Cash-Flow-Management-App",
      "img": "/media/app.png"
  },
  {
      "name": "Stock Widget",
      "description":["Search up any stock you want and find relevant information such as live prices, change, dividend yield, etc.","The widget also contains an animated graph with the stock price, stock-specific news articles links, and trending stocks worldwide. Just enter the stock ticker you want into the search bar!"],
      "tech":["Python", "Matplotlib","Webscraping"],
      "link":"https://github.com/ShaishavShah04/Stock-Widget",
      "img": "media/stock-widget.png"
  }, {
      "name": "Memories - A Social Platform",
      "description":["A fully responsive MERN stack application where users can create, view, update, delete, and interact with memories shared by other users.","The backend (created using Express) can handle all CRUD requests sent by the client-side form."],
      "tech":["MongoDB Cloud", "Express JS", "React JS", "Redux", "Node JS", "Heroku", "Netlify"],
      "link":"https://github.com/ShaishavShah04/MERN-Memories-Project",
      "img": "media/ss.png"
  }, {
    "name": "Personal Portfolio",
    "description":["My personal portfolio website created using React. The website is coded to read data from a JSON file to ease updating. This is purely front-end."],
    "tech":["React JS", "HTML", "CSS"],
    "link":"https://github.com/ShaishavShah04/Portfolio-Website",
    "img": "media/website.png"
  }
];

export const TimeLineData = [
  { year: 2023, text: 'Pushing Boundries', subtitle: 'Palantir || May 2023 - Aug 2023', details: [
    "I really enjoyed my time at Palantir! I was a intern working across the entire stack, responsible for ensuring the backend and frontend all had the necessary changes to bring my features to life. I was placed within a great team, and was working on the interesting AI related work within the company. Here are a few notable achievements:",
    "Led AIP Assist development by creating specialized plugins and selection logic to leveraging proprietary LLMs, supporting multi-step queries, and growing usage by 62% .",
    "Developed an internal tool to answer developer queries by performing semantic search by leveraging sharded codebase, and passing results as context while optimizing for token limits.",
    "Devised migration strategies to further decompose user permissions into smaller operations, allowing support for granular access control and view-only modes.",
    "Optimized Java services with caching, proxy objects, and multi-threading, reducing the p99 latency for orchestration endpoints by over 41%.",
    "Engineered performant, lightweight, and modular pages using Typescript and React, leveraging dynamic imports to reduce initial load times by 14% and enhance user state rendering.",
    "Java, Typescript, React, LLMs, Semantic Search, Chat Bots"
  ]},
  { year: 2022, text: 'My first Software Development Role', subtitle: 'Niricson Software Inc. || Apr 2022 - Aug 2022', details: [
    "Being my first software development internship, I learned a lot about technical standards and industry practices. Everything from comments to CI/CD on git!",
    "I worked on everything ranging from automation projects to reserve, use, and terminate GPU instances to fullstack development to implement new features!",
    "Within fullstack development, I was heavily involved in working with geospatial data. I was involved in the entire process -- from creating a more efficient storage solution to visualizing over 500,000+ data points dynamically, allowing for full user customization!",
    "Java Spring Boot, Vue JS, MongoDB, AWS RDS (SQL DB), S3"
  ]},
  { year: 2021, text: 'Worked as a Programming Instructor', subtitle: 'Discover Coding || Apr 2021 - Sep 2021', details: ['Working as a Coding Instructor at a local academy, I strengthened programming fundamentals of students by delivering lesson plans relating to HTML, CSS, JS, and block coding (varying by age).','I leveraged my skills to further the academy\'s vision of equipping youth for the digital economy.'] },
  { year: 2020, text: 'Started my degree at University of Alberta', subtitle: 'Specialization in Computing Science with Business Minor || 2020 - 2024', details: ['Relevant Courses: Practical Programming Methadology, Software Engineering, Databases, Algorithms and Data Structures','GPA: 4.0 / 4.0'] },
  { year: 2019, text: 'Cofounded Tech Talk Club', subtitle: 'President || Sep 2019 - Jun 2020', details: ['Tech Talk is a club I co-founded in high school with the goal of spreading both coding skills and digital literacy within our communities. We created workshops that taught Python, HTML, CSS','My role was to lead and coordinate a team of volunteers that would teach these workshops.'] },
];

// Set of projects
export const allTags = new Set();

projects.forEach( p => {
  p.tech.forEach( t => allTags.add(t))
})