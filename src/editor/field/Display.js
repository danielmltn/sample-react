import React from 'react'
import styles from './styles'

const style = {
  marginLeft: '50%',
}

class Display extends React.Component {
  close(e) {
    const target = e.target.parentElement
    target.remove()
  }

  render() {
    return (
      <div style={style}>
        {this.props.field}
        <button aria-label="close" onClick={this.close}>
          &times;
        </button>
      </div>
    )
  }
}

export default Display
