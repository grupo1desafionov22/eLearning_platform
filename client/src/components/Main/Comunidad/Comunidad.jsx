
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Comunidad.css';

const Comunidad = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    // Validar campos
    const name = event.target.elements.user_name.value;
    const email = event.target.elements.user_email.value;
    const message = event.target.elements.message.value;

    const nameRegex = /^[a-zA-Z ]{5,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    } else if (!nameRegex.test(name)) {
      alert('Por favor, ingrese un nombre válido sin números y con al menos 5 letras.');
      return;
    } else if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Enviar formulario
    emailjs.sendForm('service_po6f2gf', 'template_t3qeqnq', form.current, '9PvwD6KcZ_tp71Eih')
      .then((result) => {
        console.log(result.text);
        alert('¡Se ha enviado su mensaje!');
        form.current.reset(); // Limpiar campos
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='comunidad'>
    <form ref={form} onSubmit={sendEmail}>
      <h1>Comunícate con nosotros</h1>
      <label>Nombre</label>
      <input type="text" name="user_name" className="button-Input" placeholder="Escribe tu nombre" required />
      <label>Email</label>
      <input type="email" name="user_email" className="button-Input" placeholder="Escribe tu correo..." required />
      <label>Mensaje</label>
      <textarea name="message" className="button-Input" placeholder="Escribe tu mensaje..." style={{ height: "200px", width: "320px" }} required />
      <input type="submit" value="Enviar" className="button-Input" />
      
    </form>
    <iframe src="https://embed.lottiefiles.com/animation/129566"  ></iframe>
    </section>
  );
};

export default Comunidad;
