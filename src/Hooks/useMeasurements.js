import { useEffect } from 'react';

export const useMeasurements = (props) => {
    const {city, setMeasurements} = props;
    
    useEffect(() => {
        if (city) {
            const url = `https://api.openaq.org/v2/latest?city=${city}`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setMeasurements(data.results);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
       
    }, [city, setMeasurements]);
}

