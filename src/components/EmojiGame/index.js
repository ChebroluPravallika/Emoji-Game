/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

let scoresList = [0]
class EmojiGame extends Component {
  state = {
    selectedList: [],
    score: 0,
    isCorrect: true,
  }

  CheckEmoji = id => {
    const {selectedList, score} = this.state
    console.log(selectedList === [])
    console.log(selectedList.includes(id))
    if (selectedList === [] || !selectedList.includes(id)) {
      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        isCorrect: false,
      })
      scoresList = [...scoresList, score]
    }
  }

  playAgain = () => {
    this.setState({
      selectedList: [],
      score: 0,
      isCorrect: true,
    })
  }

  render() {
    const {emojisList} = this.props
    const {isCorrect, score} = this.state
    emojisList.sort(() => Math.random() - 0.5)
    const TopScore = Math.max(...scoresList)
    console.log(scoresList)
    if (isCorrect === true && score === 12) {
      this.setState({isCorrect: false})
      scoresList = [...scoresList, score]
    }
    return (
      <div className="backGroundContainer">
        <div>
          <NavBar score={score} TopScore={TopScore} />
        </div>

        {isCorrect && (
          <ul className="emojis-list-container">
            {emojisList.map(eachItem => (
              <EmojiCard
                eachItem={eachItem}
                CheckEmoji={this.CheckEmoji}
                key={eachItem.id}
              />
            ))}
          </ul>
        )}

        {!isCorrect && (
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <WinOrLoseCard score={score} playAgain={this.playAgain} key={0} />
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
