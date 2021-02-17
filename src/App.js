import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';
const HEX_VIOLET = '#8777b8';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [amountOfShades, setAmountOfShades] = useState(10);
  const [list, setList] = useState(new Values(HEX_VIOLET).all(amountOfShades));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let newValue = parseInt(amountOfShades);
      if (amountOfShades <= 0) {
        newValue = 1;
      }
      let colors = new Values(color).all(newValue);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            className={`${error ? 'error' : null}`}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#8777b8'
          />
          <input
            type='number'
            onChange={(e) => setAmountOfShades(e.target.value)}
            placeholder='Example: 10'
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      ;
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
