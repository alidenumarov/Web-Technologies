import React from 'react';
import {Link} from 'react-router';
// import { Collapse, Navbar, NavbarItems, NavLink, NavbarHeader, Item } from 'reactstrap';

export const Header = (props) => {
    return(
        <div className="topnav">
            <div className="secondNav">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <Link className="active" to={"/home"}>Home</Link>
                        {/* <li><Link to={"/user"}>User</Link></li> */}
                        <Link className="active" to={"/contact_list"}>Contact List</Link>
                        <Link className="active" to={"/todo"}>Todo App</Link>
                    </ul>
                </div>
            </div>
        </div>
        // <Navbar>
        //     <NavbarHeader href="homepage.html" name="Website Name"/>
        //     <NavbarItems>
        //         <Item link="about.html" title="About" />
        //         {/* <Item link="contact.html" title="Contact" />
        //         <Item link="services.html" title="Services" /> */}
        //     </NavbarItems>
        // </Navbar>
    );
}