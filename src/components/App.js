import React from 'react';
import Basic from './steps/Basic.js';
import Contacts from './steps/Contacts.js';
import Button from '../components/Button.js';
import Avatar from '../components/steps/Avatar.js';
import Finish from '../components/steps/Finish.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: 'disabled',
      stap: 0,
      nameStap: '',
      steps: [
        {
          id: 0,
          name: 'Basic',
          isActive: true,
          isCompleted: false,
        },
        {
          id: 1,
          name: 'Contacts',
          isActive: false,
          isCompleted: false,
        },
        {
          id: 2,
          name: 'Avatar',
          isActive: false,
          isCompleted: false,
        },
        {
          id: 3,
          name: 'Finish',
          isActive: false,
          isCompleted: false,
        },
      ],
      values: {
        firstname: '',
        lastname: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: '',
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        gender: false,
        email: false,
        mobile: false,
        country: false,
        city: false,
        avatar: false,
      },
    };
  }

  validate = (state, stap) => {
    const { values } = state;
    const errors = {};

    console.log(stap);
    if (stap === 0) {
      if (!values.firstname) {
        errors.firstname = 'Required';
      } else if (values.firstname.length < 5) {
        errors.firstname = 'Must be 5 characters or more';
      }

      if (!values.lastname) {
        errors.lastname = 'Required';
      } else if (values.lastname.length < 5) {
        errors.lastname = 'Must be 5 characters or more';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password !== values.repeatPassword) {
        errors.repeatPassword = 'Must be equal password';
      }
    }
    if (stap === 1) {
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (
        !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(
          values.mobile,
        )
      ) {
        errors.mobile = 'Invalid mobile';
      }
      if (!values.city) {
        errors.city = 'Required';
      }
    }

    if (stap === 2) {
      if (!values.avatar) {
        errors.avatar = 'Required';
      } else {
        this.setState({
          errors: {},
        });
      }
    }
    return errors;
  };

  onChange = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value,
    };

    this.setState(prevState => ({
      ...prevState,
      values: newValues,
    }));
  };

  incrementStap = e => {
    const errors = this.validate(this.state, this.state.stap);

    console.log(this.state.values);

    if (Object.keys(errors).length === 0) {
      if (e.target.className === 'btn btn-secondary') {
        this.setState((prevState, prevProps) => ({
          stap: prevState.stap + 1,
          disabled: 'enable',
        }));

        const newSteps = [...this.state.steps];

        if (this.state.stap === newSteps[this.state.stap].id) {
          console.log(this.state.stap);
          const newActiveSteps = this.state.stap + 1;
          newSteps[this.state.stap].isActive = false;
          newSteps[newActiveSteps].isActive = true;
          newSteps[this.state.stap].isCompleted = true;
          this.setState({
            steps: newSteps,
          });
        } else {
          newSteps[this.state.stap].isActive = '';
          newSteps[this.state.stap].isCompleted = '';
          this.setState({
            steps: newSteps,
          });
        }
      } else {
        this.setState((prevState, prevProps) => ({
          stap: prevState.stap - 1,
        }));


        if (this.state.stap === 1) {
          this.setState({
            disabled: 'disabled',
          });
        }


        const newSteps = [...this.state.steps];

        const newActiveSteps = this.state.stap - 1;
        newSteps[this.state.stap].isActive = false;
        newSteps[newActiveSteps].isActive = true;
        newSteps[this.state.stap].isCompleted = false;
        this.setState({
          steps: newSteps,
        });
      }
    } else {
      this.setState({
        errors,
      });
    }
  };

  getClass = index => {
    if (this.state.steps.isActive === true) {
      return 'is-active';
    }
    if (this.state.steps[index].isActive === true) {
      return 'is-active';
    }
    if (this.state.steps[index].isCompleted === true) {
      return 'is-completed';
    }
  };

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      const newValues = {
        ...this.state.values,
        avatar: event.target.result,
      };

      this.setState({
        values: newValues,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="steps mb-4">
            {this.state.steps.map((step, index) => (
              <div key={step.id} className={`step ${this.getClass(index)}`}>
                <div className="step__marker">{index + 1}</div>
                <div className="step__title mt-1">{step.name}</div>
              </div>
            ))}
          </div>

          {this.state.stap === 0 && (
            <Basic value={this.state} onChange={this.onChange} />
          )}
          {this.state.stap === 1 && (
            <Contacts value={this.state} onChange={this.onChange} />
          )}
          {this.state.stap === 2 && (
            <Avatar value={this.state} onChangeAvatar={this.onChangeAvatar} />
          )}
          {this.state.stap === 3 && (
            <Finish value={this.state} onChange={this.onChange} />
          )}

          <Button
            state={this.state}
            incrementStap={this.incrementStap}
            disabled={this.state.disabled}
            onSubmit={this.onSubmit}
            id="stap"
          />
        </form>
      </div>
    );
  }
}
