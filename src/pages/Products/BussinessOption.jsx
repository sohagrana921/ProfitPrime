import { Helmet } from "react-helmet-async";

const BussinessOption = () => {
  return (
    <div>
      <Helmet>
        <title>ProfitPrime | Products</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 my-44 p-10">
        <figure>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/760eba225ccdeaad05ac86cbebbbbd137a716a95/d3d32/product/forecasting-planning/hero_hud4b1d45d573b178d57e69b6a44eb156b_86474_1200x800_fit_q85_h2_lanczos_3.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-800">Increase your accuracy!</h2>
          <p>
            Take advantage of our system-generated predictions to improve
            accuracy and granularity of forecasts. Review each day and segment
            to supplement information that is unique to your knowledge..
          </p>
          <div className="my-10">
            <h2 className="card-title text-red-800">Work collaboratively!</h2>
            <p>
              Lock-in your forecasts for key stakeholders while you and your
              team continue working on the next iteration. Share insights and
              findings directly in Pace, and keep track of various proposals
            </p>
          </div>
          <h2 className="card-title text-red-800">
            Keep your eyes on the target!
          </h2>
          <p>
            Our intuitive interface makes it easy to create and share financial
            targets with your stakeholders. Monitor your progress in Pace and
            get notifications about successes and potential issues..
          </p>
        </div>
      </div>
    </div>
  );
};

export default BussinessOption;
