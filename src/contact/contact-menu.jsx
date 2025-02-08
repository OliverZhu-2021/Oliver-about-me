import { useState } from "react";
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';
import '../style/contact.css';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const ContactMenu = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if(Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setIsLoading(true);

    const { name, email, message } = formData;
    const sanitizeData = {
      name: 'Name: ' + DOMPurify.sanitize(name),
      email: 'Email: ' + DOMPurify.sanitize(email),
      message: 'Message: ' + DOMPurify.sanitize(message),
    }

    const serviceID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

    emailjs
    .send(serviceID, templateID, sanitizeData, userID)
    .then((res) => {
      console.log('Email is sent successfully!', res.text);
      setFormData(initialState);
      setErrors({});
      setIsSent(true);
    })
    .catch((err) => {
      console.error('Email sending failed', err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  return(
    <>
      <div className='contact-menu'>
        {!isSent && (
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name:</label>
              <input 
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                disabled={isLoading}
              />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
            </div>
            <div className='form-group'>
              <label htmlFor="email">Email:</label>
              <input 
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                disabled={isLoading}
              />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
            </div>
            <div className='form-group'>
              <label htmlFor="message">Message:</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                disabled={isLoading}
              ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
            </div>
            <button type="submit" disabled={isLoading}>{isLoading ? 'SENDING...' : 'SUBMIT'}</button>
            <div className='link-container'>
              <a
                href='https://www.instagram.com/zhuhao6774/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href='https://www.linkedin.com/in/hao-zhu-1ab753299/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </form>
        )}
        {isSent && (
          <div className="success-message">
            <p>SUCCESS!</p>
            <p>Your message has been successfully sent!</p>
            <p>You can safely leave this page.</p>
          </div>
        )}
      </div>
    </>
  )
};

export default ContactMenu