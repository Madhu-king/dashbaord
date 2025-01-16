import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
  }

  componentDidMount() {
    this.getClickedData()
  }

  latestFormat = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfMatch: data.man_of_the_match,
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    secondInnings: data.second_innings,
    venue: data.venue,
  })

  recentMatchformat = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfMatch: data.man_of_the_match,
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    secondInnings: data.second_innings,
    venue: data.venue,
  })

  getClickedData = async () => {
    const url = 'https://apis.ccbp.in/ipl/'
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${url}${id}`)
    const data = await response.json()

    const formated = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.latestFormat(data.latest_match_details),
    }

    this.setState({teamData: formated})
  }

  render() {
    const {teamData} = this.state
    const {latestMatchDetails, teamBannerUrl} = teamData
    
    console.log(latestMatchDetails)

    return (
      <div className="teammatch-container">
        <div className="inner-container">
          <img src={teamBannerUrl} className="image-size" />
        </div>
        <div>
          <LatestMatch details={latestMatchDetails} />
          <MatchCard />
        </div>
      </div>
    )
  }
}

export default TeamMatches
