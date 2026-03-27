import { useState } from 'react'
import './ContactFormStyle.css'

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xpwzgkby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className='contact-section'>
        <h2 className='contact-title'>Get in Touch</h2>
        <div className='contact-success'>
          <p>Message sent! I'll get back to you soon.</p>
          <button className='contact-btn' onClick={() => setStatus('idle')}>
            Send another
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className='contact-section'>
      <h2 className='contact-title'>Get in Touch</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder='Message'
          rows='4'
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button
          className='contact-btn'
          type='submit'
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'error' && (
          <p className='contact-error'>Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  )
}

export default ContactForm
