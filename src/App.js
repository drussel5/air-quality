import 'semantic-ui-css/semantic.min.css'
import { centerStyle, dropdownStyle } from './styles.js'
import { useState } from 'react';
import { CityDropdown } from './Components/CityDropdown';
import { useCitiesList } from './Hooks/useCitiesList';
import { MeasurementList } from './Components/MeasurementList';
import { useMeasurements } from './Hooks/useMeasurements.js';

function App() {
    const [cityA, setCityA] = useState('');
    const [cityB, setCityB] = useState('');
    const [measurementsA, setMeasurementsA] = useState([])
    const [measurementsB, setMeasurementsB] = useState([])
    const cities = useCitiesList();

    useMeasurements(cityA, setMeasurementsA);
    useMeasurements(cityB, setMeasurementsB);

    // useEffect(() => {
    //     if (cityA) {
    //         const url = `https://api.openaq.org/v2/latest?city=${cityA}`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setMeasurementsA(data.results);
    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //             })
    //     }
       
    // }, [cityA])

    // useEffect(() => {
    //     if (cityB) {
    //         const url = `https://api.openaq.org/v2/latest?city=${cityB}`
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setMeasurementsB(data.results);
    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //             })
    //     }
       
    // }, [cityB])

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
