import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardList: [],
  }

  componentDidMount() {
    this.gettingdata()
  }

  gettingdata = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: formattedData})
  }

  render() {
    const {teamCardList} = this.state
    return (
      <div className="bg-container">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="logo-cricket"
          />
          <h1 className="heading">IPL DASHBOARD</h1>
        </div>
        <ul className="unorder-container">
          {teamCardList.map(each => (
            <TeamCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
