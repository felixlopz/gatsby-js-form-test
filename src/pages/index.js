import React, { useState } from 'react';
import axios from 'axios';
import * as qs from 'query-string';

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = { name: name, email: email, message: message };

    const axiosOptions = {
      url: this.props.location.pathname,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(formData),
    };

    axios(axiosOptions)
      .then((response) => {
        console.log('Form submitted');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
    >
      <div>
        <label htmlFor="name-input">Introduzca su nombre</label>
        <input
          type="text"
          name="name"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-input">Introduzca su email</label>
        <input
          type="email"
          name="email"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-input">Introduzca su nombre</label>
        <textarea
          type="text"
          name="message"
          id="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default IndexPage;
