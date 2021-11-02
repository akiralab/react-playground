import React from 'react';

const CommentDetail = (props) => {
 return (
  <div className="comment">
   <a href="/" className="avatar">
    <img alt="avatar" src={props.avatar} width="50" />
   </a>
   <div className="content">
    <a href="/" className="author">
     {props.author}
    </a>
    <div className="metadata">
     <span className="date">{props.date}</span>
    </div>
    <div className="text">{props.content}</div>
   </div>
  </div>
 );
};
export default CommentDetail;

// {/* <ApproveCard>
// <CommentDetail author="うさぎ" content="ぴょんぴょん" date="Today at 5:00PM" avatar="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=768:*" />
// </ApproveCard>
// <ApproveCard>
// <CommentDetail author="ねずみ" content="ちゅんちゅん" date="Today at 5:00PM" avatar="https://www.interdependenceday.net/wp-content/uploads/2017/12/afd25f4138e42591d819ebbbf4e4a371_s-e1528703923909.jpg" />
// </ApproveCard>
// <ApproveCard>
// <CommentDetail author="さる" content="キーキー" date="Today at 9:00PM" avatar="https://previews.123rf.com/images/yupiramos/yupiramos1707/yupiramos170726256/82984869-cute-bird-drawing-icon-vector-illustration-design.jpg" />
// </ApproveCard>
// <ApproveCard>
// <CommentDetail author="とり" content="ぱたぱた" date="Today at 11:00PM" avatar={faker.image.image()} />
// </ApproveCard> */}
