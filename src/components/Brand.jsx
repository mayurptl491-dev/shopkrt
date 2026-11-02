
import React from "react";
import brands from "../data/Brand";

const Brands = () => {
  const firstSection = brands.slice(0, Math.ceil(brands.length / 2));
  const secondSection = brands.slice(Math.ceil(brands.length / 2));

  const renderBrands = (items) => (
    <div className="row text-center">
      {items.map((brand) => (
        <div key={brand.id} className="col-6 col-md-3 mb-4">
          <div className="p-3 h-100">
            <img
              src={brand.image}
              alt={brand.name}
              className="img-fluid mb-2"
              style={{
                maxHeight: "80px",
                width: "100%",
                objectFit: "contain",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <h6>{brand.name}</h6>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h4 className="text-center mt-5 mb-3">Popular Brands</h4>
      {renderBrands(firstSection)}

      <h4 className="text-center mt-5 mb-3">Trusted Brands</h4>
      {renderBrands(secondSection)}
    </div>
  );
};

export default Brands;
