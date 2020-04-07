import React from 'react'

const style = {
  marginLeft: '50%',
}

interface DisplayProps {
  listId: string
  field: string
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Display = (props: DisplayProps): JSX.Element => {
  return (
    <div data-list-id={props.listId} style={style}>
      {props.field}
      <button aria-label="close" onClick={props.onClose}>
        &times;
      </button>
    </div>
  )
}

export default Display
