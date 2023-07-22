import './index.css'

const Emoji = props => {
  const {eachItem, clicked} = props
  const {name, imageUrl} = eachItem
  const onclicked = () => {
    clicked()
  }
  return (
    <li className="emoji-text-container">
      <img className="emoji" alt={name} src={imageUrl} onClick={onclicked} />
      <p>{name}</p>
    </li>
  )
}
export default Emoji
