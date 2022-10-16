import React, { useEffect, useState } from "react";

function App() {
    const [dogPic, setDogPic] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((resp) => resp.json())
            .then((data) => {
                setDogPic(data.message)
                setIsLoaded(true)
            })
    }, [])

    if (!dogPic) {
        return <p>Loading...</p>
    }

    return (
        <img alt="A Random Dog" src={dogPic}></img>
    )
}

export default App