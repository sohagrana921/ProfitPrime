import { Helmet } from "react-helmet-async";

const DataAnalysis = () => {
  return (
    <div>
      <Helmet>
        <title>ProfitPrime | Products</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 my-44 p-10">
        <figure>
          <img
            src="https://www.datapine.com/blog/wp-content/uploads/2018/10/sales-performance-dashboard.png"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-800">
            Get creative with your data!
          </h2>
          <p>
            Predefined reports will only point you in the direction everyone
            else is looking. To innovate and find new revenue opportunities you
            need to be able to have full control of your data.
          </p>
          <div className="my-10">
            <h2 className="card-title text-red-800">
              Bring your strategy alive!
            </h2>
            <p>
              Curate and build your own dashboards in ways that allow you to
              drive data-driven decisions and convey your strategy to
              stakeholders with beautiful visualisations.
            </p>
          </div>
          <h2 className="card-title text-red-800">Never miss a thing!</h2>
          <p>
            It is your responsibility to keep everybody in your group updated
            about your revenue strategy. Pace enables you to automate these
            updates to stakeholders and will notify you about critical changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;
