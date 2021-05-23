import React,{useEffect} from 'react'

function Forgot() {
    
    useEffect(() => {
        document.body.style.backgroundImage="url('../img/login_bg.png')";
        document.title="Login - Pragmatic";
    });
    return (
        <div className="container-fluid d-flex align-items-center">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-10 col-md-6 col-lg-4">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control user-input" placeholder="Username"/>
                            </div>
                            <div className="d-flex justify-content-center mt-4 login_container">
                                <input type="submit" className="btn btn-success clr-2 bg-clr-1 navigation-button w-100 py-3"/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot