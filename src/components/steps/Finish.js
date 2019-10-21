import React from 'react';

export default class Finish extends React.Component {
  render() {
    const {value} = this.props;
    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img className="mb-4" width="100%" src={value.values.avatar} alt=""></img>
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>{value.values.firstname} {value.values.lastname}</h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email: </strong>
              {value.values.email}
            </p>
            <p>
              <strong>Mobile: </strong>
              {value.values.mobile}
            </p>
            <p>
              <strong>Location: </strong>
              {value.values.country}, {value.values.city}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
