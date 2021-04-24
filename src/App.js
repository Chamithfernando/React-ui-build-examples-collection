import React, {useState} from 'react';
import './App.css';
import { Spin, Space } from 'antd';
import 'antd/dist/antd.css';


/* function expensiveIntialState(){
  return 10;
} */

/* const App = () => {
  
    
  const [count, setCount] = useState(10);
  const [count1, setCount1] = useState(20);

    return (

      <div>
      <button onClick={() => {
        setCount(c => c + 1);
        setCount1(c => c + 1);
      }} >
      +
      </button>
      <div>{count}</div>
      <div>{count1}</div>
      </div>

    );
    
    
  
} */

const App = () => {

  const [ email ,setEmail] = useState("");
  const [ password ,setPassword] = useState("");


  return(
  <div>
  <input
  name="email"
  value={email}
  onChange={e => setEmail(e.target.value)}
  />
  <input
  type="password"
  name="password"
  value={password}
  onChange={e => setPassword(e.target.value)}
  
  
  />
  
  </div>



  );

  console.log(email);
  console.log(password);

};

export default App;
