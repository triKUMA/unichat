import "./styles/Login.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import {
  Auth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

interface LoginProps {
  auth: Auth;
}

function Login(props: LoginProps) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome to Unichat!</h2>

        <button
          className="login-button google"
          onClick={() => {
            signInWithRedirect(props.auth, new GoogleAuthProvider());
          }}
        >
          <AiFillGoogleCircle /> Sign In with Google
        </button>
        <button
          className="login-button facebook"
          onClick={() => {
            signInWithRedirect(props.auth, new FacebookAuthProvider());
          }}
        >
          <FaFacebook /> Sign In with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
