import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
			<a className="navbar-brand" href="index.html">PRAGMATIC</a>
			<button className="navbar-toggler d-flex d-md-none align-self-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse d-md-flex flex-row-reverse align-self-end" id="navbarSupportedContent">
				<ul className="navbar-nav">
				<li className="nav-item mr-md-4 mr-lg-4 active">
					<a className="nav-link" href="index.html">Home</a>
				</li>
				<li className="nav-item mr-md-4 mr-lg-4">
					<a className="nav-link" href="aboutus.html">About Us</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="contactus.html">Contact Us</a>
				</li>
				</ul>
			</div>
		</nav>
    )
}

export default Navbar
