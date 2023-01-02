import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { dataSegregation, tableDataSegregation } from '../functions/dataSegregation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Card, CardActions } from "@mui/material";
import GreyContainer from '../UI/greyContainer';
import ButtonGreen from '../UI/buttonGreen';
import Table from '../UI/table';
import data from '../data';

export const LineChart = (data, title, socialType, axisX, axisY, plotConfig) => {

  const [adsType, setAdsType] = useState()
  const [platformType, setPlatformType] = useState()

  useEffect(() => {
    setAdsType(data.statsType)
    setPlatformType(data.socialType)
    // console.log(data.socialType)
  },[data.statsType, data.socialType])


    return (
      <div className='shadow-cyan-500/50'>
        <div>
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                  <b>
                  {data.title}
                  </b>
              </AccordionSummary>
              {console.log(data.plotConfig)}
              <Card>
                <CardActions>

                    <Plot
                    data={[
                      data.plotConfig.map((e) => {
                        return {
                          type: e.type,
                          x: dataSegregation(data.data, adsType, platformType)[eval(e.x)],
                          y: dataSegregation(data.data, adsType, platformType)[e.y],
                          name: e.name,
                          marker: {
                            color: e.color
                          },
                        }
                      })
                    ]}
                    config={{responsive: true, staticPlot: true}}
                    layout={ {width: 1240, height: 500, title: data.title, xaxis: {title: "Date"}, yaxis: {title: "Count"}, yaxis2: {title: "Spends",overlaying: "y",side: "right"},  showlegend: true,
                    
                    legend: {
                      x: 1,
                      xanchor: 'left',
                      y: 2
                    }} }
                  />
                </CardActions>
                <Table rows={["Account Name", "UPDATED ON", "IMPRESSIONS", "reach", "clicks", "spends"]} plotData={tableDataSegregation(data.data, adsType, platformType)}/>
              </Card>
          </Accordion>
        </div>
      </div>
    )
}