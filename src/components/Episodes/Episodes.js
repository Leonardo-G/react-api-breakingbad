import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Episode } from './Episode';

export const Episodes = () => {
    
    const { id } = useParams();
    const [episodes, setEpisodes] = useState([])

    const consultApi = () => {
        fetch(`https://breakingbadapi.com/api/episodes?episode=${parseInt(id)}`)
            .then(resp => resp.json())
            .then(result => {
                const season = result.filter( s => s.season === id).filter(s => s.series === "Breaking Bad")
                setEpisodes(season)})
    }

    useEffect(() => {
        consultApi();
        //eslint-disable-next-line
    },[]);

    console.log(episodes)

    return (
        <div className="container">
            <h1 className="titleSeason">Season { id }, Episodes : { episodes.length }</h1>
            <div className="gridEpisodes">
                {
                    episodes.map(episode => (
                        <Episode key={ episode.episode_id } { ...episode }/>
                    ))
                }
            </div>
        </div>
    )
}
