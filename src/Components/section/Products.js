import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Collapse, Divider, Checkbox } from "antd";

import Sizes from "./Sizes";
import Colors from "./Colors";
import {
  GENDER_OTPIONS,
  SISE_SHOES_OTPIONS,
  SIZE_CLOTHES_OTPIONS,
} from "../../constants";
import { groupBy } from "../../utils";

import "./../css/Products.css";

const { Panel } = Collapse;

export const Products = () => {
  const { products } = useSelector((state) => state.products);

  const [keyType, setKeyType] = React.useState("shoes");
  const [size, setSize] = React.useState("");

  const newData = groupBy(products, "type");

  const selectType = (type) => {
    setKeyType(type);
  };

  const objectRender = () => {
    let res = [];

    for (let key in newData) {
      res.push(
        <button
          onClick={() => {
            selectType(key);
          }}
        >
          <h3
            style={{
              textDecoration: key === keyType ? "underline" : "none",
            }}
          >
            {key}
          </h3>
        </button>
      );
    }

    return res;
  };

  const handleCollapse = (key) => {};

  const handleCheckBox = (checkedValues) => {};

  return (
    <div id="product">
      <div className="options">
        {objectRender()}

        <Divider />

        <div>
          <Collapse
            defaultActiveKey={["1", "2", "3"]}
            onChange={handleCollapse}
            expandIconPosition="right"
          >
            <Panel header="Gender" key="1">
              <Checkbox.Group
                options={GENDER_OTPIONS}
                defaultValue={["men"]}
                onChange={handleCheckBox}
              />
            </Panel>

            <Panel header="Size" key="2">
              <Sizes
                sizes={
                  keyType === "shoes"
                    ? SISE_SHOES_OTPIONS
                    : SIZE_CLOTHES_OTPIONS
                }
                keyType={keyType}
                setSize={setSize}
                width={60}
                sizeSelect={size}
                disable={false}
              />
            </Panel>

            <Panel header="Colors" key="3">
              <Colors colors={undefined} />
            </Panel>
          </Collapse>
        </div>
      </div>

      <div className="card-container">
        {newData[keyType].map((product) => {
          return (
            <div className="card" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt="" />
              </Link>
              <div className="content">
                <h3>
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h3>
                <span>${product.price}</span>
                <p>{product.description}</p>
                <button>
                  <Link to={`/product/${product._id}`}>Chi tiết sản phẩm</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
