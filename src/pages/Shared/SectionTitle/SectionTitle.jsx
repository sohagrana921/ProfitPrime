const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="mx-auto text-center w-10/12 my-12">
      <p className="text-red-800">--- {subheading} ---</p>
      <h3 className="text-sm lg:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
