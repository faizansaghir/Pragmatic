import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar=React.forwardRef(()=> {
	let isHome="",isAbout="",isContact="";
	if(window.location.pathname==="/")
	{
		isHome="active";
	}
	else if(window.location.pathname==="/about.html"){
		isAbout="active";
	}
	else if(window.location.pathname==="/contact.html"){
		isContact="active";
	}
		
	
    return (
        <nav className="navbar navbar-expand-md w-100">
			<a className="navbar-brand mt-md-4 mt-lg-5" href="/">PRAGMATIC</a>
			<button className="navbar-toggler d-flex d-md-none align-self-end p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon w-100 h-100 p-2">
					<FontAwesomeIcon icon={faBars}/>
				</span>
			</button>
			<div className="collapse navbar-collapse d-md-flex flex-row-reverse align-self-end" id="navbarSupportedContent">
				<ul className="navbar-nav">
				<li className={`nav-item mr-md-4`}>
					<a className={`nav-link ${isHome}`} href="/">Home</a>
				</li>
				<li className={`nav-item mr-md-4`}>
					<a className={`nav-link ${isAbout}`} href="/about.html">About Us</a>
				</li>
				<li className={`nav-item`}>
					<a className={`nav-link ${isContact}`} href="/contact.html">Contact Us</a>
				</li>
				</ul>
			</div>
		</nav>
    )
});

export default Navbar
