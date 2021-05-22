import React,{useEffect} from 'react'

function Home() {
    useEffect(() => {
        document.body.style.backgroundImage="url('../img/index_bg.png')";
        document.title="Pragmatic"; 
    });
    return (
        <div className="container-fluid d-flex align-items-center">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="w-100">
                        <div className="row justify-content-center mb-c">
                            <h1 className="main-heading ml-5 mr-5 clr-1">Heading Text</h1>	
                        </div>
                        <div className="row justify-content-center mb-c">
                            <p className="ml-5 mr-5 col-md-8 col-lg-6">Lorem ipsum, dolor sit, amet consectetur adipisicing elit.<br/><br/> 
                                Ea, dolorum minus vel rerum velit fugit magni, repellendus ex tempore adipisci unde voluptas,<br/><br/>
                                provident ad earum! Deleniti veritatis odio sit, ad!</p>
                        </div>	
                        <div className="row justify-content-center">
                            <a className="navigation-button btn btn-success col-10 mb-5 mb-sm-0 col-sm-4 clr-2 bg-clr-1 col-md-2" id="login-btn" href="/login.html" >LOGIN</a>
                            <a className="navigation-button btn btn-success col-10 col-sm-4 clr-2 bg-clr-1 col-md-2" href="/signup.html">SIGNUP</a>
                        </div>          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
