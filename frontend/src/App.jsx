import axios from 'axios';
import { useRef } from 'react'
import './App.css'

function App() {
  
  const name = useRef();
  const email = useRef();

 const btnHandller =  async () => {
    const res = await axios.post('http://localhost:5001/user', {name:name.current.value,email:email.current.value});
    console.log(res.data);
 }

  return (
    <>
       <form onClick={(e) => e.preventDefault()} >
          <input type="text" placeholder='Enter Name' ref={name} />
          <input type="email" placeholder='Enter email' ref={email} />
          <button onClick={btnHandller}>Submit</button>
       </form>
    </>
  )
}

export default App
