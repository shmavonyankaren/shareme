import React from 'react';
import { useState, useEffect } from 'react';
import MasonryLayout  from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';


const Search = ({searchTerm}) => {
  const [pins, setPins] = useState(null);
  const [loaging, setLoaging] = useState(false);

  useEffect(() =>{
    if(searchTerm) {
      setLoaging(true);
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query)
      .then(data =>{
        setPins(data);
        setLoaging(false);
      })
    } else {
      client.fetch(feedQuery)
          .then(data =>{
            setPins(data);
            setLoaging(false);
          })
    }
  }, [searchTerm]);

  return (
    <div>
      {loaging && <Spinner message={"Searching for pins...."}/>}
      {pins?.length !== 0 && <MasonryLayout pins={pins}/>}
      {pins?.length === 0 && searchTerm !== "" && !loaging && (
        <div className='mt-10 text-center text-xl'> 
          No Pins Found!!
        </div>
      )}
    </div>
  )
}

export default Search