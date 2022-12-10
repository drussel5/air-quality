import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react';
import { CityDropdown } from './Components/CityDropdown';
import { useCitiesList } from './Hooks/useCitiesList';
import { MeasurementList } from './Components/MeasurementList';

function App() {
    const [city, setCity] = useState('');
    const [measurements, setMeasurements] = useState([])
    const cities = useCitiesList();

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
       
    }, [city])

    return (
        <>
            <div className="App">
                Air Quality
            </div>
            <div>
                <CityDropdown city={city} setCity={setCity} cities={cities} />
                ---{city}---
                <MeasurementList measurements={measurements} />
            </div>
        </>
    );
}

export default App;
