// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, CheckEmoji} = props
  const {emojiUrl, id} = eachItem
  const onClickEmoji = () => {
    CheckEmoji(id)
  }
  return (
    <li style={{width: '25%', listStyle: 'none'}}>
      <button
        type="button"
        onClick={onClickEmoji}
        className="EmojiCard"
        style={{backgroundColor: '#ffffff33'}}
      >
        <img src={emojiUrl} alt="emojiName" className="EmojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
