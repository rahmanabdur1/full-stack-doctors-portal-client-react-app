import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import appointment from '../../assets/images/appointment.png';
import useTitle from '../../hook/useHooks';
// import './Contact.css'
const ContactUs = () => {
  // const form = useRef();
  //  useTitle("Contact")
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_zsc9pfm', 'template_9b5f9gn', form.current, '0OoTS332WJeyo8xoH')
  //     .then((result) => {
  //       console.log(result.text);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div className="container" style={{ backgroundImage: `url(${appointment})` }}>
      {/* <form  ref={form} onSubmit={handleSubmit}>
        <div className='text-center'>
          <h3 className='text-cyan-300 text-xl mt-12'>Contact Us</h3>
          <h2 className='text-2xl'>Stay Connected With Us</h2>
        </div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <input
          type='text'
          name='sub_name'
          placeholder='Subject'
          required
        />
        <textarea
          name='message'
          placeholder='Your message'
          required
        />
        <input className='' type='submit' value="submit" />
      </form> */}
    </div>
  );
};

export default ContactUs;
