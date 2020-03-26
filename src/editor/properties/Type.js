import React from 'react'
import styles from './styles'

const style = {
  marginLeft: '50%',
}

class Type extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const name = e.target.innerText
    this.props.onClick(name)
  }

  render() {
    return (
      <div style={style}>
        <button onClick={this.handleClick}>{this.props.field}</button>
      </div>
    )
  }
}

export default Type
