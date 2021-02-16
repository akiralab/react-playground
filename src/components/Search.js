import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const [ term, setTerm ] = useState('');

  useEffect(() => {
    // const search = async () => {
    //   await axios.get('jgijijia')
    // }

    axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        actions: 'query',
        list: 'search',
        origin:'*',
        format: 'json',
        srsearch: term
      }
    })
      .then((response) => {
        console.log(response.data);
      });
  }, [term])

  return (
    <div>
      <div className="ui form">
        <div className="field">
                <label>Enter Search Term</label> 
          <input className="input"
            value={term}
            onChange={(e)=>setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
};

export default Search;