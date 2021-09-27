import React from 'react';
import '../styles/Experience.css';

function Experience() {

    const educationInfo = [
        {   "name":"University of Alberta",
            "degree":"Specialization in Computing Science with Business Minor",
            "timeline":"2020 - 2024"
        }
    ]

  return (
    <div className="resume">
        <div className="education">
            <div className="section-title"><u>Education</u></div>
            <div className="content">
                {educationInfo.map( function(eduObj) {
                    return (
                        <div className="education-card">
                            <div className="name">{eduObj.name}</div>
                            <p>{eduObj.degree} &#9724; {eduObj.timeline}</p>
                        </div>
                        )
                    }
                )
                }
            
            </div>
        </div>

        <div className="experience">
        <div className="section-title" ><u>Experience</u></div>
            <div className="content">
                
            </div>
        </div>
    </div>
  )
}

export default Experience
