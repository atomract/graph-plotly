import { Accordion, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import { LineChart } from "../charts/lineChart";
import statsType from "../constants/constants";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from '../data'

const Home = () => {

    return (
        <div>
            <div className="mt">
                <LineChart data={data} statsType = {statsType.campaigns_stats} title ={'Campaigns Stats Graph Timeline'}/>
                <LineChart data={data} statsType = {statsType.ads_stats} title ={'Ads Stats Graph Timeline'}/>
                <LineChart data={data} statsType = {statsType.adsets_stats} title ={'Adsets Stats Graph Timeline'}/>
            </div>
        </div>
    )
}

export default Home

