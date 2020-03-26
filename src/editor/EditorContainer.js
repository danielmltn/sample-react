import React from 'react'
import Display from './field/Display'
import Type from './properties/Type'
import styles from './styles'

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

//hardcoded fields for now
const fields = ['string', 'number', 'compound']

class EditorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      name: '',
      message: 'my data',
      fields: [],
      properties: this.placeProperties(),
    }
  }

  placeProperties() {
    let x = []
    fields.forEach((field, id) => {
      x.push(<Type key={id} field={field} onClick={this.onClick} />)
    })
    return x
  }

  onClick(fieldName) {
    let currentFields = this.state.fields
    const newField = (
      <Display key={currentFields.length + 1} field={fieldName} />
    )

    currentFields.push(newField)
    this.setState({
      fields: currentFields,
    })
  }

  onChange(name) {
    this.setState({message: name})
  }

  render() {
    return (
      <div>
        <div style={fieldStyle}>{this.state.fields}</div>

        <div style={propertyStyle}>{this.state.properties}</div>
      </div>
    )
  }
}

export default EditorContainer
