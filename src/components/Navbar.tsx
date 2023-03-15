import React from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import {getSections} from "../DummyText";

export const Navbar = () => {
    const sectionList = getSections()
   const scrollToTop = () => {
        scroll.scrollToTop();
    };

        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={scrollToTop}
                    />
                    <ul className="nav-items">
                        {sectionList.map(section => {
                            return(
                                <li className="nav-item">
                                    <Link
                                        activeClass="active"
                                        to={section.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        key={section.id}
                                    >
                                        {section.title}
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </nav>
        );
}
