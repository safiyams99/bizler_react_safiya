import React from 'react'

function Contact() {
    return (
        <section id="contact-us">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <h3>Contact Info</h3>
                    <div className="separator left-align ">
                            <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            </ul>
                        </div>
                        <div className="info">
                            <ul>
                                <li>
                                <div className="icon">
                                    <i className="flat flaticon-phone-receiver"></i>
                                </div>
                                <div className="content">
                                    <div className="label">Phone No.</div>
                                    <div className="value">0123-456-789, 0123-456-789</div>
                                </div>
                                </li>

                                <li>
                                <div className="icon">
                                    <i className="flat flaticon-mail-black-envelope-symbol"></i>
                                </div>
                                <div className="content">
                                    <div className="label">Email Id</div>
                                    <div className="value">info@bizler.com</div>
                                </div>
                                </li>

                                <li>
                                <div className="icon">
                                    <i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i>
                                </div>
                                <div className="content">
                                    <div className="label">Address</div>
                                    <div className="value">123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-header text-center">
                        <h4>Let’s Get In Touch!</h4>
                        <div className="separator">
                            <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            </ul>
                        </div>
                        <p>It would be great to hear from you! If you got any questions</p>
                    </div>
                    <div className="contact-form">
                        <form action="https://wpshopmart.com/index.html">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <input value="" type="text" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <input value="" type="text" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input value="" type="text" placeholder="Phone No." />
                            </div>
                            <div className="form-group">
                                <input value="" type="text" placeholder="Subject" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                            <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group text-center mar-none">
                            <button type="submit">Send Message <i className="flat flaticon-plane"></i></button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>

    )
}

export default Contact
