import { useRef } from "react";
import usePrime from "../../Hooks/usePrime";
import { motion } from "framer-motion"
import Swal from "sweetalert2";


const PrimeUsers = () => {

    const [primeUsers] = usePrime();
    const feedbackInputRef = useRef(null);

    const handleFeedbackSubmit = (user) => {
        const feedbackValue = feedbackInputRef.current.value;
        const data = {
            feedback: feedbackValue,
        };
        console.log(data, user);
        fetch(`http://localhost:5000/users/feedback/${user._id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Send Feedback successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        // Reset the form if needed
        feedbackInputRef.current.value = "";
    };

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
                                            {/* modal */}
                                            <motion.div className="box"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: .9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                                                <button className="btn btn-xs bg-gradient-to-r from-green-700 to-green-900 text-white border-none" onClick={() => window.my_modal_3.showModal()}>Feedback</button>
                                            </motion.div>
                                            <dialog id="my_modal_3" className="modal">
                                                <form method="dialog" className="modal-box">

                                                    <button htmlFor="my-modal-3" className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                                    <h3 className="font-bold text-lg mb-2">ADD FEEDBACK!</h3>

                                                    <input type="text" name="feedback" ref={feedbackInputRef} className="textarea textarea-bordered w-full h-24" />

                                                    <input type="submit" onClick={handleFeedbackSubmit} className="btn bg-gradient-to-r from-green-700 to-green-900 text-white mt-3 text-center" value="Send" />
                                                </form>
                                            </dialog>
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