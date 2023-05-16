import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    return (
        <div>
            <img src={country.flags.png}  />
            <h1>name : {country.name.common}</h1>
            <h3>Capital: {country.capital}</h3>
            <h3>Population: {country.population}</h3>

            amar nam raihan bin solasoioman          
        </div>
    );
};

export default Country;