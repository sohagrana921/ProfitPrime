const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="text-center my-16 md:my-32 md:mx-64">
      <p className="text-red-800">---{subheading}---</p>
      <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
