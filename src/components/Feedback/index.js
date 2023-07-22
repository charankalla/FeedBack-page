// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'
import ThankYouCard from '../ThankYouCard'

class Feedback extends Component {
  state = {pressed: false}

  onClicked = () => {
    this.setState(prevState => ({
      pressed: !prevState.pressed,
    }))
  }

  render() {
    const {pressed} = this.state
    console.log(pressed)

    const {resources} = this.props
    return (
      <div className="container">
        <div className="card-container">
          {!pressed ? (
            <>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-container">
                {resources.emojis.map(each => (
                  <Emoji
                    key={each.id}
                    eachItem={each}
                    clicked={this.onClicked}
                  />
                ))}
              </ul>
            </>
          ) : (
            <ThankYouCard />
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
