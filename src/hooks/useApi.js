import { useEffect, useRef, useState } from "react"

export const useApi = (url) => {

    const ref = useRef(false)
    const [activeEvent, seActiveEvent] = useState(0)
    const [state, setState] = useState([])
 

    useEffect( () => {

        if(!ref.current){
            ref.current = true;
            console.log(ref)
        }else{
            fetch(url, {
                method: "GET"
            })
                .then(resp => resp.json())
                .then(resul => {
                    setState([...resul])
                })
        }

    }, [url, activeEvent])

    return [state, seActiveEvent];
}