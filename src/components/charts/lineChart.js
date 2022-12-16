import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { dataSegregation } from '../functions/dataSegregation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Card, CardActions } from "@mui/material";

export const LineChart = (data, statsType, title) => {


    return (
      <div style={{boxShadow: '2px 2px 9px #d8f9ff'}}>
        {console.log(data)}
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
                layout={ {width: 1240, height: 500, title: data.title, xaxis: {title: "Date"}, yaxis: {title: "Count"}, yaxis2: {title: "Spends",overlaying: "y",side: "right"}, } }
              />
            </CardActions>
          </Card>
       </Accordion>
      </div>
    )
}