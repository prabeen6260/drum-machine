import React,{useReducer,useEffect} from "react";
import './App.css';
import { act } from "react-dom/test-utils";

const ACTION={
  DRUM_PAD: 'DRUM_PAD',
  KEY_PAD: 'KEY_PAD',
  POWER: 'POWER',
  BANK: 'BANK',
  VOLUME: 'VOLUME'
}

function reducer(state,action){
  if(state.power===true){
    switch(action.type){
      case ACTION.DRUM_PAD:
        if(state.bank==='heater_kit'){
          if(action.payload==='Q'){
            return{
              ...state,
              displayValue: 'Heater 1',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',state.volume)
            }
          }
          else if(action.payload==='W'){
            return{
              ...state,
              displayValue: 'Heater 2',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',state.volume),
            }
          }
          else if(action.payload==='E'){
            return{
              ...state,
              displayValue: 'Heater 3',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',state.volume)
            }
          }
          else if(action.payload==='A'){
            return{
              ...state,
              displayValue: 'Heater 4',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',state.volume)
            }
          }
          else if(action.payload==='S'){
            return{
              ...state,
              displayValue: 'Clap',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',state.volume)
            }
          }
          else if(action.payload==='D'){
            return{
              ...state,
              displayValue: 'Open HH',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',state.volume)
            }
          }
          else if(action.payload==='Z'){
            return{
              ...state,
              displayValue: 'Kick n\' Hat',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',state.volume)
            }
          }
          else if(action.payload==='X'){
            return{
              ...state,
              displayValue: 'Kick',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',state.volume)
            }
          }
          else if(action.payload==='C'){
            return{
              ...state,
              displayValue: 'Closed HH',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',state.volume)
            }
          }
          else if(action.payload===ACTION.BANK){
          return{
            ...state,
            displayValue: 'Smooth Piano Kit',
            bank: 'smooth_piano_kit'
          }
        }
        }
        else if(state.bank === 'smooth_piano_kit'){
          if(action.payload==='Q'){
            return{
              ...state,
              displayValue: 'Chord 1',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',state.volume)
            }
          }
          else if(action.payload==='W'){
            return{
              ...state,
              displayValue: 'Chord 2',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',state.volume)
            }
          }
          else if(action.payload==='E'){
            return{
              ...state,
              displayValue: 'Chord 3',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',state.volume)
            }
          }
          else if(action.payload==='A'){
            return{
              ...state,
              displayValue: 'Shaker',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',state.volume)
            }
          }
          else if(action.payload==='S'){
            return{
              ...state,
              displayValue: 'Open HH',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',state.volume)
            }
          }
          else if(action.payload==='D'){
            return{
              ...state,
              displayValue: 'Closed HH',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',state.volume)
            }
          }
          else if(action.payload==='Z'){
            return{
              ...state,
              displayValue: 'Punchy Kick',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',state.volume)
            }
          }
          else if(action.payload==='X'){
            return{
              ...state,
              displayValue: 'Side Stick',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',state.volume)
            }
          }
          else if(action.payload==='C'){
            return{
              ...state,
              displayValue: 'Snare',
              styles: {color: action.color},
              sound: playSound('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',state.volume)
            }
          }
          else if(action.payload===ACTION.BANK){
            return{
              ...state,
              displayValue: 'Heater Kit',
              bank: 'heater_kit'
            }
          }
        }
      case ACTION.POWER:
        return{
          ...state,
          displayValue: '',
          power: false,
        } 
      case ACTION.VOLUME:
        return{
          ...state,
          displayValue: 'Volume: '+ action.payload,
          volume: action.payload
        }  
      default:
        return state;
    }
  }
  else{
    if(action.type===ACTION.POWER){
      return{
        ...state,
        power: true
      }
    }
    return state

  }
}
function playSound(url,volumeVal){
  let audio = new Audio(url);
  audio.volume=volumeVal/100;
  audio.play();

}
const initialState={
  displayValue: '',
  power: true,
  bank: 'heater_kit',
  volume: 50,
  sound: '',
  styles: {color: 'black'}
}
const validKeys = ['Q', 'W', 'E', 'A', 'S','D','Z','X','C'];
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      if (validKeys.includes(key)) {
        dispatch({ type: ACTION.DRUM_PAD, payload: key, color: `#${Math.floor(Math.random()*16777215).toString(16)}`});
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [dispatch]);

  return (
    <div className="main">
      <div className="titleBox">
        <div className="titleText">Drum Machine</div>
      </div>
      <div className='box' id='drum-machine'>
        <div className="btns">
          <button style={state.styles} className='drum-pad' onClick={() => dispatch({ type: ACTION.DRUM_PAD, payload: 'Q' })}>Q</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'W'})}>W</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'E'})}>E</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'A'})}>A</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'S'})}>S</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'D'})}>D</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'Z'})}>Z</button>
          <button style={state.styles} className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'X'})}>X</button>
          <button style={state.styles}className="drum-pad" onClick={()=>dispatch({type: ACTION.DRUM_PAD, payload: 'C'})}>C</button>
        </div>
        <div className="display" id="display">
          <div className="powerBox">
            <div className="info">POWER</div>
            <input type='checkbox' id='power' className="powerButton" onChange={()=>dispatch({type: ACTION.POWER})}></input>
            <label for="power" class='labelOne'></label>
          </div>
          <div className="textBox">
          <div className="textDisplay">{state.displayValue}</div>
          </div>
          <div className="volumeBox">
          <input type="range" className="volumeStyle" id='volume' value={state.volume} min={0} max={100} step={1} onChange={(e)=>dispatch({type: ACTION.VOLUME, payload: e.target.value})}></input>
          <label for='volume' className="labelThree"></label>
          </div>
          <div className="bankBox">
            <div className="info">BANK</div>
            <input type="checkbox" id='bank' className="bankButton" onChange={()=>dispatch({type: ACTION.DRUM_PAD, payload: ACTION.BANK})}></input>
            <label for="bank" className="labelTwo" ></label>
          </div>
        </div>
        </div>
    </div>
  )

}

export default App;