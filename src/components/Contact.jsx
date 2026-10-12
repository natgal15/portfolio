import { useState } from 'react'
import { Send, Mail, MapPin, Clock } from 'lucide-react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!captchaVerified) {
      setStatus('error')
      setErrorMessage('Please verify that you are not a robot before sending your message.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('https://formspree.io/f/mrejvone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setCaptchaVerified(false)
      } else {
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again.')
        setCaptchaVerified(false)
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
      setCaptchaVerified(false)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Left: info */}
        <div className={styles.info}>
          <p className={styles.eyebrow}>// contact</p>
          <h2 className={styles.heading}>
            Let's build<br />
            <em>something great</em>.
          </h2>
          <p className={styles.body}>
            Have a project in mind? Want to collaborate, or just say hi? My inbox
            is always open — I'll get back to you within 24 hours.
          </p>

          <ul className={styles.details}>
            <li>
              <Mail size={16} />
              <a href="mailto:natashagallego.dev@gmail.com">natashagallego.dev@gmail.com</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>Cavite, Philippines</span>
            </li>
            <li>
              <Clock size={16} />
              <span>UTC+8 · Open to remote</span>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'sending' || status === 'sent'}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sending' || status === 'sent'}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your project…"
              value={form.message}
              onChange={handleChange}
              required
              disabled={status === 'sending' || status === 'sent'}
            />
          </div>

          <div className={styles.captchaBox}>
            <label className={styles.captchaLabel}>
              <input
                type="checkbox"
                checked={captchaVerified}
                onChange={e => {
                  setCaptchaVerified(e.target.checked)
                  if (status === 'error') {
                    setStatus('idle')
                    setErrorMessage('')
                  }
                }}
                disabled={status === 'sending' || status === 'sent'}
              />
              <span className={styles.checkmark} aria-hidden="true" />
              <span className={styles.captchaText}>I&apos;m not a robot</span>
            </label>

            <div className={styles.recaptchaBadge} aria-hidden="true">
              <span className={styles.recaptchaIcon}>
                <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52 20c-4.5-3.5-10.2-5.5-16.3-5.5C21.7 14.5 12 24.2 12 35.2c0 10.9 9.7 19.7 21.7 19.7 9.3 0 17.3-5.8 20.2-13.8" fill="none" stroke="#0b57d0" strokeWidth="7" strokeLinecap="round" />
                  <path d="M61 22l-10 1 3.2 9.2" fill="none" stroke="#0b57d0" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 58c4.5 3.4 10.2 5.5 16.3 5.5 14 0 25.3-9.6 25.3-21.7 0-10.8-9.7-19.5-21.7-19.5-9.4 0-17.5 5.8-20.2 13.9" fill="none" stroke="#9ea7b2" strokeWidth="7" strokeLinecap="round" />
                  <path d="M18 58l10-1-3.1-9.1" fill="none" stroke="#9ea7b2" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className={styles.recaptchaBranding}>
                <span className={styles.recaptchaWord}>reCAPTCHA</span>
                <span className={styles.recaptchaMeta}>Privacy - Terms</span>
              </div>
            </div>
          </div>

          {status === 'error' && (
            <p className={styles.error}>{errorMessage}</p>
          )}

          {status === 'sent' ? (
            <p className={styles.success}>
              ✓ Message sent! I'll be in touch shortly.
            </p>
          ) : (
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : (
                <><Send size={15} /> Send Message</>
              )}
            </button>
          )}
        </form>
      </div>
    </section>
  )
}
