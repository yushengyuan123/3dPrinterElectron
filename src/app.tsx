import React, { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import line from './pages/antv'
import Picker from './pages/less'

function render() {
    return ReactDOM.render(<App></App>, document.getElementById('app'))
}




function App(){
    return (
        <div>
            <div id='container'></div>

            <Picker></Picker>
        </div>
    )
}

render()