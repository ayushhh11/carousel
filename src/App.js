import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './App.css';
const data =['https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/459601/pexels-photo-459601.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1497148/pexels-photo-1497148.jpeg?auto=compress&cs=tinysrgb&w=600']

function App() {
  const [presentImage, setPresentImage] = useState(0);
  const handleClickPrevious = ()=>{
    if(presentImage === 0) {setPresentImage(data.length-1)}
    else {setPresentImage(presentImage-1)}
  }
  const handleClickNext = ()=>{
    if(presentImage === data.length-1) {setPresentImage(0)}
    else {setPresentImage(presentImage+1)} 
  } 
  return (
    <div className="flex justify-center">
      <button onClick={handleClickPrevious} className='p-2 m-2'> <ArrowBackIosNewIcon/></button>
      {
        data.map((im, index) =>(
          <img key={index}
          src={im}
          className={`h-[450px] w-[400px] + ${presentImage===index?"block":"hidden"}`}
          alt="Not coming" /> 
        ))
      }
      <button onClick={handleClickNext} className='p-2 m-2'> <ArrowForwardIosIcon/></button>
    </div>
  );
}

export default App;
