import React from 'react';
import Navber from '../Navber/Navber';
import '../../assets/css/style.css';
import '../../assets/vendor/remixicon/remixicon.css'
import myPhoto from '../../photos/murshedalmain.jpg'
import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
import { ProgressBar } from 'react-bootstrap';


const About = () => {
    return (
        <div>
            <Navber />
            <section id="about" className="about">
                {/* ======= About Me ======= */}
                <div className="about-me container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src={myPhoto} className="img-fluid" style={{height:'100%'}} alt />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>FrontEnd Web Developer</h3>
                            <p className="fst-italic">
                                My Dream to be a good programmer.
        </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>1 April 1997</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.murshedkoli.com</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+880 1781 981 486</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Brahmanbaria, Bangladesh</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>24</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Bachelor</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>murshedkoli@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>{/* End About Me */}
                {/* ======= Counts ======= */}
                <div className="counts container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile" />
                                <span data-purecounter-duration="0" data-purecounter-end="9001" class="purecounter">07</span>                            <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext" />
                                <span data-purecounter-start="0"  data-purecounter-end="9001"  class="purecounter">15</span>                            <p>Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset" />
                                <span data-purecounter-start="0" data-purecounter-end="9001" class="purecounter">0</span>                        <p>Hours Of Support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-award" />
                                <span data-purecounter-start="0" data-purecounter-end="9001" class="purecounter">0</span>                              <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>{/* End Counts */}
                {/* ======= Skills  ======= */}
                <div className="skills container">
                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                <ProgressBar style={{height:'100%'}} animated now={90} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                <ProgressBar style={{height:'100%'}} animated now={80} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                <ProgressBar style={{height:'100%'}} animated now={50} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">React.js <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                <ProgressBar style={{height:'100%'}} animated now={50} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                <ProgressBar style={{height:'100%'}} animated now={90} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Node.js <i className="val">30%</i></span>
                                <div className="progress-bar-wrap">
                                <ProgressBar style={{height:'100%'}} animated now={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Skills */}
                {/* ======= Interests ======= */}
                <div className="interests container">
                    <div className="section-title">
                        <h2>Comfortable with</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-database-2-fill" style={{ color: '#ffbb2c' }} />
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-css3-fill" style={{ color: '#5578ff' }} />
                                <h3>SCSS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-reactjs-line" style={{ color: '#e80368' }} />
                                <h3>React Native</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="ri-github-fill" style={{ color: '#000000' }} />
                                <h3>Github</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-database-fill" style={{ color: '#47aeff' }} />
                                <h3>Firebase</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-database-2-line" style={{ color: '#2c0ae9' }} />
                                <h3>MySQL</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-file-list-3-line" style={{ color: '#11dbcf' }} />
                                <h3>Midela Teren</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-price-tag-2-line" style={{ color: '#4233ff' }} />
                                <h3>Pira Neve</h3>
                            </div>
                        </div>
                    </div>
                </div>{/* End Interests */}
                <div className="interests container">
                    <div className="section-title">
                        <h2>Tools</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-git-branch-line" style={{ color: '#d40f09' }} />
                                <h3>Git</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-chrome-fill" style={{ color: '#089236' }} />
                                <h3>Chrome Dev Tool</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-code-box-fill" style={{ color: '#0381e8' }} />
                                <h3>VSCode</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="ri-github-fill" style={{ color: '#000000' }} />
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                </div>{/* End Interests */}
                {/* ======= Testimonials ======= 
  <div class="testimonials container">
    
    <div class="section-title">
      <h2>Testimonials</h2>
    </div>
    
    <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper-wrapper">
    
        <div class="swiper-slide">
          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>
        </div>
    
       
    
      </div>
      <div class="swiper-pagination"></div>
    </div>
    
    <div class="owl-carousel testimonials-carousel">
    
    </div>
    
  </div>End Testimonials -*/}
            </section>
        </div>

    );
};

export default About;