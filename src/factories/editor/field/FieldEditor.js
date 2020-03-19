import React from 'react';
import styles from './styles'
import PropertyEditor from '../properties/PropertyEditor'

const editorStyle = {
    backgroundColor: styles.backgroundColor,
    height: 100
}

class FieldEditor extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = {
            message: 'my data'
        }
    }

    onChange(name) {
        this.setState({ message: name})
    }

    render() {
        return (
        <div style={editorStyle}>
            hello {this.state.message} <PropertyEditor onChange={this.onChange} />
        </div>
        )
    }
}

export default FieldEditor