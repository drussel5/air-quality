import { useState, useEffect } from "react";

export const useCitiesList = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch('https://api.openaq.org/v2/cities?limit=1000')
            .then((response) => response.json())
            .then((data) => {
                setCities(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    return cities;
}