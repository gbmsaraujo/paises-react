import Item from './Item';

const Country = ({
  children: country,
  onCountryClick = null,
  visitedCountries = [],
}) => {
  if (!country) {
    return <div>Impossível renderizar o País</div>;
  }

  const demographicDensity = country.population / country.area;
  const { flags, name, capital, region, population, area } = country;

  const isVisitedClassName = () => {
    let indexId = visitedCountries.indexOf(country.id);

    if (indexId !== -1) {
      return 'bg-green-100';
    } else {
      return '';
    }
  };

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  }
  return (
    <div
      className={`border-2 border-gray-500 p-2 m-2 flex flex-row flex-wrap items-center justify-center space-x-20 cursor-pointer ${isVisitedClassName()}`}
      onClick={handleCountryClick}
      key={country.id}
    >
      <img src={flags.svg} alt={country.name} className="w-64" />

      <ul>
        <li>
          <Item label="País:">{name.common} </Item>
        </li>
        <li>
          <Item label="Capital:"> {capital} </Item>{' '}
        </li>
        <li>
          <Item label="Região:"> {region} </Item>
        </li>
        <li>
          <Item label="População:"> {population} </Item>
        </li>
        <li>
          <Item label="Área:"> {area} </Item>
        </li>
        <li>
          <Item label="Densidade Demográfica:"> {demographicDensity} </Item>
        </li>
      </ul>
    </div>
  );
};

export default Country;
