import React from 'react'
import { useApi } from '../../hooks/useApi'

export const QuoteRandom = () => {

    const [consultApi, seActiveEvent] = useApi("https://breakingbadapi.com/api/quote/random");


    const handleSearchQuote = () => {
        seActiveEvent( activeEvent => activeEvent + 1);
        console.log("Buscando");
        console.log(consultApi);
    }

    
    const { quote, author } = consultApi[0] || []

    return (
        <div className="quoteRandom container">
            <div className={consultApi.length === 0 ? "quoteRandom__info quoteRandom__info--false" : "quoteRandom__info quoteRandom__info--true"}>
                {
                    consultApi.length === 0
                    ?   <p>Search quote random</p>
                    :   (
                            <>
                                <p className="quote">"{ quote }"</p>
                                <p className="author">author : { author }</p>
                            </>
                        )
                }
            </div>
            <button 
                className="btn btn--quoteRandom"
                onClick={ handleSearchQuote }
            >Quote Random</button>
        </div>
    )
}
