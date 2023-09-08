import useVerifyAdmin from "../../../Hooks/useVerifyAdmin";
import BusinessRevenue from "../../../pages/Home/Revenue/BusinessRevenue";

const ShowHome = () => {
  const [checkAdmin] =  useVerifyAdmin();
  return (
    <div>
      {
        checkAdmin ? 
        <>
        <h1 className="text-4xl text-sky-900 font-bold uppercase">Welcome</h1>
        </> 
        : 
        <><BusinessRevenue></BusinessRevenue></>
      }
    </div>
  );
};

export default ShowHome;
