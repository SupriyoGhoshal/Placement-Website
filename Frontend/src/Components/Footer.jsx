import "./footer.css";

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container py-5">
                <div className="row g-4">
                    {/* University Info */}
                    <div className="col-lg-4">
                        <div className="footer-brand d-flex align-items-center mb-3">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/University_of_Kalyani_Logo.svg/250px-University_of_Kalyani_Logo.svg.png"
                                alt="University Logo"
                                className="footer-logo me-3"
                            />
                            <div>
                                <h5 className="m-0 text-white">DETS</h5>
                                <small className="text-muted ">University of Kalyani</small>
                            </div>
                        </div>
                        <p className="text-light mb-4">
                            The Department of Engineering & Technology Studies is committed to excellence in education, research, and innovation.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 col-lg-2">
                        <h5 className="footer-heading mb-4">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Faculty</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 col-lg-3">
                        <h5 className="footer-heading mb-4">Contact Us</h5>
                        <ul className="footer-contact">
                            <li className="d-flex mb-3">
                                <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                                <span>Department of Engineering & Technology Studies<br />
                                University of Kalyani, Kalyani, West Bengal 741235</span>
                            </li>
                            <li className="d-flex mb-3">
                                <i className="fas fa-phone-alt me-3 mt-1"></i>
                                <span>+91 1234567890</span>
                            </li>
                            <li className="d-flex mb-3">
                                <i className="fas fa-envelope me-3 mt-1"></i>
                                <span>dets@klyuniv.ac.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-4 col-lg-3">
                        <h5 className="footer-heading mb-4">Newsletter</h5>
                        <p className="text-light mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="newsletter-form">
                            <div className="input-group mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Your Email" 
                                    aria-label="Your Email"
                                />
                                <button className="btn btn-primary" type="submit">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom mt-5 pt-4 border-top border-secondary">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0 text-muted">
                                &copy; {new Date().getFullYear()} DETS, University of Kalyani. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <ul className="footer-bottom-links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;