import React from 'react'

const outerContainerStyle = {
  border: '1px solid blue',
}

interface DisplayProps {
  dataPosition: number
  listId: string
  field: string
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onDragStart: (e: any) => void
}

const Display = (props: DisplayProps): JSX.Element => {
  return (
    <div
      draggable="true"
      data-position={props.dataPosition}
      onDragStart={props.onDragStart}
      data-list-id={props.listId}
      style={outerContainerStyle}
    >
      {props.field}
      <button aria-label="close" onClick={props.onClose}>
        &times;
      </button>
    </div>
  )
}

export default Display
