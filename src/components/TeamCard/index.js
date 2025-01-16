// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, imageUrl, id} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img src={imageUrl} className="img-size" />
        <p className="heading-cont">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
