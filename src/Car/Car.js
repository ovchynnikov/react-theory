import React from 'react';

export default props => (

    <div style={{
        border: '1px solid #ccc',
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '24%',
        marginRight: '24%',
        width: '50%',
        display: 'block',
        

    }}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      { props.children }
      <input type="text" onChange={props.onChangeName} value={props.name}></input>
      <button onClick={props.onDelete}>Delete car</button>
    </div>
  )