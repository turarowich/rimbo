import { AdvertismentChart, AudienceCharts, BarChart, Companies, Header, TrafficTable } from 'components'

export const OverviewPage = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <Header />
      <Companies title='Overview' />
      <TrafficTable />
      <AdvertismentChart />
      <BarChart />
      <AudienceCharts />
    </div>
  )
}
