import React from 'react'

function Content() {
    return (
        <div className="container-fluid d-flex">
		    <div id="container" className="my-auto">
                <div className="row justify-content-center mb-c">
                    <h1 className="main-heading ml-5 mr-5 clr-1 justify-content-center">Heading Text</h1>	
                </div>
                <div className="row justify-content-center mb-c">
                    <p className="ml-5 mr-5 col-md-8 col-lg-6">Lorem ipsum, dolor sit, amet consectetur adipisicing elit.<br/><br/> 
                        Ea, dolorum minus vel rerum velit fugit magni, repellendus ex tempore adipisci unde voluptas,<br/><br/>
                        provident ad earum! Deleniti veritatis odio sit, ad!</p>
                </div>	
                <div className="row justify-content-center">
                    <button className="navigation-button btn btn-danger col-10 mb-5 mb-sm-0 col-sm-4 clr-2 bg-clr-1 mr-sm-5 col-md-2" id="login-btn">LOGIN</button>
                    <button className="navigation-button btn btn-danger col-10 col-sm-4 clr-2 bg-clr-1 col-md-2">SIGNUP</button>
                </div>
            </div>
        </div>
    )
}

export default Content
