
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortorder, setSortOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPages] = useState(4);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortorder === "lowToHigh") {
      return a.price - b.price;
    }

    if (sortorder === "highToLow") {
      return b.price - a.price;
    }

    if (sortorder === "ratingLowToHigh") {
      return a.rating - b.rating;
    }

    if (sortorder === "ratingHighToLow") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalPages = Math.ceil(
    sortedProducts.length / productPerPages
  );

  const indexofLastProduct = currentPage * productPerPages;

  const indexofFirstProduct =
    indexofLastProduct - productPerPages;

  const currentProducts = sortedProducts.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=10"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container mt-4">

      <h1 className="mb-4 text-center">
        Our Products
      </h1>

      {/* Sorting Dropdown */}
      <label className="form-label">
        Sort Products
      </label>

      <select
        className="form-select mb-4"
        value={sortorder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">Default</option>

        <option value="lowToHigh">
          Price: Low to High
        </option>

        <option value="highToLow">
          Price: High to Low
        </option>
      </select>

      <select
        className="form-select mb-4"
        value={sortorder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">Default</option>

        <option value="ratingLowToHigh">
          Rating: Low to High
        </option>

        <option value="ratingHighToLow">
          Rating: High to Low
        </option>
      </select>

      {/* Display Products */}
      <div className="row">
        {products.length === 0 ? (
          <p className="text-center text-muted">
            No products available right now.
          </p>
        ) : (
          currentProducts.map((prod) => (
            <div
              className="col-sm-6 col-lg-3 mb-4"
              key={prod.id}
            >
              <Product
                id={prod.id}
                title={prod.title}
                image={prod.thumbnail}
                price={prod.price}
                category={prod.category}
                rating={prod.rating}
              />
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">

        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default Products;
