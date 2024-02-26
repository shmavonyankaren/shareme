import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
 

const Feed = () => {
  const [loaging, setLoading] = useState(false);
  const {categoryId} = useParams();
  const [pins, setPins] = useState(null);

  useEffect( ()=>{
    setLoading(true);
    if(categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query)
            .then(data =>{
              console.log(data);
              setPins(data);
              setLoading(false);
            })
    } else {
      client.fetch(feedQuery) 
            .then(data =>{
              console.log(data);
              setPins(data);
              setLoading(false);
            })
    } 
  }, [categoryId]);

  if(loaging) return <Spinner message={"Me are adding new idees to your feed!!"}/>

  if(!pins?.length) return <h2>No pins available </h2>

  return (
    <div>
        {pins ? <MasonryLayout pins={pins}/> : null}
    </div>
  )
}

export default Feed