import React from "react";
import { Button } from "antd";

import { SISE_SHOES_OTPIONS, SIZE_CLOTHES_OTPIONS } from "../../constants";

export const Sizes = (props) => {
  const { sizes, setSize, width, sizeSelect, disable, keyType } = props;

  console.log("props :>> ", props);

  const handleDisableBtn = (size) => {
    let isDisable = true;

    console.log("sizes :>> ", sizes);

    for (let index = 0; index < sizes.length; index++) {
      if (sizes[index] === size) {
        isDisable = false;
      }
    }

    return isDisable;
  };

  const arr = keyType === "shoes" ? SISE_SHOES_OTPIONS : SIZE_CLOTHES_OTPIONS;

  return (
    <div className="sizes">
      {arr.map((item, index) => {
        return (
          <Button
            {...(disable && {
              disabled: handleDisableBtn(item.value),
            })}
            style={{
              width: width ? width : 100,
              ...(item.value === sizeSelect && {
                border: "1px solid #000",
              }),
            }}
            size="large"
            key={index}
            onClick={() => setSize(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default Sizes;
