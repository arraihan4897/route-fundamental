import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Counmtries = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h2>ALL COUNTRIES : {countries.length}</h2>
            {
                countries.map(country=><li key={country.cca3}><Link to={`/country/${country.name.common}`}>{country.name.common}</Link> </li>)
            }
            
        </div>
    );
};

export default Counmtries;