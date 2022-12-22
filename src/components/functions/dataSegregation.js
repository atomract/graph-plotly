export const dataSegregation = (data, statsType) => {
  let plotData = []
  let dates = []
  let id = []
  let updatedOn = []
  let spend = []
  let reach = []
  let clicks = []
  let impressions = []  
  // console.log(data)
  if(statsType === 'campaigns_stats') {
    data[0].facebook_ads_insights.stats.map(e => {
      dates.push(e.date)
      spend.push(e.campaigns_stats.total_spend)
      impressions.push(e.campaigns_stats.total_impressions)
      reach.push(e.campaigns_stats.total_reach)
      clicks.push(e.campaigns_stats.total_clicks)
      id.push(e.account_id)
      updatedOn.push(e.date)
    })
  }
  else if(statsType === 'adsets_stats'){
    data[0].facebook_ads_insights.stats.map(e => {
      dates.push(e.date)
      spend.push(e.adsets_stats.total_spend)
      impressions.push(e.adsets_stats.total_impressions)
      reach.push(e.adsets_stats.total_reach)
      clicks.push(e.adsets_stats.total_clicks)        
      id.push(e.account_id)
      updatedOn.push(e.date)
    })
  }
  else {
    data[0].facebook_ads_insights.stats.map(e => {
      dates.push(e.date)
      spend.push(e.ads_stats.total_spend)
      impressions.push(e.ads_stats.total_impressions)
      reach.push(e.ads_stats.total_reach)
      clicks.push(e.ads_stats.total_clicks)
      id.push(e.account_id)
      updatedOn.push(e.date)
    })
  }
  plotData.dates = dates;
  plotData.spend = spend;
  plotData.reach = reach;
  plotData.impressions = impressions;
  plotData.clicks = clicks;
  plotData.updatedOn = updatedOn;
  plotData.id= id;
  return plotData

} 

export const tableDataSegregation = (data, statsType, platformType) => {
  let plotData = []
    data[0].facebook_ads_insights.data.map(e => {
      // console.log(e)
      if(statsType === 'campaigns_stats') {
          e.campaigns.map(e2 => {
            if(platformType === 'Facebook'){
                plotData.push({
                  updatedOn: e2?.facebook?.date_stop,
                  spend : e2?.facebook?.spend,
                  impressions : e2?.facebook?.impressions,
                  reach : e2?.facebook?.reach,
                  clicks : e2?.facebook?.clicks,
                  name : e2?.facebook?.account_name
                })
            }
            else if(platformType === 'Instagram'){
              plotData.push({
                updatedOn: e2?.instagram?.date_stop,
                spend : e2?.instagram?.spend,
                impressions : e2?.instagram?.impressions,
                reach : e2?.instagram?.reach,
                clicks : e2?.instagram?.clicks,
                name : e2?.instagram?.account_name
              })
            }
            else if(platformType === 'Messenger'){
              plotData.push({
                updatedOn: e2?.messenger?.date_stop,
                spend : e2?.messenger?.spend,
                impressions : e2?.messenger?.impressions,
                reach : e2?.messenger?.reach,
                clicks : e2?.messenger?.clicks,
                name : e2?.messenger?.account_name
              })
            }
            else if(platformType === 'Audience Network'){
              plotData.push({
                updatedOn: e2?.audience_network?.date_stop,
                spend : e2?.audience_network?.spend,
                impressions : e2?.audience_network?.impressions,
                reach : e2?.audience_network?.reach,
                clicks : e2?.audience_network?.clicks,
                name : e2?.audience_network?.account_name
              })
            }
            else {
              plotData.push({
                updatedOn: e2?.summary?.date_stop,
                spend : e2?.summary?.spend,
                impressions : e2?.summary?.impressions,
                reach : e2?.summary?.reach,
                clicks : e2?.summary?.clicks,
                name : e2?.summary?.account_name
              })
              // console.log(e2.summary);
            }
            
          })
      }
      else if(statsType === 'adsets_stats') {
        e.adsets.map(e2 => {
          if(platformType === 'Facebook'){
              plotData.push({
                updatedOn: e2?.facebook?.date_stop,
                spend : e2?.facebook?.spend,
                impressions : e2?.facebook?.impressions,
                reach : e2?.facebook?.reach,
                clicks : e2?.facebook?.clicks,
                name : e2?.facebook?.account_name
              })
          }
          else if(platformType === 'Instagram'){
            plotData.push({
              updatedOn: e2?.instagram?.date_stop,
              spend : e2?.instagram?.spend,
              impressions : e2?.instagram?.impressions,
              reach : e2?.instagram?.reach,
              clicks : e2?.instagram?.clicks,
              name : e2?.instagram?.account_name
            })
          }
          else if(platformType === 'Messenger'){
            plotData.push({
              updatedOn: e2?.messenger?.date_stop,
              spend : e2?.messenger?.spend,
              impressions : e2?.messenger?.impressions,
              reach : e2?.messenger?.reach,
              clicks : e2?.messenger?.clicks,
              name : e2?.messenger?.account_name
            })
          }
          else if(platformType === 'Audience Network'){
            plotData.push({
              updatedOn: e2?.audience_network?.date_stop,
              spend : e2?.audience_network?.spend,
              impressions : e2?.audience_network?.impressions,
              reach : e2?.audience_network?.reach,
              clicks : e2?.audience_network?.clicks,
              name : e2?.audience_network?.account_name
            })
          }
          else {
            plotData.push({
              updatedOn: e2?.summary?.date_stop,
              spend : e2?.summary?.spend,
              impressions : e2?.summary?.impressions,
              reach : e2?.summary?.reach,
              clicks : e2?.summary?.clicks,
              name : e2?.summary?.account_name
            })
            // console.log(e2.summary);
          }
          
        })
    }
    else {
      e.ads.map(e2 => {
        if(platformType === 'Facebook'){
            plotData.push({
              updatedOn: e2?.facebook?.date_stop,
              spend : e2?.facebook?.spend,
              impressions : e2?.facebook?.impressions,
              reach : e2?.facebook?.reach,
              clicks : e2?.facebook?.clicks,
              name : e2?.facebook?.account_name
            })
        }
        else if(platformType === 'Instagram'){
          plotData.push({
            updatedOn: e2?.instagram?.date_stop,
            spend : e2?.instagram?.spend,
            impressions : e2?.instagram?.impressions,
            reach : e2?.instagram?.reach,
            clicks : e2?.instagram?.clicks,
            name : e2?.instagram?.account_name
          })
        }
        else if(platformType === 'Messenger'){
          plotData.push({
            updatedOn: e2?.messenger?.date_stop,
            spend : e2?.messenger?.spend,
            impressions : e2?.messenger?.impressions,
            reach : e2?.messenger?.reach,
            clicks : e2?.messenger?.clicks,
            name : e2?.messenger?.account_name
          })
        }
        else if(platformType === 'Audience Network'){
          plotData.push({
            updatedOn: e2?.audience_network?.date_stop,
            spend : e2?.audience_network?.spend,
            impressions : e2?.audience_network?.impressions,
            reach : e2?.audience_network?.reach,
            clicks : e2?.audience_network?.clicks,
            name : e2?.audience_network?.account_name
          })
        }
        else {
          plotData.push({
            updatedOn: e2?.summary?.date_stop,
            spend : e2?.summary?.spend,
            impressions : e2?.summary?.impressions,
            reach : e2?.summary?.reach,
            clicks : e2?.summary?.clicks,
            name : e2?.summary?.account_name
          })
          // console.log(e2.summary);
        }
        
      })
  }
    })
  return plotData

} 