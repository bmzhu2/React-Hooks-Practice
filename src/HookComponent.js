import React, { useState, useEffect } from 'react';

function HookComponent() {
  const [name, setName] = useState("");
  const [restricted, setRestricted] = useState(['voldemort', 'moriarty', 'maleficent', 'palpatine'])


  useEffect(() => {
    if (!name) {
      document.title = 'Name Check';
    } else if (restricted.includes(name.toLowerCase())) {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'red';
      document.title = 'ACCESS DENIED';
    } else {
      document.title = name;
      document.getElementsByClassName('form')[0].style.backgroundColor = 'white';
    }
  })

  return (
    <section className='form'>
      <header>Checking: {name}</header>
      <label>Please provide your name
          <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
    </section>
  )
}

export default HookComponent;