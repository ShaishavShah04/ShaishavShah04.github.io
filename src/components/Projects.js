import React from 'react'
import "../styles/Projects.css";
import Link from '@mui/icons-material/Link';

function Projects() {

    const ProjectPageInfo = [
    {
        "proj-name": "Algorithmic CryptoCurrency Scanner",
        "proj-description":["A script running on a EC2 instance that scans the cryptocurrency markets hourly. It fetches data from exchanges and analyzes the data for potential bullish indicators.","The results are compared with previously issued alerts to reduce redundancy, and are texted to my number."],
        "proj-tech":"Python, AWS (Hosting), CCXT Library (Data), Twilio Client (Messages) ",
        "proj-link":"https://github.com/ShaishavShah04/Crypto-Scanner",
        "proj-img": "./media/scanner.png",
    }, 
    {
        "proj-name": "Cash Flow Management App",
        "proj-description":["This is an android app that utilizes Firebase's OCR model to scan reciepts and summarize the spending habits in form of a pie chart."],
        "proj-tech":"Java, Firebase, React Native, Machine Learning (OCR)",
        "proj-link":"https://github.com/ShaishavShah04/Crypto-Scanner",
        "proj-img": "/media/app.png",
    },
    {
        "proj-name": "Stock Widget",
        "proj-description":["A script running on a EC2 instance that scans the cryptocurrency markets hourly. It fetches data from exchanges and analyzes the data for potential bullish indicators.","The results are compared with previously issued alerts to reduce redundancy, and are texted to my number."],
        "proj-tech":"Python, AWS (Hosting), CCXT Library (Data), Twilio Client (Messages) ",
        "proj-link":"https://github.com/ShaishavShah04/Crypto-Scanner",
        "proj-img": "media/scanner.png",
    }, {
        "proj-name": "Portfolio Website",
        "proj-description":["A script running on a EC2 instance that scans the cryptocurrency markets hourly. It fetches data from exchanges and analyzes the data for potential bullish indicators.","The results are compared with previously issued alerts to reduce redundancy, and are texted to my number."],
        "proj-tech":"Python, AWS (Hosting), CCXT Library (Data), Twilio Client (Messages) ",
        "proj-link":"https://github.com/ShaishavShah04/Crypto-Scanner",
        "proj-img": "media/scanner.png",
    }
    ]

    return (
        <div className="projects-page" id="projects-page">
            <h2>My Projects!</h2>
            <div className="project-container">
                {ProjectPageInfo.map( function(projObj){
                    return (
                        <div className="project-card">
                            <h4>{projObj['proj-name']}</h4>
                            <img src= {`${projObj['proj-img']}`} />
                            <div className="proj-text">
                                
                                <br/>
                                {projObj['proj-description'].map( (sentence) => <p>{sentence}<br/><br/></p>  )}
                                <br/>
                                <b>Created Using:</b>
                                <br/>
                                <p>{projObj['proj-tech']}</p>
                                <br/>
                                <a href={projObj['proj-link']}>{<Link/>}</a>
                            </div>

                        </div>

                    )
                } )}
            </div>
        </div>
    )
}

export default Projects
