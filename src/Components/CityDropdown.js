import { Dropdown } from 'semantic-ui-react';

export const CityDropdown = (props) => {
    const {city, setCity, cities} = props;

    return (
        <Dropdown
            placeholder='Select City'
            fluid
            search
            selection
            value={city}
            onChange={
                (e, data) => { setCity(data.value); }
            }
            options={
                cities?.map(city => {
                    return ({
                        key: city.city + city.country,
                        text: city.city + ', ' + city.country,
                        value: city.city,
                    })
                })
            }
        />
    );
};