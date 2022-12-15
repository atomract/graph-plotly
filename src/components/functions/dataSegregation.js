export const dataSegregation = (data, statsType) => {
    let plotData = []
    let dates = []
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
      })
    }
    else if(statsType === 'adsets_stats'){
      data[0].facebook_ads_insights.stats.map(e => {
        dates.push(e.date)
        spend.push(e.adsets_stats.total_spend)
        impressions.push(e.adsets_stats.total_impressions)
        reach.push(e.adsets_stats.total_reach)
        clicks.push(e.adsets_stats.total_clicks)
      })
    }
    else {
      data[0].facebook_ads_insights.stats.map(e => {
        dates.push(e.date)
        spend.push(e.ads_stats.total_spend)
        impressions.push(e.ads_stats.total_impressions)
        reach.push(e.ads_stats.total_reach)
        clicks.push(e.ads_stats.total_clicks)
      })
    }
    plotData['dates'] = dates;
    plotData['spend'] = spend;
    plotData['reach'] = reach;
    plotData['impressions'] = impressions;
    plotData['clicks'] = clicks;
    return plotData

  } 