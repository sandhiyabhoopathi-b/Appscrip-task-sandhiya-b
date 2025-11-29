import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const isOutOfStock = product.id === 1;
  const newproduct = product.id ==2;

  const limitText = (text, n) =>
    text.length > n ? text.substring(0, n) + "..." : text;

  return (
    <div className="product-card">
      <div className="image-wrapper">
        {newproduct && <span className="new-product-tag">NEW PRODUCT</span>}
        <img
          src={product.image}
          alt={product.title}
          className={`product-img ${isOutOfStock ? "fade-out" : ""}`}
        />

        {isOutOfStock && (
          <div className="out-of-stock-banner">OUT OF STOCK</div>
        )}
      </div>

      <p className="product-title">{limitText(product.title, 25)}</p>

      <div className="product-info">
        <p className="account-signin">
          <span className="underline-text">Sign in</span> or Create an account
          to see pricing
        </p>

        {liked ? (
          <IoMdHeart
            className="heart-icon"
            onClick={() => setLiked(false)}
            style={{ color: "red" }}
          />
        ) : (
          <IoMdHeartEmpty
            className="heart-icon"
            onClick={() => setLiked(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
