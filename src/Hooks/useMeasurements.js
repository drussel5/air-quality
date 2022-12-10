import { useEffect } from 'react';

export const useMeasurements = (props) => {
    // empty and need to have values
    const {city, setMeasurements} = props;
    // debugger;
    useEffect(() => {
        if (city) {
            const url = `https://api.openaq.org/v2/latest?city=${city}`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    // debugger;
                    setMeasurements(data.results);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
       
    }, [city, setMeasurements]);
}

