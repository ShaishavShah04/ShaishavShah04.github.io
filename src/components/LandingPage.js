import React from 'react';
import "../styles/LandingPage.css";
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { FileDownload } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function LandingPage() {
    
    const LandingPageInfo = {
        "first_name": "SHAISHAV",
        "last_name": "SHAH",
        "degree": "Computing Science w/ Business Minor",
        "social":[
                {
                  "name":"linkedin",
                  "url":"https://www.linkedin.com/in/shaishavshah04/",
                  "className":"lp-linkedin",
                  "icon": GitHub
                },
                {
                  "name":"github",
                  "url":"http://github.com/ShaishavShah04",
                  "className":"lp-github",
                  "icon": LinkedIn
                },
                {
                  "name":"resume",
                  "url":"",
                  "className":"lp-resume",
                  "icon": FileDownload
                }
              ]

    };

    return (

        

        <div className="landing-page">
            <div class="outer-box">

                {/* <div id="vertical-dash"></div> */}
                <h1 class="name">{LandingPageInfo.first_name + " " + LandingPageInfo.last_name}</h1>

                <div class="navbar">
                    {
                    LandingPageInfo.social.map( (socialObj) => 
                        <IconButton>
                            <socialObj.icon className="navbar-btn" />
                        </IconButton>
                    ) 
                    }
                </div>


            </div>

            <div class="lower-box">
                <h3>Hi! &#128075; I'm an undergraduate {LandingPageInfo.degree} student at the University of Alberta. I like to design and build applications that save time in the tasks around us!</h3>
            </div>
        </div>
    )
}

export default LandingPage
