import React from 'react';

const Basic = props => {
  const { value, onChange } = props;

  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          placeholder="Enter firstname"
          name="firstname"
          value={value.values.firstname}
          onChange={onChange}
        />
        {value.errors.firstname && (
          <div className="invalid-feedback">{value.errors.firstname}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          placeholder="Enter lastname"
          name="lastname"
          value={value.values.lastname}
          onChange={onChange}
        />
        {value.errors.lastname && (
          <div className="invalid-feedback">{value.errors.lastname}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="form-control"
          id="password"
          placeholder="Enter password"
          name="password"
          value={value.values.password}
          onChange={onChange}
        />
        {value.errors.password && (
          <div className="invalid-feedback">{value.errors.password}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="repeatPassword">Repeat password</label>
        <input
          type="text"
          className="form-control"
          id="repeatPassword"
          placeholder="Enter repeatPassword"
          name="repeatPassword"
          value={value.values.repeatPassword}
          onChange={onChange}
        />
        {value.errors.repeatPassword && (
          <div className="invalid-feedback">{value.errors.repeatPassword}</div>
        )}
      </div>

      <fieldset className="form-check">
        <div>Gender</div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={onChange}
            checked={value.values.gender === 'male'}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            id="female"
            value="female"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </React.Fragment>
  );
};

export default Basic;
