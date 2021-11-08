import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Colors from "./Colors";
import Sizes from "./Sizes";
import { addCart } from "../../redux/products";

import "./../css/Details.css";

export const Details = () => {
  const { products, cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  let { id } = useParams();

  const detailProduct = products.find((item) => item._id === id);

  const [size, setSize] = React.useState(detailProduct.sizes[0]);

  const handleCart = () => {
    const check = cart.find(
      (item) => item._id === detailProduct._id && item.size === size
    );

    if (check) {
      window.alert("Sản phẩm đã tồn tại trong giỏ hàng!");
    } else {
      dispatch(addCart({ id: detailProduct._id, size: size }));
    }
  };

  if (products.length === 0) return <React.Fragment />;

  return (
    <div>
      <div className="details">
        <div className="wrapper-image">
          <img src={detailProduct.src} alt="" />
          <img src={detailProduct.src} alt="" />
          <img src={detailProduct.src} alt="" />
          <img src={detailProduct.src} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{detailProduct.title}</h2>
          </div>

          <Colors colors={detailProduct.colors} />

          <p>Giá: ${detailProduct.price}</p>
          <p>Màu: {detailProduct.color || detailProduct.colors[0]}</p>

          <p>Size: </p>
          <Sizes
            sizes={detailProduct.sizes}
            keyType={undefined}
            setSize={setSize}
            width={undefined}
            sizeSelect={size}
            disable={true}
          />

          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>

          <Link to="/cart" className="cart" onClick={() => handleCart()}>
            Thêm vào giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
