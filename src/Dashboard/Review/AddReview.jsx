import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import useUsersInfo from "../../Hooks/useUsersInfo";

const AddReview = () => {
  const [users] = useUsersInfo();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://profit-prime-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Send successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <div className="my-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={users?.name}
              {...register("name", { required: true })}
              className="input input-bordered w-[300px] md:w-[500px] "
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Your Review</span>
            </label>
            <input
              type="text"
              placeholder="Add Review"
              {...register("quote", { required: true })}
              className="input input-bordered w-full h-28 "
            />
          </div>
        </div>
        <input
          type="submit"
          className="btn bg-red-800 hover:bg-purple-950 text-white my-6 w-full"
          value="Send"
        />
      </form>
    </div>
  );
};

export default AddReview;
