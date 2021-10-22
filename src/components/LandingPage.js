import React from 'react';
import "../styles/LandingPage.css";
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Description } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-scroll';

class LandingPage extends React.Component {

    "social" = [
            {
                "name":"LinkedIn",
                "url":"https://www.linkedin.com/in/shaishavshah04/",
                "className":"lp-linkedin",
                "icon": LinkedIn
            },
            {
                "name":"Github",
                "url":"http://github.com/ShaishavShah04",
                "className":"lp-github",
                "icon": GitHub
            },
        ]

    render() {

    this.LandingPageInfo = this.props.data;
    
    return (

        <div className="landing-page" id="landing-page">
            <div className="outer-box">

                {/* <div id="vertical-dash"></div> */}
                <h1 className="name">{this.LandingPageInfo.first_name + " " + this.LandingPageInfo.last_name}</h1>

                <div className="navbar">
                    {
                    this.social.map( (socialObj) => 
                        <IconButton href={socialObj.url} title={socialObj.name} key={socialObj.name} target="_blank">
                            <socialObj.icon className="navbar-btn" />
                        </IconButton>
                    ) 
                    }
                    <IconButton href={this.LandingPageInfo.resume_link} target="_blank">
                            <Description className="navbar-btn" />
                    </IconButton>
                </div>


            </div>

            <div className="lower-box">
                <h3>Hi! &#128075; I'm an undergraduate {this.LandingPageInfo.degree} student at the University of Alberta. I like to design and build applications that save time in the tasks around us!</h3>
            </div>

            <div id="button">
                <Link activeClass="active" to="projects-page" spy={true} smooth={true} duration={800} href="" >
                    <ArrowCircleDownIcon  fontSize="large"/>
                </Link>
            </div>

        </div>
    )
    }
}

export default LandingPage;
