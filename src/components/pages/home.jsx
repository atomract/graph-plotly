import { Accordion, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import { LineChart } from "../charts/lineChart";
import statsType from "../constants/constants";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../data'
import GreyContainer from "../UI/greyContainer";
import ButtonGreen from "../UI/buttonGreen";
import InsightDetails from "../UI/insightDetails";

const Home = () => {

    return (
        <div>
            <div className=""> 
                <InsightDetails/>
                <GreyContainer className="shadow-gray-400 p-2 text-center bg-gray-200 rounded-xl shadow border mb-2">
                    <LineChart data={data} statsType = {statsType.campaigns_stats} title ={'Campaigns Stats Graph Timeline'}/>
                </GreyContainer>
                <GreyContainer>
                    <LineChart data={data} statsType = {statsType.ads_stats} title ={'Ads Stats Graph Timeline'}/>
                </GreyContainer>
                <GreyContainer>
                    <LineChart data={data} statsType = {statsType.adsets_stats} title ={'Adsets Stats Graph Timeline'}/>
                </GreyContainer>
            </div>
        </div>
    )
}

export default Home

