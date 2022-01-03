export const projects = [
  {
      "name": "Algorithmic CryptoCurrency Scanner",
      "description":["A script running on a EC2 instance that scans the cryptocurrency markets hourly. It fetches data from exchanges and analyzes the data for potential bullish indicators.","The results are compared with previously issued alerts to reduce redundancy, and are texted to my number."],
      "tech":["Python", "AWS (Hosting)", "CCXT Library (Data)", "Twilio (Messaging)"],
      "link":"https://github.com/ShaishavShah04/Crypto-Scanner",
      "img": "./media/scanner.png"
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
      "tech":["Python", "BeautifulSoup4", "Matplotlib"],
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
    "img": "media/website.PNG"
  }        
];

export const TimeLineData = [
  { year: 2021, text: 'Worked as a Programming Instructor', subtitle: 'Discover Coding || Apr 2021 - Sep 2021', details: ['Working as a Coding Instructor at a local academy, I strengthened programming fundamentals of students by delivering lesson plans relating to HTML, CSS, JS, and block coding (varying by age).','I leveraged my skills to further the academy\'s vision of equipping youth for the digital economy.'] },
  { year: 2020, text: 'Started my degree at University of Alberta', subtitle: 'Specialization in Computing Science with Business Minor || 2020 - 2024', details: ['Relevant Courses: Practical Programming Methadology, Software Engineering, Databases, Algorithms and Data Structures','GPA: 4.0 / 4.0'] },
  { year: 2019, text: 'Cofounded Tech Talk Club', subtitle: 'President || Sep 2019 - Jun 2020', details: ['Tech Talk is a club I co-founded in high school with the goal of spreading both coding skills and digital literacy within our communities. We created workshops that taught Python, HTML, CSS','My role was to lead and coordinate a team of volunteers that would teach these workshops.'] },
];

// Set of projects
export const allTags = new Set();

projects.forEach( p => {
  p.tech.forEach( t => allTags.add(t))
})