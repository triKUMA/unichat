import "./styles/Login.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome to Unichat!</h2>

        <button className="login-button google">
          <AiFillGoogleCircle /> Sign In with Google
        </button>
        <button className="login-button facebook">
          <FaFacebook /> Sign In with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
