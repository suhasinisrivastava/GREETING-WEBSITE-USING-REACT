import React from 'react'
function App() {
    const date= new Date();
    const hours= date.getHours();
    let time;
    if(hours>=4 && hours<12){
      time="Good Morning!"
    }
    else if(hours>=12 && hours<17){
      time="Good Afternoon!"
    }
    else if(hours>=17 && hours<22){
      time="Good Evening!"
    }
    else if(hours>=22 && hours<4){
      time="Good Night!"
    }
    return (
     < div className="x"><h1 className="greet">{time}</h1></div>
    );
  }


export default App
