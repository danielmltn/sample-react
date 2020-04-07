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

const EditorContainer = (): JSX.Element => {
  const [displayFields, setDisplayFields] = useState<DisplayField[]>([])
  const [properties] = useState(['string', 'number', 'compound'])

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

  return (
    <div>
      <div style={fieldStyle}>
        {displayFields.map(field => (
          <Display
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
