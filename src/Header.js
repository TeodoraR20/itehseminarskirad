import React, { useState }from 'react';

import { Link } from 'react-router-dom';
import Navbar from './Navbar.css';


function Header() {



<div className="rightSide">

<Link to="/">Početna</Link>
<Link to="/search">Meni</Link>
<Link to="/about">Smoothie</Link>
<Link to="/slider">Galerija</Link>
<Link to="/contact">Kontakt</Link>




</div>
 
}

export default Navbar;
