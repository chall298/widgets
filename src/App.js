import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
// hey this is a test
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript frame work'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use react?',
        content: 'You use React by creating components'
    }
];

export default () => {
    return  (
    <div>
        {/* <Accordion items={items} /> */}
        <Search />
    </div>
    );
};