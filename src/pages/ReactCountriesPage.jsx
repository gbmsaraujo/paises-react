import React, { useState } from 'react';
import Countries from '../components/Countries';
import Country from '../components/Country';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleCountryFilterChange = newCountryFilter => {
    setCountryFilter(newCountryFilter);
  };

  const countryFilterLowercase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowercase.length >= 3
      ? allCountries.filter(({ name }) => {
          return name.common
            .toLocaleLowerCase()
            .includes(countryFilter.toLocaleLowerCase());
        })
      : allCountries;

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];
    let indexId = newVisitedCountries.indexOf(countryId);

    indexId !== -1
      ? newVisitedCountries.splice(countryId, 1)
      : newVisitedCountries.push(countryId);

    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <Header>React-Countries</Header>
      <Main>
        <TextInput
          labelDescription="Informe o Nome do País (Pelo menos 3 caracteres):"
          inputValue={countryFilter}
          autoFocusr
          id="inputCountryFilter"
          onInputChange={handleCountryFilterChange}
        />

        <Countries>
          {filteredCountries.length > 1 ? (
            <h2 className=" text-center font-semibold text-xl">
              {filteredCountries.length} países
            </h2>
          ) : (
            <h2 className=" text-center font-semibold text-xl">
              {filteredCountries.length} país
            </h2>
          )}

          {visitedCountries.length > 1 ? (
            <h3 className=" text-center font-semibold text-md">
              {visitedCountries.length} países visitados
            </h3>
          ) : (
            <h3 className=" text-center font-semibold text-md">
              {visitedCountries.length} país visitado
            </h3>
          )}

          {filteredCountries.map(country => {
            return (
              <Country
                visitedCountries={visitedCountries}
                onCountryClick={toggleVisitedCountry}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </div>
  );
};

export default ReactCountriesPage;
