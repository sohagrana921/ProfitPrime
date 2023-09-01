import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useVerifyAdmin = () => {
  const { user } = useContext(AuthContext);

  const { data: checkAdmin, isLoading: checkAdminLoading } = useQuery({
    queryKey: ["checkAdmin", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://profit-prime-server.vercel.app/users/admin/${user?.email}`
      );
      return res.data.admin;
    },
  });

  return [checkAdmin, checkAdminLoading];
};

export default useVerifyAdmin;
