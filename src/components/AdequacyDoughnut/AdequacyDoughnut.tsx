import { Chart, ChartData, ChartTooltipItem } from 'chart.js'
import 'chart.piecelabel.js'
import { representativePointsFromServiceAreas } from '../../utils/data'
import { round, size } from 'lodash'
import * as React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { StoreProps, withStore } from '../../services/store'
import { totalPopulation } from '../../utils/analytics'
import { lazy } from '../../utils/lazy'
import { StatsBox } from '../StatsBox/StatsBox'

type Props = StoreProps & {
  serviceAreas: string[]
}

/**
 * Use circular legend patches instead of the default rectangles.
 *
 * TODO: Fix typings upstream in DefinitelyTyped/chart.js
 */
(Chart as any).defaults.global.legend.labels.usePointStyle = true

export let AdequacyDoughnut = withStore('adequacies')<Props>(({ serviceAreas, store }) => {

  let adequacies = store.get('adequacies')
  let rpsInServiceAreas = representativePointsFromServiceAreas(serviceAreas, store)
  let adequateRpsInServiceAreas = rpsInServiceAreas.filter(_ => adequacies[_.id] && adequacies[_.id].isAdequate)
  let inAdequateRpsInServiceAreas = rpsInServiceAreas.filter(_ => adequacies[_.id] && !adequacies[_.id].isAdequate)

  let numAdequate = totalPopulation(lazy(adequateRpsInServiceAreas))
  let numInadequate = totalPopulation(lazy(inAdequateRpsInServiceAreas))
  let populationInServiceArea = totalPopulation(rpsInServiceAreas)

  let percentAdequate = round(100 * numAdequate / populationInServiceArea)
  let percentInadequate = 100 - percentAdequate

  let numAdequateRp = adequateRpsInServiceAreas.length
  let numInadequateRp = size(rpsInServiceAreas) - numAdequateRp
  let percentAdequateRp = round(100 * numAdequateRp / size(rpsInServiceAreas))
  let percentInadequateRp = 100 - percentAdequateRp

  return <div className='AdequacyDoughnut'>
    <Doughnut
      data={{
        labels: ['Adequate', 'Inadequate'],
        datasets: [{
          data: [percentAdequateRp, percentInadequateRp],
          backgroundColor: ['#3F51B5', 'rgba(214, 40, 41, 0.87)']
        }]
      }}
      options={{
        legend: {
          fullWidth: false,
          position: 'right'
        },
        // @see https://github.com/emn178/Chart.PieceLabel.js
        pieceLabel: {
          fontColor: '#333',
          position: 'outside'
        },
        tooltips: {
          callbacks: {
            label: label(numAdequateRp, numInadequateRp)
          }
        }
      } as any}
    />
    <StatsBox withBorders>
      <tr>
        <th>Adequate access Rps</th>
        <th>Inadequate access Rps</th>
      </tr>
      <tr>
        <td>{numAdequateRp.toLocaleString()} ({percentAdequateRp}%)</td>
        <td>{numInadequateRp.toLocaleString()} ({percentInadequateRp}%)</td>
      </tr>
      <tr>
        <th>Adequate access</th>
        <th>Inadequate access</th>
      </tr>
      <tr>
        <td>{numAdequate.toLocaleString()} ({percentAdequate}%)</td>
        <td>{numInadequate.toLocaleString()} ({percentInadequate}%)</td>
      </tr>
    </StatsBox>
  </div>
})

function label(withAccess: number, withoutAccess: number) {
  return (tooltipItem?: ChartTooltipItem, data?: ChartData) => {
    if (!tooltipItem || !data || !data.datasets) {
      return ''
    }
    switch (tooltipItem.index) {
      case 0: return ` With access: ${withAccess.toLocaleString()} (${data.datasets[0].data![0]}%)`
      case 1: return ` Without access: ${withoutAccess.toLocaleString()} (${data.datasets[0].data![1]}%)`
    }
  }
}
