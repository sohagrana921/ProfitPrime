import { useNavigate } from "react-router-dom";

const PaymentSuccessModal = ({ isOpen, onClose, transactionId }) => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    onClose(); // Close the modal
    navigate("/info");
  };

  return (
    <div className={`fixed px-4 inset-0 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-gray-900 opacity-70"
          onClick={onClose}
        ></div>
        <div className="bg-white p-6 rounded-lg shadow-lg z-10">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Payment Successful
          </h2>
          <p className="text-gray-700 mb-4">Transaction ID: {transactionId}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm focus:outline-none"
            onClick={handleOkClick}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
