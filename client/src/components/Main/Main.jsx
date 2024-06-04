import React from 'react'
import './Main.css'

function Main() {
  return (
    <>
        <h1 className="head">Phishing URL Detection</h1>
  
        <div className='url'>
          <form action="/">
            <span>
              <input className="box" type="text" id="fname" placeholder='Paste URLs here' />
            </span>
            <span>
              <input type="submit" value="Check" />
            </span>
          </form>
        </div>
    </>
  )
}

export default Main