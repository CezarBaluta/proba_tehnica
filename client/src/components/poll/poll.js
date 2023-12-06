import React, { useState } from 'react';

import './poll.css'; 


const Poll = ({ title, votingType, options, votes, usersVoted }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option,votingType) => {
    if(votingType === 'single'){
      setSelectedOptions([option])
    }
    else{
      if (selectedOptions.includes(option)) {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.filter((selectedOption) => selectedOption !== option)
        );
      } else {
        setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, option]);
      }
    }
  };

  const handleVote = () => {

    console.log(`Voted for: ${selectedOptions}`);
  };

  return (
      <div className="poll-container"> 
      <h3 className="poll-title">{title}</h3>
      <p>Make a choice</p>

      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type={votingType === 'single' ? 'radio' : 'checkbox'}
                name="pollOption"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option,votingType)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      
      <button onClick={handleVote}>Vote</button>

     

    </div>
  );
};

export default Poll;