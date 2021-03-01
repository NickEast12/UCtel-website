import React from 'react';

const FormTesting = () => (
  <main>
    <form
      name="testing"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/"
    >
      <p>Name</p>
      <input type="text" name="name" id="name" />
    </form>
    <p>email</p>
    <input type="email" name="" id="" />
    <p>Message</p>
    <textarea name="message" id="message" />
    <button type="submit">Submit</button>
  </main>
);

export default FormTesting;
