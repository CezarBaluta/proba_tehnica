import React from 'react';
import Poll from '../poll/poll';


const pollData = {
    title: 'Favorite Color',
    votingType: 'single',
    options: ['Red', 'Blue', 'Green'],
    votes: [0, 0, 0],
    usersVoted: [],
  };



const Content = () => {
  return (
    <div>
      <Poll {...pollData}/>
    </div>
  );
};

export default Content;