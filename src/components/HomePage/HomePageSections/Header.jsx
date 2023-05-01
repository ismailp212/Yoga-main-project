import React, { useState } from "react";
import '/Users/___ISMAIL___/Desktop/react-first-test/src/Styles/HomePageStyles/Header.css'
import {FaUsers , FaCalendarAlt, FaCompass} from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Coures from "../NavbarPages/coures";
// import Events from "../NavbarPages/Events";
// import Instructeurs from "../NavbarPages/Instructeurs";





function Header(props) {
    const [SiderNav, setSiderNav] = useState(false)
    
     return (
        <BrowserRouter>
        <div>
             <header>
                    <h2 className="logo">
                        <Link to="/">Yougik</Link>
                    </h2>
                    <nav>
                    <ul className= {SiderNav ? 'nav-links-respo' : 'nav-links'} onClick={() => setSiderNav(false)}>
                    <li className="linka">
    <Link to="/instructeurs">
        <div className="icon">
            <FaUsers />
        </div>
        <div>Instructeurs</div>
    </Link>
    <ul className="dropdown1">
        <li>
            <a href="#">
                <img src="/dropdownimg/aa1.jpg" />
                <br />
                <span>Anny Leonhart</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/dropdownimg/aa2.png" />
                <br />
                <span>Mikasa Akerman</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/dropdownimg/aa6.jpg" />
                <br />
                <span>Rafa Nadal</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/dropdownimg/aa3.png" />
                <br />
                <span>Kylian Mbappe</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/dropdownimg/aa4.png" />
                <br />
                <span>Eren Yeager</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/dropdownimg/aa5.jpg" />
                <br />
                <span>Serena Wiliams</span>
            </a>
        </li>
    </ul>
</li>

                        <li className="linka">
                            <Link to="/coures">
                                <div className="icon">
                                    
                                    <FaCompass/>

                                </div>
                                <div>Cours</div>
                            </Link>
                                    <ul className="dropdown">
                                        <li>
                                            <a href="#">Yoga Classes</a>
                                        </li>
                                        <li>
                                            <a href="#">Sophrologie</a>
                                        </li>
                                        <li>
                                            <a href="#">Yoga Therapie</a>
                                        </li>
                                        <li>
                                            <a href="#">Power-Yoga</a>
                                        </li>
                                    </ul>
                        </li>
                        <li className="linka">
                            <Link to="/events">
                                <div className="icon">
                                    <FaCalendarAlt />
                                </div>
                                <div>Événements</div>
                            </Link>
                                <ul className="dropdown3">
                                    <li>
                                        <a href="#">Événement 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Événement 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Événement 3</a>
                                    </li>
                                </ul>
                        </li>
                        <li className="linka-res">
                            <a href="#services">
                            <div className="linka-res">S'inscrire</div>
                            </a>
                        </li>
                        <li className="linka-res">
                            <a href="#services">
                            <div className="linka-res">Commencer votre essai gratuit</div>
                            </a>
                        </li>
                    </ul>
                    </nav>
                    <div className="cta-div">
                        <a className="cta" href="#">
                        <button>S'inscrire</button>
                        </a>
                    </div>
                    <div className="lines" onClick={() => setSiderNav(!SiderNav)}>
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
             </header> 
        {/* <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/coures" element={<Coures/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/instructeurs" element={<Instructeurs/>}/>
        </Routes> */}

        

        </div>
        </BrowserRouter>
    )
}
 
export default Header;