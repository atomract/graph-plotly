import { Accordion, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import { LineChart } from "../charts/lineChart";
import statsType from "../constants/constants";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../data'
import GreyContainer from "../UI/greyContainer";
import ButtonGrp from "../UI/buttonGreen";
import InsightDetails from "../UI/insightDetails";

const Home = () => {

    const [adsType, setAdsType] = useState()  
    const [platformType, setPlatformType] = useState()

    const afterClickFun = (event) => {
        setPlatformType(event.target.name);
      };

    return (
        <div>
            <div className=""> 
                <InsightDetails/>
                <GreyContainer classNames="mt-6" bgColor="bg-slate-100">
                <div className='flex flex-row justify-start content-evenly'>
                    <ButtonGrp afterClick={afterClickFun} buttons={["All", "Facebook", "Instagram", "Messanger", "Audiance Network"]} className="ml-6"/>
                </div>
                </GreyContainer>
                <GreyContainer className="shadow-gray-400 p-2 text-center bg-gray-200 rounded-xl shadow border mb-2">
                    <LineChart data={data} statsType = {statsType.campaigns_stats} socialType={platformType} title ={'Campaigns Stats Graph Timeline'}/>
                </GreyContainer>
                <GreyContainer>
                    <LineChart data={data} statsType = {statsType.ads_stats} socialType={platformType} title ={'Ads Stats Graph Timeline'}/>
                </GreyContainer>
                <GreyContainer>
                    <LineChart data={data} statsType = {statsType.adsets_stats} socialType={platformType} title ={'Adsets Stats Graph Timeline'}/>
                </GreyContainer>
            </div>
        </div>
    )
}

export default Home

