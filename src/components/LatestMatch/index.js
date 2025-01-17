import './index.css'

const LatestMatch = props => {
  const {details = {}} = props
  const {
    result,
    umpires,
    manOfTheMatch,
    id,
    competingTeam,
    date,
    competingTeamLogo,
    firstInnings,
    matchStatus,
    venue,
    secondInnings,
    manOfMatch,
  } = details

  return (
    <div className="final">
      <p className="heading-1">LatestMatch</p>
      <div className="LatestMatch-container">
        <div className="card-container">
          <div className="text-container">
            <p className="color">{result}</p>
            <p className="color">{date}</p>
            <p className="color">{venue}</p>
            <p className="color">{result}</p>
          </div>
          <div className="image-container">
            <img src={competingTeamLogo} className="size" />
          </div>
          <div className="container-text-end">
            <p className="color-1">FirstInnings</p>
            <p className="color">{firstInnings}</p>
            <p className="color-1">SecondInnings</p>
            <p className="color">{secondInnings}</p>
            <p className="color-1">manOfTheMatch</p>
            <p className="color">{manOfTheMatch}</p>
            <p className="color">{manOfMatch}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
