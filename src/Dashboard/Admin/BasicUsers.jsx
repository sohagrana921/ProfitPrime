import useBasic from "../../Hooks/useBasic";

const BasicUsers = () => {
  const [basicUsers] = useBasic();

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Contact</th>
              </tr>
            </thead>

            <tbody>
              {basicUsers.map((user) => (
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

export default BasicUsers;
