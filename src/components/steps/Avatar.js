import React from 'react';
import imagesAvatar from '../../img/imagesAvatar.png';

export default class Avatar extends React.Component {
  render() {
    const {value, onChangeAvatar} = this.props;
    return (
      <div className="form-group">
        <img
          className="mb-4"
          width="100%"
          src={value.values.avatar || imagesAvatar}
          alt=""></img>
        <div className="mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="avatar"
              name="avatar"
              onChange={onChangeAvatar}
              ></input>
            <label htmlFor="avatar" className="custom-file-label">
              Choose avatar
            </label>
          </div>
        </div>
      </div>
    );
  }
}
