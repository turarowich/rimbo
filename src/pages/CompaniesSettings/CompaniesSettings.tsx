import { Companies, CompaniesTables, Header } from 'components'

export const CompaniesSettingsPage = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <Header />
      <Companies title='Companies Settings' />
      <CompaniesTables />
    </div>
  )
}
