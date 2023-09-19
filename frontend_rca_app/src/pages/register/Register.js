import "./Register.scss";
import { Link } from "react-router-dom";
import SignupForm from "../../components/forms/SingupForm/SignupForm";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Please Login.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          </p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>
          <Link to="/login" replace>
            <button className="btn btn-light">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
