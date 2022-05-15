import {useState} from 'react';


const useInput =(initValue)=>{
  const [value,setValue] = useState(initValue);
  
  const resetValue = ()=> setValue(initValue); 
  
  const attribs = {
    value,
    onChange: (e)=> setValue(e.target.value)     
  }
  
  return [value,resetValue,attribs];
}

export default useInput;
