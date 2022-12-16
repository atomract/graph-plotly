import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { dataSegregation } from '../functions/dataSegregation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Card, CardActions } from "@mui/material";
import GreyContainer from '../UI/greyContainer';
import ButtonGreen from '../UI/buttonGreen';
import Table from '../UI/table';
import data from '../data';

export const LineChart = (data, statsType, title) => {


    return (
      <div className='shadow-cyan-500/50'>
        <GreyContainer classNames="mt-6" bgColor="bg-slate-100">
          <div className='flex flex-row justify-start content-evenly'>
            <ButtonGreen txtColor="text-white" btnColor="bg-violet-500" className="ml-6" text="All"/>
            <ButtonGreen txtColor="text-black" btnColor="bg-slate-50" text="Facebook"/>
            <ButtonGreen txtColor="text-black" btnColor="bg-slate-50" text="Instagram"/>
            <ButtonGreen txtColor="text-black" btnColor="bg-slate-50" text="Messanger"/>
            <ButtonGreen txtColor="text-black" btnColor="bg-slate-50" text="Audience Network"/>
          </div>
        </GreyContainer>
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
              <Card>
                <CardActions>

                    <Plot
                    data={[
                      {
                        x: dataSegregation(data.data, data.statsType)['dates'],
                        y: dataSegregation(data.data, data.statsType)['spend'],
                        name: 'Spend'
                      },
                      {
                        x: dataSegregation(data.data, data.statsType)['dates'],
                        y: dataSegregation(data.data, data.statsType)['spend'],
                        yaxis: 'y2'
                      },
                      {
                        type: 'bar',
                        x: dataSegregation(data.data, data.statsType)['dates'],
                        y: dataSegregation(data.data, data.statsType)['impressions'],
                        name: 'Impressions',
                        marker: {
                          color: 'd8f9ff'
                        }
                      },
                      {
                        type: 'bar',
                        x: dataSegregation(data.data, data.statsType)['dates'],
                        y: dataSegregation(data.data, data.statsType)['reach'],
                        name: 'Reach',
                        marker: {
                          color: '00a6ab'
                        }
                      },
                      {
                        type: 'bar',
                        x: dataSegregation(data.data, data.statsType)['dates'],
                        y: dataSegregation(data.data, data.statsType)['clicks'],
                        name: 'Clicks',
                        marker: {
                          color: '000080'
                        }
                      }
                    ]}
                    config={{responsive: true}}
                    layout={ {width: 1240, height: 500, title: data.title, xaxis: {title: "Date"}, yaxis: {title: "Count"}, yaxis2: {title: "Spends",overlaying: "y",side: "right"},  showlegend: true,
                    
                    legend: {
                      x: 1,
                      xanchor: 'left',
                      y: -10
                    }} }
                  />
                </CardActions>
                <Table plotData={dataSegregation(data.data, data.statsType)}/>
              </Card>
          </Accordion>
        </div>
      </div>
    )
}