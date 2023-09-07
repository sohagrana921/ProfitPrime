import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useUsersInfo = () => {
    const { user } = useContext(AuthContext);

    const { data: users = [], isLoading: Loading } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `https://profit-prime-server.vercel.app/user/${user?.email}`
            );
            return res.data;
        },
    });

    return [users, Loading];
};

export default useUsersInfo;