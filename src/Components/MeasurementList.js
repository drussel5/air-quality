export const MeasurementList = (props) => {
    const { measurements } = props;

    return (
        measurements && measurements[0].measurements.map(measurement => {
            return (
                <li key={measurement.parameter}>
                    {measurement.parameter}
                    {measurement.value}
                    {measurement.unit}
                </li>
            );
        })
    );
};