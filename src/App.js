import React from 'react'
import Accordion from './components/Accordion'


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework.'
    },
    {
        title: 'What is React Native?',
        content: 'React Native is a cross-platform javascript framework.'
    },
    {
        title: 'What is Flutter?',
        content: 'Flutter is a cross-platform Dart framework.'
    }    
]


export default () => {
    return <Accordion items={items}/>;
}