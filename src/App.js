import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'

const options = [
    {
      label: 'The color is Red',
      value: 'red'
    },
    {
      label: 'The color is Blue',
      value: 'blue'
    },
    {
      label: 'The color is Yellow',
      value: 'yellow'
    },
  ];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return(
    <div>
        <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options} />
    </div>
    );
};