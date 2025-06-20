// import { Link } from "react-router-dom";
// import "./navbar.css";

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
//             <div className="container-fluid" style={{width: "89%"}}>
//                 {/* Logo and Brand */}
//                 <Link to="/" className="navbar-brand d-flex align-items-center">
//                     <img
//                         src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/University_of_Kalyani_Logo.svg/250px-University_of_Kalyani_Logo.svg.png"
//                         alt="ku logo"
//                         style={{ width: "40px", height: "40px" }}
//                         className="me-2"
//                     />
//                     <div>
//                         <h5 className="m-0"><strong>DETS</strong></h5>
//                         <small>University of Kalyani</small>
//                     </div>
//                 </Link>

//                 {/* Hamburger Menu */}
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Nav Links */}
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto gap-3">
//                         <li className="nav-item">
//                             <Link to="/" className="nav-link">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/faculty" className="nav-link">Faculty & Staff</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/curriculum" className="nav-link">Course & Curriculum</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/clubs" className="nav-link">Clubs</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/gallery" className="nav-link">Gallery</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/contact" className="nav-link">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;




import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top">
            <div className="container">
                {/* Logo and Brand */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/University_of_Kalyani_Logo.svg/250px-University_of_Kalyani_Logo.svg.png"
                        alt="ku logo"
                        className="navbar-logo me-2"
                    />
                    <div className="brand-text">
                        <h5 className="m-0"><strong>DETS</strong></h5>
                        <small>University of Kalyani</small>
                    </div>
                </Link>

                {/* Hamburger Menu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faculty" className="nav-link">Faculty & Staff</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/curriculum" className="nav-link">Course & Curriculum</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clubs" className="nav-link">Clubs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
