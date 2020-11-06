import React from 'react';
import Title from './Title';

export default function ContactForm() {
    return (
        <section className="section-form">
        <div className="row"> 
            <Title title="Let's Talk" />      
        </div>
        <div className="row">
            <form method="post" action="#" className="contact-form">
            
            <div className="row">
            <div className="col span-1-of-3">
                <label for="name">Name</label>
                </div>
                <div className="col span-2-of-3" >
                <input className="input-text" type="text"  name="name" id="name" placeholder="Your name" required />
            </div>
            </div>
                      
            <div className="row">
            <div className="col span-1-of-3">
                <label for="email">Email</label>
            </div>
            <div className="col span-2-of-3" >
                <input className="input-text" type="email"  name="email" id="email" placeholder="Your email" required />
            </div>
            </div>
            <div class="row">
                        <div class="col span-1-of-3">
                            <label for="find-us">How did you find us?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <select className="input-text" name="find-us" id="find-us">
                                <option className="input-text" value="friends" selected>Friends</option>
                                <option className="input-text" value="search">Search engine</option>
                                <option className="input-text" value="ad">Advertisement</option>
                                <option className="input-text" value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Newsletter?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input className="input-text" type="checkbox" name="news" id="news" checked /> Yes, please
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Drop us a line</label>
                        </div>
                        <div class="col span-2-of-3">
                            <textarea className="input-text" name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                           < input className="btn-primary" type="submit" value="Get In Touch" />
                            
                        </div>
                    </div>
                    
                </form>
       
        </div>  
        </section>
    );
}
