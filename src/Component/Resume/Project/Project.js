import React from 'react';
import Navber from '../../Navber/Navber';
import { Card, ListGroup } from 'react-bootstrap';
import projects from '../../../Data/projectData';

const Project = () => {
    return (
        <div>
            <Navber />
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title">
                        <h2>Projcets</h2>
                        <p>My Works</p>
                    </div>

                    <div className="row portfolio-container">
                        {
                            projects.map(project=> <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <Card style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)' }} >
                                <Card.Img variant="top" src={project.thumb} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <ListGroup >
                                        <h6>Features:</h6>
                                       <ul>
                                          {
                                              project.features.map(ft=> <li>{ft}</li> )
                                          }

                                       </ul>
                                    </ListGroup>
                                </Card.Body>

                                <Card.Body>
                                    <Card.Link target="_blank"  href={project.code}>Code Link </Card.Link>
                                    <Card.Link target="_blank" href={project.live}>Live Site Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>)
                        }

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Project;