import { useState } from 'react';
import './App.css';
import Button1 from './components/Button1';
import Input from './components/Input'

function App() {
  const [text,setText]=useState("hii");
  const[result,setResult]=useState("Byy");
//   const addToText= (val) => {
//     setText((text)=>[...text,val +" "]);
//  };
  const buttonColor="#f2a33c";
  return (
    <div className="App">
      <div className="cal-wrapper">
      < Input text={text} result={result}/>
      <div className='row'>
      <Button1 symbol="7"/>
     <Button1 symbol="8"/>
     <Button1 symbol="9"/>
     <Button1 symbol="/"  color={buttonColor}/>
      </div>
      <div className='row'>
     <Button1 symbol="4"/>
     <Button1 symbol="5"/>
     <Button1 symbol="6"/>
     <Button1 symbol="*" color={buttonColor}/>
      </div>
      <div className='row'>
      <Button1 symbol="1"/>
     <Button1 symbol="2"/>
     <Button1 symbol="3"/>
     <Button1 symbol="+"color={buttonColor}/>
      </div>
      <div className='row'>
      <Button1 symbol="0"/>
     <Button1 symbol="."/>
     <Button1 symbol="="/>
     <Button1 symbol="-" color={buttonColor}/>
      </div>
      <Button1 symbol="clear"/>
      </div>
      
    </div>
  );
}

export default App;
