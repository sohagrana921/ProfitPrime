import { useEffect, useState } from "react";

const ConsultingProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("ProductConsulting.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });

  return (
    <div className="mt-20">
      {product.map((p) => (
        <div key={p.id}>
          <div className="card w-full bg-base-100 mb-5">
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl">{p.pname}</h2>
              <p>{p.pdescribtion}</p>
              <p>
                <span className="font-bold">Experience Needed:</span>{" "}
                {p.Experience}
              </p>
            </div>
            <figure>
              <img src={p.pimg} alt="Image" />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultingProducts;
