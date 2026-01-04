import React from 'react';
import { Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={26} />,
      label: 'Email',
      value: 'nurazhimr@gmail.com',
      link: 'mailto:nurazhimr@gmail.com'
    },
    {
      icon: <Linkedin size={26} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com'
    },
    {
      icon: <Instagram size={26} />,
      label: 'Instagram',
      value: 'Follow me',
      link: 'https://instagram.com'
    },
    {
      icon: <MessageCircle size={26} />,
      label: 'WhatsApp',
      value: '+62 819 9121 9199',
      link: 'https://wa.me/6281991219199'
    }
  ];

  return (
<section id="contact" className="contact-section">

  <div className="contact-header">
    <h2 className="section-title">Let's Connect</h2>
    <div className="section-divider"></div>
    <p className="contact-subtitle">
      Feel free to reach out through any of these channels
    </p>
  </div>

  <div className="contact-row">
    {contacts.map((item, i) => (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-circle"
      >
        <div className="contact-icon">{item.icon}</div>
        <div className="contact-label">{item.label}</div>
        <div className="contact-value">{item.value}</div>
      </a>
    ))}
  </div>

</section>


  );
};

export default Contact;
