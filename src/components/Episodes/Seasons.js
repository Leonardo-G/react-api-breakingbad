import React from 'react'
import { Link } from 'react-router-dom'

export const Seasons = () => {
    return (
        <div className="container">
            <div className="seasons">
                <div className="seasons__show">
                    <div className="season">
                        <img src="./assets/Temporada_1.png" alt="Season 1"/>
                        <Link 
                            to="/episodios/season/1"
                            className="btn btn--season"
                        >See info</Link>
                    </div>
                </div>
                <div className="seasons__show">
                    <div className="season">
                        <img src="./assets/Temporada_2.png" alt="Season 1"/>
                        <Link 
                            to="/episodios/season/2"
                            className="btn btn--season"
                        >See info</Link>
                    </div>
                </div>
                <div className="seasons__show">
                    <div className="season">
                        <img src="./assets/Temporada-3.jpg" alt="Season 1"/>
                        <Link
                            to="/episodios/season/3" 
                            className="btn btn--season"
                        >See info</Link>
                    </div>
                </div>
                <div className="seasons__show">
                    <div className="season">
                        <img src="./assets/Temporada-4.jpg" alt="Season 1"/>
                        <Link 
                            to="/episodios/season/4"
                            className="btn btn--season"
                        >See info</Link>
                    </div>
                </div>
                <div className="seasons__show">
                    <div className="season">
                        <img src="./assets/Temporada-5.jpg" alt="Season 1"/>
                        <Link 
                            to="/episodios/season/5"
                            className="btn btn--season"
                        >See info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
