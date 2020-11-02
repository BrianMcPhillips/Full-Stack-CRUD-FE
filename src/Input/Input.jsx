import React from 'react';
import PropTypes from 'prop-types';

const formInput = ({ 
  model, 
  brand, 
  pattern, 
  microphoneType, 
  price, 
  summary, 
  onChange,
  onSubmit }) => {
  return ( 
    <>
      <form onSubmit={onSubmit} >
        <label htmlFor="model">
          <h3>Model</h3>
          <input 
            id="model"
            type="text"
            value= {model}
            onChange= {onChange}
          />
        </label>
        <label htmlFor="brand">
          <h3>Brand</h3>
          <input 
            id="brand"
            type="text"
            value= {brand}
            onChange= {onChange}
          />
        </label>
        <label htmlFor="pattern">
          <h3>Pattern</h3>
          <input 
            id="pattern"
            type="text"
            value= {pattern}
            onChange= {onChange}
          />
        </label>
        <label htmlFor="microphone-type">
          <h3>Microphone Type</h3>
          <input 
            id="microphone-type"
            type="text"
            value= {microphoneType}
            onChange= {onChange}
          />
        </label>
        <label htmlFor="price">
          <h3>Price</h3>
          <input 
            id="price"
            type="text"
            value= {price}
            onChange= {onChange}
          />
        </label>
        <label htmlFor="summary">
          <h3>Summary</h3>
          <textarea 
            id="summary"
            type="text"
            value= {summary}
            onChange= {onChange}
          />
        </label>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
};

formInput.propTypes = {
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  microphoneType: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
};

export default formInput;

