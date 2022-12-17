import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Advance() {
  const [users,setUser]=useState([])


    useEffect(()=>{
      fetch("http://localhost:5000/list").then((result)=>{
        result.json().then((resp)=>{
          // console.log(resp)
          setUser(resp)
          
        })
      })
    },[])


    const deleteUser=(id)=> {  
      fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE'
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
          setUser(resp)
        })
      })
    }
    
  return (
    
      <div className='advance todo-row' >
         
  <table  >
    <tbody>
   
    {
   users.map((item,i)=>
            <tr key={i}>
             <td>{item.text}</td>
            <td> <Button onClick={()=>deleteUser(item.id)}>delete</Button></td>
          </tr>
        )}
    </tbody>
  </table>
    </div>
    
  )
}

export default Advance