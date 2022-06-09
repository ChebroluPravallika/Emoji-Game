import './index.css'

const NavBar = props => {
  const {score, TopScore} = props
  return (
    <div>
      <nav style={{backgroundColor: '  #ffffff33', color: 'white'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div className="navHeading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1 className="heading">Emoji Game</h1>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            <p style={{marginRight: '10px'}} className="score">
              Score: {score}
            </p>
            <p style={{marginRight: '10px'}} className="score">
              Top Score: {TopScore}
            </p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
