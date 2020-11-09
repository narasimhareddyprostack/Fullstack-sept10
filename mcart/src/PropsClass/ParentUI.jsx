import React, { Component } from 'react'
import ChildUI from './ChildUI'
class ParentUI extends Component {
    assets = '100CR'
    render() {
        return (
            <div>
                <ChildUI assets={this.assets}/>
            </div>
        )
    }
}

export default ParentUI
