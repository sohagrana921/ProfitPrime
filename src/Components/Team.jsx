import image1 from ".././assets/Team/Sohag.jpg";
import image2 from ".././assets/Team/sohan.jpg";
import image3 from ".././assets/Team/Arafat.jpg";
import image4 from ".././assets/Team/sayed.jpg";
import image6 from ".././assets/Team/tonmoy.png";

const Team = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl uppercase font-bold pt-10 md:py-20 py-10 text-sky-950 text-center my-container">
        Meet Our Team
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-20 text-center">
        <div>
          <img src={image2} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Shohanur Rahman</h1>
          <h2>Vice Leader</h2>
        </div>
        <div>
          <img src={image1} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className=" font-bold">Sohag Rana</h1>
          <h2>Team Leader</h2>
        </div>
        <div>
          <img src={image3} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Md Arafat Hossan</h1>
          <h2>Team Member</h2>
        </div>
        <div>
          <img src={image4} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Syed Anwarul Haque Piash</h1>
          <h2>Team Member</h2>
        </div>
        <div>

        </div>
        <div>
          <img src={image6} alt="" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="font-bold">Md. Ashiqur Rahman Tonmoy</h1>
          <h2>Team Member</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
