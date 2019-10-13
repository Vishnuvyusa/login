import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandlar(){
        console.log("Class button has clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandlar}> Class Button Clicked</button>
            </div>
        )
    }
}

export default ClassClick
