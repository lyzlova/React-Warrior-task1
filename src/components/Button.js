import React from 'react';

const Button = (props) => {
  const { state, incrementStap } = props;
  
  return (
    <div className="d-flex justify-content-center">
      {state.stap <= 2 && (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-light mr-4"
            disabled={state.disabled === 'disabled'}
            onClick={incrementStap}>
            Previous
          </button>
          <button type="button" 
          className="btn btn-secondary" 
          onClick={incrementStap}>
            Next
          </button>
        </React.Fragment>
      )}
      {state.stap === 3 && (
        <button type="button" className="btn btn-primary"
        onClick={() => {
          window.location.reload();
        }}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Button;
