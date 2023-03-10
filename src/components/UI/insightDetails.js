import ButtonGrp from "./buttonGreen";
import GreyContainer from "./greyContainer";
import Calendar from 'react-calendar';
import { useState } from "react";

const InsightDetails = ({children}) => {
    const [value, onChange] = useState(new Date());
    return (
        <GreyContainer>
                    <h3 className="mt-3 mb-6"><b>Ads Insights</b></h3>
                    <div className="flex flex-row justify-around mt-6">
                    <span className="flex"><p>Facebook Page: <b>79000285101</b></p></span>
                    <span className="flex flex-row"><p>Start Date: </p><Calendar onChange={onChange} value={value} /></span>
                    <span className="flex flex-row"><p>End Date: </p> <Calendar onChange={onChange} value={value} /></span>
                    {/* <span className="flex flex-row justify-end content-evenly"><p>As of 14th Dec 2022 9:00AM </p> <ButtonGrp className="ml-6 mb-3" text="Refresh Data"/></span> */}
                    </div>
        </GreyContainer>
    )
}

export default InsightDetails;