import React, { useState } from 'react';
import Letter from '../components/Letter';

const Home = () => {
  const [password, setPassword] = useState('');
  const [showLetter, setShowLetter] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Simple password for demonstration purposes
    const correctPassword = 'password123';

    if (password === correctPassword) {
      setShowLetter(true);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  return (
    <div>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      {showLetter && <Letter />}
    </div>
  );
};

export default Home;
