import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const Forms = () => {
    const[forms,setForms]=useState({})
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://192.168.29.146:4000/api/data')
          .then((res) => {
              console.log(res.data);
              setData(res.data); 
          })
          .catch((err) => {
              console.error(err);
          });
  }, []);

    

    const submitform = (e)=>{

      e.preventDefault();

      axios.post("http://192.168.29.146:4000/api/getdata",forms)
      .then((res)=>{
          console.log(res);
           alert(res.data.msg)
      })
      .catch((err)=>{
          console.log(err);
          
      })
  }
    const Changefn = (e) => {
        console.log(e.target.name, e.target.value);
        setForms({
          ...forms,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <div>
        <form onSubmit={submitform}>
            
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' value={forms?.name} onChange={Changefn} />

        <label htmlFor='dob'>DOB</label>
        <input id='dob' name='dob' value={forms?.dbo} onChange={Changefn} />

        <label htmlFor='email'>Email</label>
        <input id='email' name='email' value={forms?.email} onChange={Changefn} />

        <button type='submit'>Submit</button>
        </form>

        <br />


<table>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {data.length > 0 ? (
            data.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.dob}</td>
                    <td>{item.email}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="4">No data available</td>
            </tr>
        )}
    </tbody>
</table>
    </div>
  )
}
