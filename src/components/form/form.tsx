import React, { useState } from "react";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Form, Input, Button, Select, Radio } from "antd";
import FormItem from "antd/lib/form/FormItem";

import { QuoteModel } from "../../models/quote.model";
import { getYearDifference,totalToPay,typeOfInsurance } from "../../helperFunctions/helper";

export interface FormQuoteProps {
  setAbstract:Function;
  setLoading:Function;
}

const FormQuote: React.FC<FormQuoteProps> = ({setAbstract,setLoading}) => {
  const [data, setData] = useState<QuoteModel>({
    mark: "",
    year: "",
    plan: "",
  });
  const { mark, plan, year } = data;
  const [error, setError] = useState<boolean>(false)

  const successHandler = (values: any) => {
    setError(false);
    //-------GET YEAR DIFFERENCE
    const differenceYear=getYearDifference(year!);
    //-------VALUE BASE
    let base=2000;
    //-------for each year subtract 3%
    base-=((differenceYear*3)*base)/100;
    base=totalToPay(mark!) * base;
    const incrementPlan=typeOfInsurance(plan!);
    base=incrementPlan*base;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAbstract({price:base,data});
    }, 2000);
    
    return;
  };
  const failledHandler = (error: ValidateErrorEntity<any>) => {
    setError(true);
    return;
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="formQuote-component">
      <Form
        layout="vertical"
        name="form"
        onFinish={successHandler}
        onFinishFailed={failledHandler}
      >
        <Form.Item
          label="Mark"
          name="mark"
          rules={[{ required: true, message: "Mark is required!" }]}
        >
          <Select
            placeholder="Select an Option."
            value={mark}
            onChange={(e) => setData({ ...data, mark: e })}
            
          >
            <Select.Option name={mark} value="american">
              American
            </Select.Option>
            <Select.Option name={mark} value="european">
              European
            </Select.Option>
            <Select.Option name={mark} value="asian">
              Asian
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Year"
          name="year"
          rules={[{ required: true, message: "Year is required!" }]}
        >
          <Select
            placeholder="Select an Option."
            value={year}
            onChange={(e) =>setData({ ...data, year: e })}
          >
            <Select.Option name="year" value="2023">
              2023
            </Select.Option>
            <Select.Option name="year" value="2022">
              2022
            </Select.Option>
            <Select.Option name="year" value="2021">
              2021
            </Select.Option>
            <Select.Option name="year" value="2020">
              2020
            </Select.Option>
            <Select.Option name="year" value="2019">
              2019
            </Select.Option>
            <Select.Option name="year" value="2018">
              2018
            </Select.Option>
            <Select.Option name="year" value="2017">
              2017
            </Select.Option>
            <Select.Option name="year" value="2016">
              2016
            </Select.Option>
            <Select.Option name="year" value="2015">
              2015
            </Select.Option>
            <Select.Option name="year" value="2014">
              2014
            </Select.Option>
            <Select.Option name="year" value="2013">
              2013
            </Select.Option>
            <Select.Option name="year" value="2012">
              2012
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="plan"
          label="Plan"
          rules={[{ required: true, message: "Plan is required!" }]}
        >
          <Radio.Group onChange={changeHandler} name="plan">
            <Radio value="basic">Basic</Radio>
            <Radio value="complete">Complete</Radio>
          </Radio.Group>
        </Form.Item>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Quote
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default FormQuote;
