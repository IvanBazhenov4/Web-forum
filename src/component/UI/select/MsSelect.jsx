import React from 'react';

const MySelect = ({option, defaultStatus, value, onChange}) => {
    return (
        <select
            onChange={event => onChange(event.target.value)}
            value={value}
        >
            <option disabled value="">{defaultStatus}</option>
            {option.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;