import React from 'react';
import style from './Home.module.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';

import { Link } from 'react-router-dom';


const Home = () => {

    document.title="Home Page | Morshed Al Main - Portfolio"

    return (
       <div className="container">
            <header id={style.header} >
            <div className={style.container}>
                <h1><a ><Link to="/">Morshed Al Main</Link></a></h1>
                <h2>I'm a <span>FrontEnd Developer</span> from Bangladesh</h2>
                <nav id={style.navbar} className={style.navbar}>
                    <ul>
                       <li><a className="nav-link "> <Link to="/">Home</Link></a></li>
                       <li><a className="nav-link "> <Link to="/about">About</Link></a></li>
                       <li><a className="nav-link "> <Link to="/resume">Resume</Link></a></li>
                       <li><a className="nav-link "> <Link to="/blogs">Blogs</Link></a></li>
                       <li><a className="nav-link "> <Link to="/project">Project</Link></a></li>
                       <li><a className="nav-link "> <Link to="/contact">Contact</Link></a></li>
                        
                    </ul>
                   
                </nav>
                <div className={style.socialLinks}>
                    <a href="https://twitter.com/murshedkoli" className="twitter"><i className="bi bi-twitter" /></a>
                    <a href="https://github.com/murshedkoli"  className="github" rel="noreferrer"><i className="bi bi-github" /></a>
                    <a href="https://www.linkedin.com/in/murshedkoli/" className="linkedin"><i className="bi bi-linkedin" /></a>
                    
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1ypOTQ_p3ON2quIDMimWXa27Zr2UVu7_F">
                <button  style={{ marginTop: 30 }} className="resume-download btn btn-success">Download Resume</button>
                </a>

                
            </div>
        </header>
       </div>

    );
};

export default Home;