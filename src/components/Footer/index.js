import React from 'react'
import { Footer } from 'react-materialize'

class Foot extends React.Component {
  render() {
    return (
      <Footer copyrights="Designed with React"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="https://github.com/Tittoh">&copy; Tittoh</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://www.cryptocompare.com/">Crypto Compare</a></li>
            <li><a className="grey-text text-lighten-3" href="https://min-api.cryptocompare.com/">Crypto Compare API</a></li>
            <li><a className="grey-text text-lighten-3" href="https://min-api.cryptocompare.com/documentation">Crypto Compare Documentation</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Another link</a></li>
          </ul>
        }
        className='example blue-grey darken-4'
      >
          <h5 className="white-text">Crypto Market</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footer>
    )
  }
}
export default Foot;