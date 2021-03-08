import React, { useState, useEffect } from "react";
import { Spin } from "antd";

import "./App.css";
import Header from "./components/header/header";
import FormQuote from "./components/form/form";
import Abstract from "./components/abstract/abstract";
import Result from "./components/result/result";

function App() {
  const [abstract, setAbstract] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const { price, data } = abstract;
  let titleHeader: string = "Insurance Quote";
  return (
    <div className="app-component">
      <div className="container">
        <Header title={titleHeader} />
        <div className="form-container">
          <FormQuote setAbstract={setAbstract} setLoading={setLoading} />

        <Spin tip="Loading..." spinning={loading}>
            {data?<div>
                  <Abstract data={data} />
                  <Result price={price} />
                </div>:null}
        </Spin>


        </div>
      </div>
    </div>
  );
}

export default App;
