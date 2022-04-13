import { ChangeEvent, useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [lightMode, setLightMode] = useState(true)
  const [textValue, setTextValue] = useState("")
  const [displayMessage, setDispayMessage] = useState(false)
  const [count, setCount] = useState(1)
  const [outputArray, setOutputArray] = useState([""])
  const today = new Date()
  const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [currentTime, setCurrentTime] = useState(date)

  const handleThemeChange = () => {
    setLightMode(!lightMode)
    const today = new Date()
    const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setCurrentTime(date)
    setOutputArray([...outputArray, `${date} Theme is changed to ${lightMode ? "light mode" : "dark mode"}`])
  }

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const handleDisplayMessage = () => {
    if (textValue.length > 0) {
      setDispayMessage(true)
      setOutputArray([...outputArray, `Message sent: ${textValue}`])
      setTextValue("")
    }
  }

  const incrementButton = () => {
    setCount((count) => count + 1)
    setOutputArray([...outputArray, `Button ${count} added`])
  }


  return (
    <div className="app">
      <div className='toggle'>
        <button onClick={handleThemeChange} style={lightMode ? { backgroundColor: "lightgrey", color: "black" } : { backgroundColor: "black", color: "white" }}>  {lightMode ? "light mode" : "dark mode"}</button>
      </div>
      <div className={lightMode ? "light_theme" : "dark_theme"}>
        <div className='container'>
          <div className="left_part">
            <div className='text_area_container'>
              <textarea rows={3} placeholder="Enter some text" value={textValue} onChange={(e) => handleTextArea(e)} />
              <button disabled={textValue.length > 0 ? false : true} onClick={handleDisplayMessage}>Submit</button>
            </div>

            <div className='button_adder'>
              <button onClick={incrementButton}>Add a Button {count}</button>
            </div>

          </div>
          <div className='right_part'>
            {outputArray.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
