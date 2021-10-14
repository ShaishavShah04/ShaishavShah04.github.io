import React from 'react';
import '../styles/Experience.css';

class Experience extends React.Component {

    educationInfo = [
        {   "name":"University of Alberta",
            "degree":"Specialization in Computing Science with Business Minor",
            "timeline":"2020 - 2024",
            "notes":["Relevant Courses: Practical Programming Methadology, Software Engineering, Databases, Algorithms and Data Structures", "GPA: 4.0 / 4.0"]
        }
    ]

    experienceInfo = [
        {
            "name":"Coding Instructor",
            "company":"Discover Coding",
            "timeline":"Apr 2021 - Sep 2021",
            "description":["lorem ipsum"],
        },
        {
            "name":"President",
            "company":"Tech Talk Club",
            "timeline":"Sep 2019 - Jun 2020",
            "description":["lorem ipsum", "cool"],
        }
    ]

    render() {
        return (
            <div className="resume" id="resume">


                <div className="education">
                    <div className="section-title">EDUCATION</div>
                    <div className="content">
                        {this.educationInfo.map( function(eduObj) {
                            return (
                                <div className="education-card">
                                    <div className="name">{eduObj.name}</div>
                                    <h3>{eduObj.degree} &#9724; {eduObj.timeline}</h3>
                                    <ul>
                                    {eduObj.notes.map( point => <li>{point}</li>)}
                                    </ul>
                                    
                                </div>
                                )
                            }
                        )
                        }
                    
                    </div>
                </div>

                <div className="experience">
                    <div className="section-title" >EXPERIENCE</div>
                        <div className="content">
                            {this.experienceInfo.map( function(expObj) {
                                    return (
                                        <div className="experience-card">
                                            <div className="name">{expObj.name}</div>
                                            <h3>{expObj.company} &#9724; {expObj.timeline}</h3>
                                            {expObj.description.map( sentence => <p>{sentence}<br/></p>) }
                                            {/* <p>{expObj.description}</p> */}
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
}

export default Experience
