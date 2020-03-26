import React from 'react'

const style = {
  marginLeft: '50%',
}

interface TypeProps {
  field: string
  onClick: (name: string) => void
}

class Type extends React.Component<TypeProps, {}> {
  constructor(
    props: Readonly<{field: string; onClick: (name: string) => void}>,
  ) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e: any) {
    const name = e.currentTarget.innerHTML
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
