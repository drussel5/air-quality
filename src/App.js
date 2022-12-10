import 'semantic-ui-css/semantic.min.css'
import { useState, useEffect } from 'react';
import { CityDropdown } from './Components/CityDropdown';
import { useCitiesList } from './Hooks/useCitiesList';
import { MeasurementList } from './Components/MeasurementList';

function App() {
    const [cityA, setCityA] = useState('');
    const [cityB, setCityB] = useState('');
    const [measurementsA, setMeasurementsA] = useState([])
    const [measurementsB, setMeasurementsB] = useState([])
    const cities = useCitiesList();

    const centerStyle = {
        margin: 'auto',
        width: '50%',
        padding: '10px',
        textAlign: 'center',
    };

    const dropdownStyle = {
        float: 'left',
        margin: 'auto',
        width: '50%',
    };

    useEffect(() => {
        if (cityA) {
            const url = `https://api.openaq.org/v2/latest?city=${cityA}`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setMeasurementsA(data.results);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
       
    }, [cityA])

    useEffect(() => {
        if (cityB) {
            const url = `https://api.openaq.org/v2/latest?city=${cityB}`
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setMeasurementsB(data.results);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
       
    }, [cityB])

    return (
        <>
            <h1 className="App" style={centerStyle}>
                Air Quality
            </h1>
            <div style={dropdownStyle}>
                <CityDropdown city={cityA} setCity={setCityA} cities={cities} />
                <MeasurementList measurements={measurementsA} />
            </div>
            <div style={dropdownStyle}>
                <CityDropdown city={cityB} setCity={setCityB} cities={cities} />
                <MeasurementList measurements={measurementsB} />
            </div>
        </>
    );
}

export default App;
