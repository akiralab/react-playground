import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import ApproveCard from './ApproveCard'
import CommentDetail from './CommentDetail';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <CommentDetail author="うさぎ丸" content="まりちゃん大好き" date="Today at 5:00PM" avatar="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=768:*" />
      </ApproveCard>
      <ApproveCard>
        <CommentDetail author="ネズミ丸" content="まりちゃん大好き" date="Today at 5:00PM" avatar="https://www.interdependenceday.net/wp-content/uploads/2017/12/afd25f4138e42591d819ebbbf4e4a371_s-e1528703923909.jpg" />
      </ApproveCard>
      <CommentDetail author="Akira" content={faker.lorem.sentence()} date="Today at 9:00PM" avatar={faker.image.image()} />
      <CommentDetail author="Mari" content={faker.lorem.sentence()} date="Today at 11:00PM" avatar={faker.image.image()} />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));