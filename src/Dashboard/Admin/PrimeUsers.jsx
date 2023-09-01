import usePrime from "../../Hooks/usePrime";
import { motion } from "framer-motion"


const PrimeUsers = () => {

    const [primeUsers] = usePrime();

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                primeUsers.map((user) =>
                                    <tr key={user._id}>
                                        <td>
                                            <div className=""> {user.name}</div>
                                        </td>
                                        <td>
                                            <div className="">{user.email}</div>
                                        </td>
                                        <td>
                                            <motion.div className="box"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: .9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                                <label htmlFor="my_modal_6" className="btn btn-xs bg-gradient-to-r from-green-700 to-green-900 text-white border-none">Feedback</label>
                                            </motion.div>
                                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">Feedback</h3>
                                                    <textarea className="textarea textarea-bordered w-full h-full" type="text" placeholder="Feedback"></textarea>
                                                    <div className="modal-action">
                                                        <motion.div className="box"
                                                            whileHover={{ scale: 1.2 }}
                                                            whileTap={{ scale: .9 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                                            <label htmlFor="my_modal_6" className="btn bg-gradient-to-r from-green-700 to-green-900 text-white">Send</label>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
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

export default PrimeUsers;