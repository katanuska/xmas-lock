import { useState } from 'react';
import './App.css';
import Lock from './Lock';
import GiftWrap from './gift-wrap.png';
import Confetti from 'react-dom-confetti';

function App() {
  const [greenBoxUnlocked, setGreenBoxUnlocked] = useState(false);
  const [pinkBoxUnlocked, setPinkBoxUnlocked] = useState(false);
  const [blackBoxUnlocked, setBlackBoxUnlocked] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: "44",
    elementCount: "137",
    dragFriction: 0.2,
    duration: 4000,
    stagger: 5,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <div className="App">
      <div className='gift-box'>
        <img className='wrap' src={GiftWrap} alt="gift=-wrap"/>
        <div className='box' style={{backgroundColor: "#558266"}}>
          <Confetti active={ greenBoxUnlocked } config={ config }/>
          <Lock digitsNumber={3} code={[4, 7, 3]} onSuccess={() => setGreenBoxUnlocked(true)} unlocked={greenBoxUnlocked}/>
        </div>
      </div>
      <div className='gift-box'>
        <img className='wrap' src={GiftWrap} alt="gift=-wrap"/>
        <div className='box' style={{backgroundColor: "#dbb2b2"}}>
          <Confetti active={ pinkBoxUnlocked } config={ config }/>
          <Lock digitsNumber={4} code={[5, 3, 9, 8]} onSuccess={() => setPinkBoxUnlocked(true)} unlocked={pinkBoxUnlocked}/>
        </div>
      </div>
      <div className='gift-box'>
        <img className='wrap' src={GiftWrap} alt="gift=-wrap"/>
        <div className='box' style={{backgroundColor: "black"}}>
          <Confetti active={ blackBoxUnlocked } config={ config }/>
          <Lock digitsNumber={4} code={[7, 9, 1, 0]} onSuccess={() => setBlackBoxUnlocked(true)} unlocked={blackBoxUnlocked}/>
        </div>
      </div>
    </div>
  );
}

export default App;
