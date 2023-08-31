import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion"
import axios from "axios";

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axios.get('http://localhost:5000/users')
        console.log(res.data);
        return res.data;
    })


    const handlePromoteAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((user) =>
                                    <tr key={user._id}>
                                        <td>
                                            <div className=""> {user.name}</div>
                                        </td>
                                        <td>
                                            <div className="">{user.email}</div>
                                        </td>
                                        <td>
                                            {
                                                user.role === 'admin' ?
                                                    <p className="text-center flex justify-evenly items-center"><FaUserShield></FaUserShield> Admin</p>
                                                    :
                                                    <motion.div className="box"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: .9 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                                        <button onClick={() => handlePromoteAdmin(user)} className="btn bg-gradient-to-r from-green-700 to-green-900 text-white border-none"><FaUsers></FaUsers></button>
                                                    </motion.div>
                                            }
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;