import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Phone Number</label>
            <input type="number"></input>
            <label>Leave a Message</label>
            <textarea name="Address" id="Address" cols = "50" rows="10" placeholder="Type your message here...."></textarea>
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
