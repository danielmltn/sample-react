import React from 'react'

class PropertyEditor extends React.Component{

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.value
        this.props.onChange(name)
    }

    render() {
        return (
            <input alt='fill out your name' onChange={this.handleChange} />
        )
    }

}

export default PropertyEditor