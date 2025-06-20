import "./hero.css";

function Hero() {
    return (
        <>
            {/* Main Hero Section */}
            <section className="hero-section container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="hero-card shadow-lg rounded-5 overflow-hidden">
                        {/* Left Part */}
                        <div className="hero-left d-flex align-items-center justify-content-center p-4 p-lg-5 slide-in-left">
                            <div>
                                <h1 className="display-3 fw-bold mb-3 text-center text-white text-shadow">About Us</h1>
                                <p className="lead text-center text-light">Department of Engineering & Technology Studies</p>
                                <div className="d-flex justify-content-center mt-4">
                                    <button className="btn btn-outline-light btn-lg rounded-pill px-4 me-3 pulse">Learn More</button>
                                    <button className="btn btn-light btn-lg rounded-pill px-4 hover-grow">Contact</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="hero-right p-4 p-lg-5 slide-in-right">
                            <p className="mb-0 fs-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur impedit blanditiis, animi omnis a laudantium rerum ab, aliquid unde quae suscipit odio officiis incidunt velit mollitia minus laboriosam assumenda. Vel porro ea voluptates doloremque facere cumque nisi ipsa, voluptatibus odio veniam accusantium quas deserunt nostrum perferendis quaerat dolore illum quos, beatae rem minus dolor. Obcaecati eos doloremque voluptas natus repudiandae neque iure optio deserunt quisquam, nulla necessitatibus repellendus eum earum repellat, dolores est recusandae incidunt! Numquam aliquid, odit debitis aliquam inventore exercitationem nemo. Fugiat aliquam vero sed. Pariatur soluta saepe deserunt labore est iusto blanditiis eos rerum ullam animi. Quod!
                            </p>
                            {/* <div className="mt-4 text-center">
                                <span className="badge bg-primary me-2 mb-2 badge-hover">Engineering</span>
                                <span className="badge bg-success me-2 mb-2 badge-hover">Technology</span>
                                <span className="badge bg-info me-2 mb-2 badge-hover">Innovation</span>
                                <span className="badge bg-warning me-2 mb-2 badge-hover">Research</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-section container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="vision-card p-4 p-md-5 rounded-5 shadow-lg fade-in-up">
                                <h1 className="display-4 fw-bold text-center mb-5 text-gradient">Vision & Mission</h1>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="vision-box h-100 p-4 rounded-4 shadow-sm">
                                            <h2 className="fw-bold mb-3 text-primary">
                                                <i className="fas fa-bullseye me-2"></i>Our Vision
                                            </h2>
                                            <p className="fs-5">
                                                To become a center of excellence in engineering education that nurtures innovation and produces globally competent professionals committed to societal development.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mission-box h-100 p-4 rounded-4 shadow-sm">
                                            <h2 className="fw-bold mb-3 text-success">
                                                <i className="fas fa-rocket me-2"></i>Our Mission
                                            </h2>
                                            <p className="fs-5">
                                                To provide quality education through innovative teaching, cutting-edge research, and industry collaboration while fostering ethical values and entrepreneurial spirit among students.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="core-values p-4 rounded-4">
                                        <h3 className="fw-bold mb-3 text-center">
                                            <i className="fas fa-star me-2"></i>Core Values
                                        </h3>
                                        <div className="d-flex flex-wrap justify-content-center gap-3">
                                            <span className="value-badge">Excellence</span>
                                            <span className="value-badge">Innovation</span>
                                            <span className="value-badge">Integrity</span>
                                            <span className="value-badge">Collaboration</span>
                                            <span className="value-badge">Social Responsibility</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;