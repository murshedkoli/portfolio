import React, { useState } from 'react';
import swal from 'sweetalert';
import Navber from '../Navber/Navber';




const Contact = () => {

const [formData, setFormData] = useState({});

    const handleOnChange = (e)=>{
const newData = {...formData};
    newData[e.target.name]= e.target.value;
    setFormData(newData);
    }

const sendmail= (e)=>{
    
        var name = formData.name;
        var email = formData.sender;
        var subject = formData.subject;
        var message = formData.message;

        // var body = $('#body').val();

        var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
        //console.log(name, phone, email, message);

        window.Email.send({
    SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
            To: 'murshedkoli@gmail.com',
            From: email,
            Subject: "New message on contact from "+name,
            Body: Body
        }).then(
            message =>{
                //console.log (message);
                if(message==='OK'){
        swal("Thank You!", "Your Mail Send Successfully!", "success");

                }
                else{
                    console.error (message);
                    swal("Oh Bad Luck!", "Your Mail Not Send! Please Try Again", "warning");
                    
                }

            }
        );

            e.preventDefault();

    }


    return (
        <div>
            <Navber/>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Contact Me</p>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-map" />
                                <h3>My Address</h3>
                                <p>3430 Kalikaccha, Sarail, Brahmanbaria</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-share-alt" />
                                <h3>Social Profiles</h3>
                                <div className="social-links">
                                    <a href="https://twitter.com/murshedkoli" className="twitter"><i className="bi bi-twitter" /></a>
                                    <a href="https://www.facebook.com/murshedkoli" className="facebook"><i className="bi bi-facebook" /></a>
                                    <a href="https://www.instagram.com/murshedk_oli/" className="instagram"><i className="bi bi-instagram" /></a>
                                    <a href="https://www.linkedin.com/in/murshedkoli/" className="linkedin"><i className="bi bi-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-envelope" />
                                <h3>Email Me</h3>
                                <p>murshedkoli@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-phone-call" />
                                <h3>Call Me</h3>
                                <p>+880 1781 981 486</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form section-gap">
                        <div className="wrapper">
                            <div className="text-center">
                                <h1 style={{ fontSize: 40 }}>Send Message</h1>
                            </div>
                            <div className="contact-form" style={{ maxWidth: 450, margin: '0 auto' }}>
                                <div className="form-mid">
                                    <form onSubmit={sendmail} >
                                        <div className="field">
                                            <input onChange={handleOnChange} type="text" className="form-control" name="name" id="Name" placeholder="Name" required />
                                        </div>
                                        <div className="field">
                                            <input type="email" onChange={handleOnChange} className="form-control" name="sender" id="Sender" placeholder="Email" required />
                                        </div>
                                        <div className="field">
                                            <input type="text" onChange={handleOnChange} className="form-control" name="subject" id="Subject" placeholder="Subject" required />
                                        </div>
                                        <textarea name="message" onChange={handleOnChange} className="form-control" id="Message" placeholder="Message" required defaultValue={""} />
                                        <button type="submit" className="btn btn-success">Send Message</button>
                                        {/* <input type="button" class="btn btn-contact" onclick="sendmail();"  value="Send Message"> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;