import React from "react";

import { COLOR_OTPIONS } from "../../constants";

export const Colors = (props) => {
  const { colors } = props;

  const arr = colors ? colors : COLOR_OTPIONS;

  return (
    <div className="colors">
      {arr.map((item, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: item?.value || item }}
          />
        );
      })}
    </div>
  );
};

export default Colors;
