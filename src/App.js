
import './App.css';
import React,{useState} from 'react';

function App() {
  //UseStates
const [weight,setWeight] = useState(0);
const [height,setHeight]= useState(0);
const [bmiValue,setBmiValue] = useState(' ');
const [message,setMessage] = useState(' ');

//BMI Value calculate Logic
let calBMIValue = (e) => {
  e.preventDefault()
  if(weight === 0 || height === 0){
    alert("Please enter the valid Weight and Height");
  }
  else{
    let bmiValue = (weight/(height*height)*703)
    setBmiValue(bmiValue.toFixed(1))
  }

//Message showing based on BMIValue
if(bmiValue<25){
  setMessage('You are Underweight')
}
else if(bmiValue >=25 && bmiValue < 30)
{
  setMessage('you are a healthy weight')
}
else
{
  setMessage('you are OverWeight')
}
}

//Reload Logic
let reload = () => {
  window.location.reload()
}






  return (
    <><div className='App'>
  <div className="container">
  <h1>Welcome Body Masss Index Checker</h1>
  <form onSubmit={calBMIValue}>
    <div>
      <label>Weight (lbs)</label>
      <input type="text" placeholder='Enter Weight Value' value={weight} onChange={(w) => setWeight(w.target.value)}/>
    </div>
    <div>
      <label>height (in)</label>
      <input type="text" placeholder='Enter Height Value' value={height} onChange={(h) => setHeight(h.target.value)}/>
    </div>
    <div>
      <button className='btn' type='submit'>Submit</button>
      <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
    </div>
    <div className="center">
      <h3>Your Body Mass Index is:{bmiValue}</h3>
      <h4>{message}</h4>
    </div>
  </form>
  </div>
    </div>
   </>
  );
}

export default App;
