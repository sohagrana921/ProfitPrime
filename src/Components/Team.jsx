import image1 from ".././assets/Team/Sohag.jpg";
import image2 from ".././assets/Team/sohan.jpg";
import image3 from ".././assets/Team/Arafat.jpg";
import image6 from ".././assets/Team/Tonmoy.jpg";

const Team = () => {
  return (
    <div>
      <div className="text-center my-16 md:my-32 md:mx-64">
        <p className="text-red-800">---Our Specialists---</p>
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">Meet Our Team</h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-28 text-center mb-20">
        <div>
          <img
            src={image1}
            alt=""
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h1 className=" font-bold">Sohag Rana</h1>
          <h2>Leader</h2>
        </div>
        <div>
          <img src={image2} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Shohanur Rahman</h1>
          <h2>Vice Leader</h2>
        </div>
        <div>
          <img src={image3} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Md Arafat Hossan</h1>
          <h2>Member</h2>
        </div>
        {/* <div>
          <img src={image4} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Syed Anwarul Haque Piash</h1>
          <h2>Team Member</h2>
        </div> */}
        {/* <div></div> */}
        <div>
          <img src={image6} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Md. Ashiqur Rahman Tonmoy</h1>
          <h2>Member</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
