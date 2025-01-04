import axios from 'axios'
import React from 'react'

export const Axios = () => {
  
    const Senddata = ()=>{
        axios.post("http://192.168.141.44:4000/api/data",{name:"kapil"})
        .then((res)=>{
            console.log(res);
             alert(res.data.msg)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    

  return (
    <div>
        <button onClick={Senddata}>Click to send data</button>
    </div>
  )
}
