import React from 'react';
import Navber from '../Navber/Navber';

const Resume = () => {

    document.title="Resume | Morshed Al Main - Portfolio"

    return (
        <div>
            <Navber/>
            <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Morshed Al Main</h4>
            <p><em>Creative Front-End Developer, I Always want to explore new experience, Development is not just a profession for me, it's a means for me to feel good and spend time.</em></p>
            <p>
            <ul>
              <li>Kalikaccha, Sarail, Brahmanbaria.</li>
              <li>(+880) 1781 981 486</li>
              <li>murshedkoli@gmail.com</li>
            </ul>
            </p>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Bachelor Of Business Administration</h4>
            <h5>2016 - Present</h5>
            <p><em>Brahmanbaria Government College</em></p>
            <p>Department of Accounting, Brahmanbaria Govt. College, <br/> Brahmanbaria, Bangladesh</p>
          </div>
          <div class="resume-item">
            <h4>Higer Secondary School Certificate</h4>
            <h5>2013 - 2015</h5>
            <p><em>Kazi Shafiqul Islam University College</em></p>
            <p>Department of Business Management, KSIUC, Bijoy Nagar, <br/> Brahmanbaria, Bangladesh</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Computer Trainer</h4>
            <h5>2017 - Present</h5>
            <p><em>Ababil It &amp; Computer Training Center </em></p>
            <p>
            <ul>
              <li>Provided training in computer office application course ‍and Web Design Course.</li>
              
            </ul>
            </p>
          </div>
          {/* <div class="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
            </p>
          </div> */}
        </div>
      </div>

    </div>
  </section>
        </div>
    );
};

export default Resume;