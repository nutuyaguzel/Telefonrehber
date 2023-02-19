import React, {useEffect, useState} from 'react'
import Header from '../component/Header'

import LİstPhone from '../component/LİstPhone'

import axios from 'axios'



const  Home=()=> {
const [person,setPerson]=useState(null)

useEffect(()=>{
  axios.get("http://localhost:3004/persons")
  .then(res=>{
    setPerson(res.data)
    

  })
  .catch(err=>{

  })
if (person === null ) return null

},[])

  return (
    <div>
      
        <Header/>
        

        <LİstPhone person={person}/>
        
    </div>
  )
}

export default Home