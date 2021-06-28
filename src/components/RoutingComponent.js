import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from '../App'
import Details from './Details'

const RoutingComponent = () => {
    return (
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/Details/:id' component={Details} render={(props) => (
    <Details id={props.match.params.id} /> )} />
            
        </Switch>
    )
}

export default RoutingComponent
