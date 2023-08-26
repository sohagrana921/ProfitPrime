import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider">Or Login Using</div>
      <div className="flex justify-center gap-4">
        <div className="flex justify-center">
          <Link
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center bg-slate-300 p-4 rounded-lg mb-5"
          >
            <FaGoogle></FaGoogle>
            <h1 className="text-md font-semibold ml-2">Google</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
