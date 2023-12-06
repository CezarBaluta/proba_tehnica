import React from 'react';
import Poll from '../poll/poll';
import './content.css';

const pollData = [{
    title: 'Favorite Color',
    votingType: 'single',
    options: ['Red', 'Blue', 'Green'],
    votes: [0, 0, 0],
    usersVoted: [],
  },
  {  title: 'Favorite Color',
    votingType: 'single',
    options: ['Red', 'Blue', 'Green'],
    votes: [0, 0, 0],
    usersVoted: [],
  },
  {  
    title: 'Favorite Color',
    votingType: 'single',
    options: ['Red', 'Blue', 'Green'],
    votes: [0, 0, 0],
    usersVoted: [],
  }
];



const Content = () => {
  return (
    <div>
      {
      pollData.map((poll, index) => {
        if (index%2==0 && index+1 < pollData.length) {
          return (
            <div class="rowPoll" key={index}>
              <div class="colPoll">
                <Poll {...poll} />
              </div>
              <div class="colPoll">
                <Poll {...pollData[index+1]} />
              </div>

            </div>
          );
        }
        else if(index%2==0){
          return (
            <div class="rowPoll" key={index}>
            <div class="colPoll">
              <Poll {...poll} />
            </div>
          </div>
          );
      }
      })}

    </div>
  );
  
};

export default Content;