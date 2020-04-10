import React, {useState} from 'react'
import Display from './field/Display'
import Type from './properties/Type'
import styles from './styles'
import {Guid} from 'guid-typescript'

const fieldStyle = {
  width: styles.width,
  height: styles.height,
  backgroundColor: styles.backgroundColor,
  position: styles.position,
  float: styles.float,
}

const propertyStyle = {
  width: styles.width,
  height: styles.height,
  backgroundColor: '#f9c69a',
  position: styles.position,
  float: styles.float,
}

interface DisplayField {
  id: string
  name: string
}

const initialDnDState = {
  draggedFrom: 0,
  draggedTo: 0,
  isDragging: false,
  originalOrder: Array<DisplayField>(),
  updatedOrder: Array<DisplayField>(),
}

const EditorContainer = (): JSX.Element => {
  const [displayFields, setDisplayFields] = useState<DisplayField[]>([])
  const [properties] = useState(['string', 'number', 'compound'])

  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState)
  // const [list, setList] = React.useState([])

  const onClose = (e: any): void => {
    const elementToRemove = e.currentTarget.parentElement.getAttribute(
      'data-list-id',
    )
    setDisplayFields([...displayFields.filter(f => f.id !== elementToRemove)])
  }
  const onClick = (fieldName: string): void => {
    setDisplayFields(displayFields => [
      ...displayFields,
      {id: Guid.create().toString(), name: fieldName},
    ])
  }

  const onDrop = () => {
    // we use the updater function
    // for the "list" hook
    setDisplayFields(dragAndDrop.updatedOrder)

    // and reset the state of
    // the DnD
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: 0,
      draggedTo: 0,
      isDragging: false,
    })
  }

  const onDragStart = (event: {
    currentTarget: {dataset: {position: any}}
    dataTransfer: {setData: (arg0: string, arg1: string) => void}
  }): void => {
    // We'll access the "data-position" attribute
    // of the current element dragged
    const initialPosition = Number(event.currentTarget.dataset.position)

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: displayFields,
    })

    event.dataTransfer.setData('text/html', '')
  }

  const onDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()

    // Store the content of the original list
    // in this variable that we'll update
    let newList = dragAndDrop.originalOrder

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom

    // index of the drop area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position)

    // get the element that's at the position of "draggedFrom"
    const itemDragged = newList[draggedFrom]

    // filter out the item being dragged
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom,
    )

    // update the list
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ]

    // since this event fires many times
    // we check if the targets are actually
    // different:
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,

        // save the updated list state
        // we will render this onDrop
        updatedOrder: newList,
        draggedTo: draggedTo,
      })
    }
  }

  return (
    <div>
      <div style={fieldStyle} onDrop={onDrop} onDragOver={onDragOver}>
        {displayFields.map((field, index) => (
          <Display
            dataPosition={index}
            onDragStart={onDragStart}
            listId={field.id}
            key={field.id}
            field={field.name}
            onClose={onClose}
          />
        ))}
      </div>
      <div style={propertyStyle}>
        {properties.map((field, id) => (
          <Type key={id} field={field} onClick={onClick} />
        ))}
      </div>
    </div>
  )
}

export default EditorContainer
