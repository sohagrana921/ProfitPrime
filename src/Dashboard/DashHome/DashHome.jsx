import SubscriptionCard from "./SubscriptionCard";

const DashHome = () => {
  return (
    <div className="flex justify-center w-full items-center h-screen bg-green-100">
      <SubscriptionCard
        companyName="AB Company LTD."
        planName="Prime Plan"
        subscriptionDate="Aug 25, 2023"
        endDate="Aug 24, 2024"
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default DashHome;
