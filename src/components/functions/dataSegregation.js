export const dataSegregation = (data, statsType) => {
    let plotData = []
    let dates = []
    let id = []
    let updatedOn = []
    let spend = []
    let reach = []
    let clicks = []
    let impressions = []  
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

  export const tableDataSegregation = (data, statsType) => {
    let plotData = []
    if(statsType === 'campaigns_stats') {
      data[0].facebook_ads_insights.stats.map(e => {
        plotData.push({
          updatedOn: e.date,
          spend : e.campaigns_stats.total_spend,
          impressions : e.campaigns_stats.total_impressions,
          reach : e.campaigns_stats.total_reach,
          clicks : e.campaigns_stats.total_clicks,
          id : e.account_id
        })
      })
    }
    else if(statsType === 'adsets_stats'){
      data[0].facebook_ads_insights.stats.map(e => {
        plotData.push({
          updatedOn: e.date,
          spend : e.adsets_stats.total_spend,
          impressions : e.adsets_stats.total_impressions,
          reach : e.adsets_stats.total_reach,
          clicks : e.adsets_stats.total_clicks,
          id : e.account_id
        })
      })
    }
    else {
      data[0].facebook_ads_insights.stats.map(e => {
        plotData.push({
          updatedOn: e.date,
          spend : e.adsets_stats.total_spend,
          impressions : e.adsets_stats.total_impressions,
          reach : e.adsets_stats.total_reach,
          clicks : e.adsets_stats.total_clicks,
          id : e.account_id
        })
      })
    }
    return plotData

  } 