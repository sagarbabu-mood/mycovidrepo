import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchItem = props => {
  const {stateDetails} = props
  const {stateName, stateCode} = stateDetails
  return (
    <>
      <li className="search-item">
        <Link className="state-link" to={`/state/${stateCode}`}>
          <p className="search-item-state-name">{stateName}</p>
          <div className="state-code-container">
            <p className="search-item-code">{stateCode}</p>
            <BiChevronRightSquare color="#facc15" size={20} />
          </div>
        </Link>
      </li>
      <hr className="search-item-break" />
    </>
  )
}

export default SearchItem
