import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Cast } from '../components/Cast';
import { Episodes } from '../components/Episodes/Seasons';
import { Season } from '../components/Episodes/Episodes';
import { Quotes } from '../components/quotes/Quotes';
import { EpisodesRouter } from './EpisodesRouter';

export const AppRouter = () => {
    return (
        <Router>
        <div>
            <nav className="nav">
                <div className="nav__links">
                    <Link className="enlace" to="/">Inicio</Link>
                    <Link className="enlace" to="/frases">Frases</Link>
                    <Link className="enlace" to="/episodios">Episodios</Link>
                </div>
            </nav>

            <Switch>
                <Route exact path="/frases" component={ Quotes }/>
                <Route path="/episodios" component={ EpisodesRouter }/>
                {/* <Route exact path="/episodios/season1" component={Season}/> */}
                <Route exact path="/" component={ Cast }/>
            </Switch>
        </div>
        </Router>
    )
}
