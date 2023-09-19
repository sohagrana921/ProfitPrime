import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useUsersInfo from "./useUsersInfo";

const PaidUser = ({ children }) => {
  const navigate = useNavigate();
  const { loading } = useContext(AuthContext);
  // const [customer, setCustomer] = useState({});
  // const email = user?.email;
  // console.log(user?.email);
  // useEffect(() => {
  //   fetch(`https://profit-prime-server.vercel.app/user/${email}`)
  //     .then((res) => res.json())
  //     .then((data) => setCustomer(data));
  // }, [email]);

  // console.log(customer);
  const [users] = useUsersInfo();

  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }

  if (
    users?.userRole === "Basic" ||
    users?.userRole === "Prime" ||
    users?.role === "admin"
  ) {
    return children;
  }

  // return (
  // <Navigate to="/pricing" />

  // );
  return navigate("/pricing");
};

export default PaidUser;
