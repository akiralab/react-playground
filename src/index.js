import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import ApproveCard from './ApproveCard'
import CommentDetail from './CommentDetail';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Init Component
  constructor(props) {
    super(props);


    this.state = { lat: null, errorMessage: '' }; // we don't know the value yet
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState = ({ lat: position.coords.latitude });
        console.log(position);
      },
      err => {
        this.setState ({errorMessage: err.message });
        console.log(err)
      }
    );
  }

  // React says we have to define render!!
  render() {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <div>Loading...</div>
    }

    else {
      return (
          <div className="ui container comments">
            <div>
              Latitude: { this.state.lat } <br></br>
              Error: { this.state.errorMessage }
            </div>

            <ApproveCard>
              <CommentDetail author="うさぎ" content="ぴょんぴょん" date="Today at 5:00PM" avatar="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=768:*" />
            </ApproveCard>
            <ApproveCard>
              <CommentDetail author="ねずみ" content="ちゅんちゅん" date="Today at 5:00PM" avatar="https://www.interdependenceday.net/wp-content/uploads/2017/12/afd25f4138e42591d819ebbbf4e4a371_s-e1528703923909.jpg" />
            </ApproveCard>
            <ApproveCard>
              <CommentDetail author="さる" content="キーキー" date="Today at 9:00PM" avatar="https://previews.123rf.com/images/yupiramos/yupiramos1707/yupiramos170726256/82984869-cute-bird-drawing-icon-vector-illustration-design.jpg" />
            </ApproveCard>
            <ApproveCard>
              <CommentDetail author="とり" content="ぱたぱた" date="Today at 11:00PM" avatar={faker.image.image()} />
            </ApproveCard>
          </div> 
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));