import React from 'react';
import './css/book.css';

function Book() {
  return (
    <div className="book-container">
      <p className="book-heading" data-aos="fade-up" >BOOK FOR A SHOW</p>
      <br /><br /><br /><br /><br />
      <form>
        <div className="book-subform">
          <input type="text" name="name" placeholder="Name*" data-aos="fade-right"/>
          <input type="number" name="phone" placeholder="Phone" data-aos="fade-left"/>
        </div>
        <div className="book-subform">
          <input type="email" name="email" placeholder="Email*" data-aos="fade-right"/>
          <input type="url" name="website" placeholder="Website" data-aos="fade-left"/>
        </div>
        <div className="book-subform">
          <input type="text" name="subject" placeholder="Subject*" style={{ width: "100%" }} data-aos="fade-up"/>
        </div>
        <textarea name="describe" rows="4" cols="30" placeholder="Describe Your Project*" data-aos="fade-up"></textarea>
        <input type="submit" value="SUBMIT" className="book-submit-btn" data-aos="fade-up"/>
      </form>
    </div>
  );
}

export default Book;
