

import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        /** 1st approch */
        this.inputText = React.createRef() 
        
        /** @nd approch */
        this.cbRefs =null
        this.setCbRefs = (element) =>{
            this.cbRefs = element
        }
    }
    componentDidMount(){
        //this.inputText.current.focus()
        this.cbRefs.focus()
        console.log(' this.ref.cbRefs ', this.cbRefs.value)
        console.log(' this.ref.inputText ', this.inputText)
    }
    clickHandler=()=>{
        alert(this.cbRefs.value)
        alert(this.inputText.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputText}/>
                <input type="text" ref={this.setCbRefs}/>
                <button onClick={this.clickHandler}> Click</button>
            </div>
        )
    }
}

export default RefsDemo
