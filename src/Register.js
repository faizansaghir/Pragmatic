import React,{useEffect} from 'react'

function Register() {
    useEffect(() => {
        document.body.style.backgroundImage="url('../img/signup_bg.png')";
        document.title="Signup - Pragmatic";
    });
    return (
        <div className="container-fluid d-flex align-items-center">
    <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="col-10 col-lg-4 col-md-6">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" name="" className="form-control user-input" placeholder="Firstname"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" name="" className="form-control user-input" placeholder="Lastname"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" name="" className="form-control user-input" placeholder="Enrolment no."/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" name="" className="form-control user-input" placeholder="Password"/>
                    </div>
                    <div className="input-group">
                        <input type="password" name="" className="form-control user-input"  placeholder="Confirm Password"/>
                    </div>
                    <div className="d-flex mt-4 w-100">
                        <input type="submit" name="" value="Register" className="btn btn-success clr-2 bg-clr-1 py-3 navigation-button w-100"/>
                    </div>
                </form>

                <div className="mt-2">
                    <div className="d-flex">
                        <a href="login.html" className="ml-2 w-100 clr-2 links text-end">Already have an account? Login</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Register
