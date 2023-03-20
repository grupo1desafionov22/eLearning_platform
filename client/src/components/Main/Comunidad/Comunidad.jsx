import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Comunidad = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_po6f2gf', 'template_t3qeqnq', form.current, '9PvwD6KcZ_tp71Eih')
      .then((result) => {
          console.log(result.text);
          alert('se ha enviado su mensaje')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Comunidad;
