import './index.css'

const HomeStateWiseData = props => {
  const {stateData} = props
  // console.log(stateData)
  const {
    stateName,
    confirmed,
    active,
    recovered,
    deceased,
    population,
  } = stateData
  return (
    <li className="home-covid-data-table-item">
      <p className="covid-data-table-item name">{stateName}</p>
      <p className="covid-data-table-item">{confirmed}</p>
      <p className="covid-data-table-item">{active}</p>
      <p className="covid-data-table-item">{recovered}</p>
      <p className="covid-data-table-item">{deceased}</p>
      <p className="covid-data-table-item">{population}</p>
    </li>
  )
}

export default HomeStateWiseData
