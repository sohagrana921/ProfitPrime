import image1 from ".././assets/Team/Sohag.jpg";
import image2 from ".././assets/Team/sohan.jpg";
import image3 from ".././assets/Team/Arafat.jpg";
import image6 from ".././assets/Team/Tonmoy.jpg";
import SectionTitle from "../pages/Shared/SectionTitle/SectionTitle";

const Team = () => {
  return (
    <div>
      <SectionTitle
        subheading={"Our Specialists"}
        heading={"Meet Our Team"}
      ></SectionTitle>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-28 text-center mb-20" >
        <div>
          <img src={image1} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-right"/>
          <h1 className=" font-bold">Sohag Rana</h1>
          <h2>Team Lead</h2>
        </div>
        <div>
          <img src={image2} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-right"/>
          <h1 className="font-bold">Shohanur Rahman</h1>
          <h2>Team Member</h2>
        </div>
        <div>
          <img src={image3} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-left"/>
          <h1 className="font-bold">Md Arafat Hossan</h1>
          <h2>Team Member</h2>
        </div>
        <div>
          <img src={image6} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-left"/>
          <h1 className="font-bold">Md. Ashiqur Rahman Tonmoy</h1>
          <h2>Team Member</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
