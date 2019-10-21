import React from 'react';
import countries from '../../date/countries.js';
import cities from '../../date/cities.js';

export default class Contacts extends React.Component {
  getCountry = items => {
    return items.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  getCitiesItems = country => {
    const citiesList = [];
    for (let key in cities) {
      if (cities[key].country === Number(country)) {
        citiesList.push({
          id: key,
          name: cities[key].name,
        });
      }
    }
    return citiesList;
  };

  render() {
    const { value, onChange } = this.props;
    const citiesList = this.getCitiesItems(value.values.country);
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={value.values.email}
            onChange={onChange}
          />
          {value.errors.email && (
            <div className="invalid-feedback">{value.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile"
            name="mobile"
            value={value.values.mobile}
            onChange={onChange}
          />
          {value.errors.mobile && (
            <div className="invalid-feedback">{value.errors.mobile}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="form-control"
            id="country"
            name="country"
            value={value.values.country}
            onChange={onChange}>
            {this.getCountry(countries)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            name="city"
            value={value.values.city}
            onChange={onChange}>
            <option value="">Select city</option>
            {value.values.country === 1 &&
              citiesList.map(city => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            {value.values.country !== 1 &&
              citiesList.map(city => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}
