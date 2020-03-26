import React from 'react'

const style = {
  marginLeft: '50%',
}

class Display extends React.Component<{field: string}, {}> {
  close(e: any) {
    const target = e.currentTarget.parentElement
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
