import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      onClick={copyToClipboard}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
