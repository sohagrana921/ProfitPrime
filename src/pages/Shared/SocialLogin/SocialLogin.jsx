import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      navigate(from, { replace: true });
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
            <img
              className="h-8 w-8"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold ml-2">Google</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
