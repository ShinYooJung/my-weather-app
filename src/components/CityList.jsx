import {Link} from "react-router-dom";

function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h1>CityList</h1>

      <ul className="cities">
        {cities.map((item, index) => {
          return <li key={index}>
              <Link to={item+'/'}>{item}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
