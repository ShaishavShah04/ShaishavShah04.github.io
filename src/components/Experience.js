import React from 'react';
import '../styles/Experience.css';

class Experience extends React.Component {

    educationInfo = this.props.edu_data;

    experienceInfo = this.props.exp_data;

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
