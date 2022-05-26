import React from 'react'
import{ useState , useEffect}from 'react'

const Timer = () => {

  const [timer,setTimer] = useState(0);

useEffect(() => {
  const id = setInterval(() =>{
  if(timer >= 10){
    clearInterval(id);
     } else{
       setTimer(timer + 1)
     }

  },1000)

  return () =>{
    clearInterval(id);
  }
},[timer])


  return (
    <div>
      Counter: {timer}
    </div>
  )
}

export default Timer;
