import { useCitiesList } from "../Hooks/useCitiesList";

export const cityList = (cities) => {
    return (
        cities.map(city => {
            return ({
                key: city.city + city.country,
                text: city.city + ', ' + city.country,
                value: city.city + ', ' + city.country,
            })
        })
    )
}