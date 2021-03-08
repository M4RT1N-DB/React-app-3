import React from "react";
import NumberFormat from "react-number-format";
import "./result.css";

export interface ResultProps {
  price: any;
}

const Result: React.FC<ResultProps> = ({ price }) => {
  return (
    <div className="result-class">
          <NumberFormat
            value={price}
            thousandSeparator={true}
            prefix={"The total is: $ "}
            displayType={"text"}
            fixedDecimalScale={true}
            decimalScale={2}
          />
    </div>
  );
};

export default Result;
