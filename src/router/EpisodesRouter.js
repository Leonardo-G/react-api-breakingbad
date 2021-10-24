import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Seasons } from '../components/Episodes/Seasons'
import { Episodes } from '../components/Episodes/Episodes'

export const EpisodesRouter = () => {
    return (
        <Switch>
            <Route exact path="/episodios" component={ Seasons }/>
            <Route exact path="/episodios/season/:id" component={ Episodes }/>

            <Redirect to="/"/>
        </Switch>
    )
}
