import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import ApproveCard from './ApproveCard'
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <CommentDetail author="Tom" content={faker.lorem.sentence()} date="Today at 5:00PM" avatar={faker.image.image()} />
      </ApproveCard>
      <CommentDetail author="Sally" content={faker.lorem.sentence()} date="Today at 7:00PM" avatar={faker.image.image()} />
      <CommentDetail author="Akira" content={faker.lorem.sentence()} date="Today at 9:00PM" avatar={faker.image.image()} />
      <CommentDetail author="John" content={faker.lorem.sentence()} date="Today at 11:00PM" avatar={faker.image.image()} />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));