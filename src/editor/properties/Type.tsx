import React from 'react'

const style = {
  marginLeft: '50%',
}

interface TypeProps {
  field: string
  onClick: (name: string) => void
}

const Type = (props: TypeProps): JSX.Element => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string,
  ): void => {
    props.onClick(name)
  }

  return (
    <div style={style}>
      <label htmlFor={props.field}>{props.field}</label>
      <div id={props.field}>
        <button onClick={(e): void => handleClick(e, props.field)}>Add</button>
      </div>
    </div>
  )
}

export default Type
