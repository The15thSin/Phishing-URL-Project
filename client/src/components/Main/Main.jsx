import React, { useState } from 'react'
import './Main.css'
import axios from 'axios'
import Analysis from '../Analysis/Analysis'

function Main() {
  const [url, setUrl] = useState("")
  const [pred, setPred] = useState("-1")
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post('https://equipped-lasting-yeti.ngrok-free.app/predict', { inputData: url });
      await setPred(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("Error making prediction... : ", err);
      setPred("0");
    }
  }

  return (
    <div className='Main'>
      <h1 className="head">Phishing URL Detector</h1>
      <div className='url'>
        <form action="/">
          <span>
            <input
              className="url-input"
              type="text"
              id="fname"
              value={url}
              onChange={(e) => {setUrl(e.target.value); setPred("-1")}}
              placeholder='Paste your URL here...' />
          </span>
          <span>
            <button className="url-submit" onClick={handleSubmit}>Check</button>
          </span>
        </form>
      </div>
      {
        (pred !== "-1" && pred !== "0") &&
        <div>
          <Analysis url={url} pred = {pred}/>
        </div>
      }
      {
        (pred === "0") &&
        <div>
          <h2 className='no-pred'>Please enter a Valid URL...</h2>
        </div>
      }
    </div>
  )
}

export default Main