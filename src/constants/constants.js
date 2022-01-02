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
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

// Set of projects
export const allTags = new Set();

projects.forEach( p => {
  p.tech.forEach( t => allTags.add(t))
})

// export allTags;