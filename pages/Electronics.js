import React from 'react'
import { Speak } from '../components';

import { client } from '../lib/client'

const Electronics = ({speaker}) => {
  

  return (
    <>
      <div className='speak-container'>
      {speaker?.map((speaker) => <Speak key={speaker.id} speaker={speaker}/> )}
      </div>

    </>
  );
}



export const getStaticProps = async () => {

  const speakerQuery = '*[_type == "speaker"]';
  const speaker = await client.fetch(speakerQuery);



  return {
    props: { speaker }
  }
  
}
export default Electronics;