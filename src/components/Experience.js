import React from 'react';
import '../styles/Experience.css';

function Experience() {

    const educationInfo = [
        {   "name":"University of Alberta",
            "degree":"Specialization in Computing Science with Business Minor",
            "timeline":"2020 - 2024"
        }
    ]

    const experienceInfo = [
        {
            "name":"Coding Instructor",
            "company":"Discover Coding",
            "timeline":"Apr 2021 - Sep 2021",
            "description":"lorem ipsum",
        },
        {
            "name":"President",
            "company":"Tech Talk Club",
            "timeline":"Sep 2019 - Jun 2020",
            "description":"lorem ipsum",
        }
    ]

  return (
    <div className="resume" id="resume">
        <div className="education">
            <div className="section-title"><u>Education</u></div>
            <div className="content">
                {educationInfo.map( function(eduObj) {
                    return (
                        <div className="education-card">
                            <div className="name">{eduObj.name}</div>
                            <h3>{eduObj.degree} &#9724; {eduObj.timeline}</h3>
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
                    {experienceInfo.map( function(expObj) {
                            return (
                                <div className="experience-card">
                                    <div className="name">{expObj.name}</div>
                                    <h3>{expObj.company} &#9724; {expObj.timeline}</h3>
                                    <p>{expObj.description}</p>
                                </div>
                                )
                            }
                        )
                    }
                </div>
        </div>
    </div>
  )
}

export default Experience
