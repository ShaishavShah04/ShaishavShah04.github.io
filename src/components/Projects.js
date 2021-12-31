import React from 'react'
import "../styles/Projects.css";
import Link from '@mui/icons-material/Link';

class Projects extends React.Component {
 
    ProjectPageInfo = this.props.data;

    render() 
    
    {
        return (
            <div className="projects-page" id="projects-page">
                <h2>PROJECTS</h2>
                <div className="project-container">
                    {this.ProjectPageInfo.map( function(projObj){
                        return (
                            <div className="project-card">
                                <h4><u>{projObj['proj-name']}</u></h4>
                                <img src= {`${projObj['proj-img']}`} alt={projObj['proj-name']} />
                                <div className="proj-text">
                                    
                                    <br/>
                                    {projObj['proj-description'].map( (sentence) => <p>{sentence}<br/><br/></p>  )}
                                    <br/>
                                    <b>Created Using:</b>
                                    <br/>
                                    <p>{projObj['proj-tech']}</p>
                                    <br/>
                                    <a href={projObj['proj-link']} target="_blank">{<Link/>}</a>
                                </div>

                            </div>

                        )
                    } )}
                </div>
            </div>
        )
    }
}

export default Projects
