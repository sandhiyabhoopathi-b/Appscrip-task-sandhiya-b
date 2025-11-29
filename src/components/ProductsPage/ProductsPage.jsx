import { useState, useEffect, useRef } from "react";
import "./ProductsPage.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import FilterDropdown from "./FliterDropdown";
import Recommended from "./Recommanded";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../../redux/slice/productsSlice";

const ProductsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [recommendedOpen, setRecommendedOpen] = useState(false);
  const popupRef = useRef(null);
  const recommendedRef = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterOpen]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        recommendedOpen &&
        recommendedRef.current &&
        !recommendedRef.current.contains(event.target)
      ) {
        setRecommendedOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [recommendedOpen]);

  return (
    <div>
      <div className="hero-text">
        <h1>Discover Our Products</h1>
        <p>
          From essentials to luxury, everything is just a tap away.
          <br />
          Shop smarter, live easier. The best deals come to those who click.
        </p>
      </div>

      <div className="controls-wrapper">
        <div className="controls">
          <div
            className="filter-section"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <span>{products.length} items</span>

            <span className="filter-toggle">
              {filterOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
              {filterOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          </div>
          <div className="separator"></div>
          <div
            className="recommended-section"
            onClick={() => setRecommendedOpen(!recommendedOpen)}
          >
            <p>RECOMMENDED</p>
            {recommendedOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
        </div>

        {recommendedOpen && (
          <div className="recommended-popup" ref={recommendedRef}>
            <Recommended />
          </div>
        )}
      </div>

      <div className="content-wrapper">
        {filterOpen && (
          <>
            <div className="filter-sidebar desktop-only" ref={popupRef}>
              <FilterDropdown />
            </div>

            <div className="filter-popup mobile-only" ref={popupRef}>
              <FilterDropdown />
            </div>
          </>
        )}

        <div className="products-grid">
          {status === "loading" && <p>Loading…</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" &&
            products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
