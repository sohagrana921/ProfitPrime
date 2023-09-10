import usePrime from "../../Hooks/usePrime";

const PrimeUsers = () => {
  const [primeUsers] = usePrime();

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-red-800">Name</th>
                <th className="text-red-800">Email</th>
                <th className="text-red-800">Website</th>
                <th className="text-red-800">Contact</th>
              </tr>
            </thead>

            <tbody>
              {primeUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrimeUsers;
