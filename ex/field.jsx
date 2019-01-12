import React, { Component } from 'react';

class field extends Component{
    constructor(props){
        super(props)

        this.state ={ value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return(
            <div>
                <label>{this.state.value}</label>
                <br />
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}

export default field;