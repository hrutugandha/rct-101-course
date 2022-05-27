import React from 'react'
import {useState, useRef} from 'react'

const Form = () => {

    const [form,setForm] = useState({})
    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    const handleChange = (e) =>{
        let {type,name,value,checked, files} = e.target.value;
        if(type === 'checkbox'){
            setForm({
                ...form,
                [name] : checked,
            })
        }else if(type === 'file'){
            setForm({
                ...form,
                [name] : files,
            })
        }
        else{
            setForm({
                ...form,
                [name] : value,
            })
        }
        
    }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" 
            name='username'
            placeholder="Enter username..."
            value={form.username}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" 
            name='email'
            placeholder="Enter email..."
            value={form.email}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" 
            name='password'
            placeholder="Enter password..."
            value={form.password}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Age:</label>
            <input type="number" 
            name='age'
            value={form.age}
            onChange={handleChange}
            />
        </div>
        <div>
            <input type="checkbox" 
            name='isIndian'
            value={form.isIndian}
            onChange={handleChange}
            />
            <label>Indian</label>
        </div>
        <div>
           <div>
            <input type="radio" 
            name='gender'
            value={'Male'}
            onChange={handleChange}
            />
             <label>Male</label>
           </div>
        </div>
        <div>
        <div>
            <input type="radio" 
            name='gender'
            value={'Female'}
            onChange={handleChange}
            />
             <label>Female</label>
           </div>
        </div>
        <div>
            <label>User Resume:</label>
            <input type="file" 
            name='resume'
            files={form.resume}
            onChange={handleChange}
            />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
