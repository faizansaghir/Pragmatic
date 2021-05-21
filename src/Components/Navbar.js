import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark w-100">
			<a class="navbar-brand" href="index.html">PRAGMATICS</a>
			<button class="navbar-toggler d-flex d-md-none align-self-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse d-md-flex flex-row-reverse align-self-end" id="navbarSupportedContent">
				<ul class="navbar-nav">
				<li class="nav-item mr-md-4 mr-md-4 active">
					<a class="nav-link" href="index.html">Home</a>
				</li>
				<li class="nav-item mr-md-4 mr-md-4">
					<a class="nav-link" href="index.html">About Us</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="index.html">Contact Us</a>
				</li>
				</ul>
			</div>
		</nav>
    )
}

export default Navbar
