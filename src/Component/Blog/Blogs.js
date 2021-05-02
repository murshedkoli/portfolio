import React from 'react';
import Navber from '../Navber/Navber';

const Blogs = () => {
    return (
        <div>
            <Navber/>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Blogs</h2>
                        <p>My Blogs</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble" /></div>
                                <h4><a href>Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blogs;