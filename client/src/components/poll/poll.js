import React, { useState } from 'react';

import './poll.css'; 


const Poll = ({ id, title, votingType, options, votes, usersVoted }) => {
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

  const handleVote = async (id) => {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`http://localhost:5000/vote/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ "selectedOption":selectedOptions}),
        });

        if (response.ok) {
        const data = await response.json();
        console.log('Data from server:', data);
        } else {
        console.error('Failed to post data to the server');
        }
    } catch (error) {
        console.error('Error posting data:', error);
    }
    
    console.log(`Voted for: ${id}`);
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
                name="{`pollOption-${title}-${index}`}"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option,votingType)}
              />
              {"    "+option }
              {///AM ADAUGAT CARACTERE INVIZIBILE
              }
            </label>
          </li>
        ))}
      </ul>
      
      <button onClick={() => handleVote(id)}>Vote</button>

     

    </div>
  );
};

export default Poll;