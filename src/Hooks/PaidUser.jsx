import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PaidUser = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [customer, setCustomer] = useState({});
  const email = user?.email;
  console.log(user?.email);



  useEffect(()=>{
    fetch(`https://profit-prime-server.vercel.app/user/${email}`)
    .then(res=>res.json())
    .then(data=>setCustomer(data))
  },[email])


  console.log(customer);

  if (loading) {
    return (
      <div className="flex justify-center my-28">
        <progress className="progress w-1/2"></progress>
      </div>
    );
  }

  if (customer?.userRole === 'Basic' || customer?.userRole === 'Prime') {
    return children;
  }
  
  return (
  <Navigate to="/pricing" />
  
  );

};

export default PaidUser;
