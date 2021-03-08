import React from 'react'
import './abstract.css';

import { QuoteModel } from "../../models/quote.model";
import { capitalLetter } from "../../helperFunctions/helper";

export interface AbstractProps {
    data:QuoteModel;
}
 
const Abstract: React.FC<AbstractProps> = ({data}) => {
    const {mark,plan,year}=data;
    return ( 
        <div className="abstract-class">
                <h2>Quote Summary</h2>
                <ul>
                    <li>Mark: {capitalLetter(mark!)}</li>
                    <li>Plan: {capitalLetter(plan!)}</li>
                    <li>Year: {year}</li>
                </ul>
        </div>
     );
}
 
export default Abstract;