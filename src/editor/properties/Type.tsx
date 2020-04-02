import React from 'react'
import Attribute from './Attributes'

const style = {
  marginLeft: '50%',
}

interface TypeProps {
  field: string
  onClick: (name: string) => void
}

const Type = (props: TypeProps): JSX.Element => {
  const handleClick = (e: any): void => {
    const name = e.currentTarget.innerHTML
    props.onClick(name)
  }

  return (
    <div style={style}>
      <button onClick={handleClick}>{props.field}</button>
      <Attribute />
    </div>
  )
}

export default Type
