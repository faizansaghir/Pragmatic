import React,{useEffect} from 'react'

function Login() {
    useEffect(() => {
        document.body.style.backgroundImage="url('../img/login_bg.png')";
        document.title="Login - Pragmatic";
    });
    return (
        <div className="container-fluid d-flex align-items-center">
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-10 col-lg-4 col-md-6">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" name="" className="form-control user-input" placeholder="Username"/>
                            </div>
                            <div className="input-group">
                                <input type="password" name="" className="form-control user-input" placeholder="Password"/>
                            </div>
                            <div className="d-flex justify-content-center mt-4 login_container">
                                <input type="submit" name="" value="Login" className="btn btn-success clr-2 bg-clr-1 navigation-button py-3 w-100"/>
                            </div>
                        </form>

                        <div className="mt-2 d-flex  justify-content-between">
                            <div>
                                <a href="signup.html" className="clr-2 links">Create Account</a>
                            </div>
                            <div>
                                <a href="forgot.html" className="clr-2 links">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
