import "./Form.css";
import React from 'react';

const Form = () => {
  return (
    <div className="form">
      <form>
        <lable>Your Name</lable>
        <input type="text"></input>
        <lable>Email</lable>
        <input type="email"></input>
        <lable>Subject</lable>
        <input type="text"></input>
        <lable>Your Message</lable>
        <textarea rows={5} placeholder="Type your message..."></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
