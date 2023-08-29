import { useForm } from 'react-hook-form';

const CustomerInformation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div className="flex pt-8 mt-8 justify-center items-center h-screen bg-gradient-to-r from-green-200 via-purple-300 to-green-300">
      <div className="bg-gray-200  p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Customer Information</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
            {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}
            {errors.email?.type === 'pattern' && <span className="text-red-500">Invalid email format</span>}
          </div>
          <div>
            <label htmlFor="contact" className="block text-gray-700 font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              id="contact"
              {...register('contact', { required: true })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
            {errors.contact && <span className="text-red-500">Contact number is required</span>}
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              id="address"
              {...register('address', { required: true })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
            {errors.address && <span className="text-red-500">Address is required</span>}
          </div>
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerInformation;
