import '../../style/subComponentsStyle/contactUsStyle.css';
import FooterSection from '../footerSection';
import NavHead from '../navHead';

const ContactUs = () => {
    return (
        <>
            <NavHead />
            <div className='conteainer-contact-us-section'>

            
            <div className='contact-us-section' id="main" role="main">
                <main className='contact-us-main'>
                    <div className="contactus-container">
                        <div className="Container">
                            <header className="PageHeader">
                                <div className="SectionHeader SectionHeader--center">
                                    <h1 className="SectionHeader__Heading Heading u-h1">Contact</h1>
                                </div>
                            </header>
                            
                            <div className="top-bg">&nbsp;</div>
                            
                            <div className="mainhead2">
                                <h1>Contact Us</h1>
                            </div>
                            
                            <p className="catalogwriteup" style={{borderBottom: 'none'}}>
                                For customer service, product or online order related inquiries please contact us by completing the form below or via email at: <br/>
                                <a href="mailto:hellogcc@nappadori.com" data-ajax="false">hellogcc@nappadori.com</a>
                            </p>
                            
                            <p className="catalogwriteup">
                                You can also call us & WhatsApp at: <a href="tel:971585982090" data-ajax="false">+971 585982090</a>
                            </p>
                            
                            <div className="PageContent PageContent--narrow">
                                <div className="Rte">
                                    <form method="post" action="/contact#contact_form" id="contact_form" className="Form Form--spacingTight">
                                        <div className="Form__Group">
                                            <div className="Form__Item">
                                                <input type="text" className="Form__Input" name="contact[name]" aria-label="Full Name" placeholder="Full Name" required />
                                                <label className="Form__FloatingLabel">Full Name</label>
                                            </div>

                                            <div className="Form__Item">
                                                <input type="email" className="Form__Input" name="contact[email]" aria-label="Email Address" placeholder="Email Address" required />
                                                <label className="Form__FloatingLabel">Email Address</label>
                                            </div>
                                        </div>
                                        
                                        <div className="Form__Item">
                                            <input type="text" className="Form__Input" name="contact[Telephone]" aria-label="Telephone" placeholder="Telephone" />
                                            <label className="Form__FloatingLabel">Telephone</label>
                                        </div>
                                        
                                        <div className="Form__Item message-box">
                                            <textarea name="contact[body]" cols="30" rows="10" className="Form__Textarea" aria-label="Your message" placeholder="Your message" required style={{height: '60px'}}></textarea>
                                            <label className="Form__FloatingLabel">Your message</label>
                                        </div>
                                        
                                        <div className="form-btn-box">
                                            <p className="required" style={{float: 'left', paddingLeft: '112px',marginBottom: '1.6em', marginTop: '0', marginLeft: '50px'}}>* Required Fields</p>
                                            <button type="submit" className="Form__Submit Button Button--primary Button--full">SUBMIT</button>
                                        </div>
                                    </form>
                                    
                                    <div className="divider">&nbsp;</div>
                                    
                                    <p className='become-part'>
                                        Become a part of the Nappa Dori story, join the team! <br/>
                                        For job enquiries, applications or internships write to us at <br/>
                                        <a href="mailto:careers@nappadori.com" style={{color: '#b4975a', textDecoration: 'none'}}>careers@nappadori.com</a>
                                        with your resume or portfolio.
                                    </p>
                                    
                                    <div className="multidotdevider">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30">
                                            <path className="st0" d="M9.7,16.4c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C11.2,17.1,10.5,16.4,9.7,16.4z"/>
                                            <path className="st0" d="M9.7,10c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C11.2,10.7,10.5,10,9.7,10z"/>
                                            <path className="st0" d="M9.7,3.7c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C11.2,4.4,10.5,3.7,9.7,3.7z"/>
                                            <path className="st0" d="M16,16.4c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.9,16.4,16,16.4z"/>
                                            <path className="st0" d="M16,10c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.9,10,16,10z"/>
                                            <path className="st0" d="M16,3.7c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.9,3.7,16,3.7z"/>
                                            <circle className="st0" cx="16" cy="24.3" r="1.6"/>
                                            <path className="st0" d="M22.3,16.4c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6S23.2,16.4,22.3,16.4z"/>
                                            <path className="st0" d="M22.3,10c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6S23.2,10,22.3,10z"/>
                                            <path className="st0" d="M22.3,6.8c0.9,0,1.6-0.7,1.6-1.6s-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6C20.8,6.1,21.5,6.8,22.3,6.8z"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="formpara">
                                        <p>Our Corporate address:</p>
                                        <p className="last">
                                            The NAPPA DORI Showroom & Studio <br/>
                                            Unit E40, Alserkal Avenue - 3 St - Al Quoz 1 <br/>
                                            Dubai - United Arab Emirates
                                        </p>
                                        <a href="mailto:hellogcc@nappadori.com" data-ajax="false">hellogcc@nappadori.com</a>
                                        
                                        <div className="multidotdevider">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30">
                                                <path className="st0" d="M9.7,16.4c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C11.2,17.1,10.5,16.4,9.7,16.4z"/>
                                                <path className="st0" d="M9.7,10c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C11.2,10.7,10.5,10,9.7,10z"/>
                                                <path className="st0" d="M9.7,3.7c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C11.2,4.4,10.5,3.7,9.7,3.7z"/>
                                                <path className="st0" d="M16,16.4c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.9,16.4,16,16.4z"/>
                                                <path className="st0" d="M16,10c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.9,10,16,10z"/>
                                                <path className="st0" d="M16,3.7c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S16.9,3.7,16,3.7z"/>
                                                <circle className="st0" cx="16" cy="24.3" r="1.6"/>
                                                <path className="st0" d="M22.3,16.4c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6S23.2,16.4,22.3,16.4z"/>
                                                <path className="st0" d="M22.3,10c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6S23.2,10,22.3,10z"/>
                                                <path className="st0" d="M22.3,6.8c0.9,0,1.6-0.7,1.6-1.6s-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6C20.8,6.1,21.5,6.8,22.3,6.8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="cornericon top-left">
                                <svg viewBox="0 0 38.82 38.82">
                                <path fill="#c8a770" d="M40.9,7.7H2.08V46.52H5.16s-1-5.48,1.68-7.16,6.45-5.6,7.29-12.89,9.8-7.85,14-8,4.12-6.75,9.11-7.56a8.17,8.17,0,0,1,3.65,0Z" transform="translate(-2.08 -7.7)" />
                                </svg>
                            </span>
                            <span className="cornericon top-right">
                                <svg viewBox="0 0 48.5 51">
                                <path fill="#C8A770" d="M0,0l48.6,0v51h-2.1c0,0-0.4-5.5-3.9-9.4c-3.5-3.9-7.5-6.4-7.2-13.6s-7.5-12.2-18.4-14.3 c-5.4-1.1-6.8-8.5-11-9.2s-6,0-6,0V0z" />
                                </svg>
                            </span>
                            <span className="cornericon bottom-left">
                                <svg viewBox="0 0 48.5 51">
                                <path fill="#C8A770" d="M48.5,51H0L0,0L2,0c0,0,0.4,5.5,3.9,9.4s7.5,6.4,7.2,13.6s7.5,12.2,18.4,14.3c5.4,1.1,6.8,8.5,11,9.2s6,0,6,0 V51z" />
                                </svg>
                            </span>
                            <span className="cornericon bottom-right">
                                <svg viewBox="0 0 48.5 51">
                                <path fill="#C8A770" d="M0,51h48.6V0l-2.1,0c0,0-0.4,5.5-3.9,9.4c-3.5,3.9-7.5,6.4-7.2,13.6s-7.5,12.2-18.4,14.3 c-5.4,1.1-6.8,8.5-11,9.2s-6,0-6,0V51z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </main>
                
            </div>
            </div>
            <FooterSection />
        </>
    );
};

export default ContactUs;