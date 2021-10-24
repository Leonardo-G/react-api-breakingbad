import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Cast } from '../components/Cast';
import { Quotes } from '../components/quotes/Quotes';

export const AppRouter = () => {
    return (
        <Router>
        <div>
            <nav className="nav">
                <div className="nav__links">
                    <Link className="enlace" to="/">Inicio</Link>
                    <Link className="enlace" to="/frases">Frases</Link>
                    <Link className="enlace" to="/personajes">Personajes</Link>
                    <Link className="enlace" to="/episodios">Episodios</Link>
                </div>
            </nav>

            <Switch>
                <Route path="/frases" component={ Quotes }/>
                <Route path="/personajes"/>
                <Route path="/episodios"/>
                <Route path="/" component={ Cast }/>
            </Switch>
        </div>
        </Router>
    )
}
