const CompetitorSolution = () => {
  return (
    <div className="mt-32">
      
      <div className="my-container">
        <div className="bg-gradient-to-r from-purple-100 to-purple-300 p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center mb-6">
          {/* Image */}
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="w-full h-full"
              src="/revenue.webp"
              alt="Competitor Icon"
            />
          </div>

          {/* Text */}
          <div className="md:ml-4 flex-grow">
            <h3 className="text-lg font-semibold mb-2 text-purple-800">
              Analyzing Competitors
            </h3>
            <ul className="list-disc list-inside text-gray-800 pl-8">
              <li>Identify your key competitors in the market.</li>
              <li>Research their product offerings, features, and pricing.</li>
              <li>Study their target audience and customer demographics.</li>
              <li>Analyze their marketing and promotional strategies.</li>
              <li>Assess their strengths and weaknesses.</li>
            </ul>
            {/* <button className="mt-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Learn More
          </button> */}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-red-300 p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
          {/* Image */}
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="w-full h-full"
              src="/profit-up.png"
              alt="Positioning"
            />
          </div>

          {/* Text */}
          <div className="md:ml-4 flex-grow">
            <h3 className="text-lg font-semibold mb-2 text-red-800">
              Positioning Your Offering
            </h3>
            <ul className="list-disc list-inside text-gray-800 pl-8">
              <li>Highlight your unique value proposition (UVP).</li>
              <li>
                Showcase how your product solves specific customer problems.
              </li>
              <li>Emphasize key differentiators from competitors.</li>
              <li>Create compelling marketing messages and visuals.</li>
              <li>Target the right audience and segment your market.</li>
            </ul>
            {/* <button className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded">
            Learn More
          </button> */}
          </div>
        </div>

        <div className="mt-6 md:mt-8 flex justify-center">
          {/* <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded">
          Compare Your Competitors
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default CompetitorSolution;
