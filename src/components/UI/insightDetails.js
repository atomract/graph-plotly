import ButtonGreen from "./buttonGreen";
import GreyContainer from "./greyContainer";

const InsightDetails = ({children}) => {
    return (
        <GreyContainer>
                    <h3 className="mt-3 mb-6"><b>Ads Insights</b></h3>
                    <div className="flex flex-row justify-around mt-6">
                    <span className="flex"><p>Facebook Page: <b>79000285101</b></p></span>
                    <span className="flex flex-row"><p>Start Date: </p> <p> 07/12/2022</p></span>
                    <span className="flex flex-row"><p>End Date: </p> <p> 07/12/2022</p></span>
                    <span className="flex flex-row justify-end"><p>As of 14th Dec 2022 9:00AM </p> <ButtonGreen btnColor="bg-green-500" className="ml-6" text="Refresh Data"/></span>
                    </div>
        </GreyContainer>
    )
}

export default InsightDetails;