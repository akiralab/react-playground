import React, { useState } from 'react';

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end javascript framework.'
//     },
//     {
//         title: 'What is React Native?',
//         content: 'React Native is a cross-platform javascript framework.'
//     },
//     {
//         title: 'What is Flutter?',
//         content: 'Flutter is a cross-platform Dart framework.'
//     }
// ]

const Accordion = ({ items }) => {
 const [activeIndex, setActiveIndex] = useState(null);
 const onTitleClick = (index) => {
  setActiveIndex(index);
  console.log('Title clicked', index);
 };

 const renderedItems = items.map((item, index) => {
  const active = index === activeIndex ? 'active' : '';
  return (
   <React.Fragment key={item.title}>
    <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
     <i className="dropdown icon"></i>
     {item.title}
    </div>
    <div className={`content ${active}`}>
     <p>{item.content}</p>
    </div>
   </React.Fragment>
  );
 });

 return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
