import React from 'react';
import style from './Navber.module.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <header  id={style.header} className={style.headertop}>
            <div style={{width:'70%', margin:'auto', display:'flex'}}>
                <h1><Link to="/">Morshed Al Main</Link></h1>
            
                <nav id={style.navbar} className={style.navbar}>
                    <ul>
                    <li><a className="nav-link "> <Link to="/">Home</Link></a></li>
                       <li><a className="nav-link "> <Link to="/about">About</Link></a></li>
                       <li><a className="nav-link "> <Link to="resume">Resume</Link></a></li>
                       <li><a className="nav-link "> <Link to="project">Project</Link></a></li>
                       <li><a className="nav-link "> <Link to="contact">Contact</Link></a></li>
                    </ul>
                   
                </nav>
              
            </div>
        </header>
    );
};

export default Navber;