import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
    render () {
        return (
            <div>
                {this.props.bands.map(band => <Band band={band} key={band.name} delete={this.props.delete}/>)}
            </div>
        )
    }
}

export default Bands