import React, { useState } from 'react';
import styles from './SignUp.module.css';

// PUBLIC_INTERFACE
export default function SignUp() {
  /**
   * Figma "Sign up page" (screen_2:1816) exact implementation:
   * - Full-bleed dark navy background
   * - Left: Eventify brand + headline
   * - Right: White panel with title, social buttons (Google/Facebook), OR divider, inputs (Full Name, E-mail Address, Password), CTA, switch link
   * - Local CSS module uses global tokens (src/styles/tokens.css)
   */

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = (() => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) {
      e.email = 'Email address is required';
    } else if (!emailRe.test(form.email)) {
      e.email = 'Please enter a valid email';
    }
    if (!form.password) {
      e.password = 'Password is required';
    } else if (form.password.length < 8) {
      e.password = 'Password must be at least 8 characters';
    }
    return e;
  })();

  const hasError = (field) => Boolean(errors[field] && (touched[field] || submitted));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      alert('Account created successfully!');
      setForm({ name: '', email: '', password: '' });
      setTouched({});
      setSubmitted(false);
    }
  };

  return (
    <section className={styles.page}>
      <div className={`container ${styles.grid}`}>
        {/* Left: Brand + Headline */}
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <div className={styles.brandTicket} aria-hidden="true" />
            <div className={styles.brandName}>Eventify</div>
          </div>

          <h1 className={styles.headline}>
            Discover tailored events.
            <br />
            Sign up for personalized recommendations today!
          </h1>
        </div>

        {/* Right: Create Account Panel */}
        <div className={styles.panel} role="region" aria-labelledby="signup-title">
          <button className={styles.close} type="button" aria-label="Close dialog">
            <span className={styles.closeLine}></span>
            <span className={styles.closeLine}></span>
          </button>

          <h1 id="signup-title" className={styles.panelTitle}>Create Account</h1>

          {/* Social buttons row (2x346px) */}
          <div className={styles.socialRow} aria-label="Sign up with a social account">
            <button className={`${styles.socialBtn} ${styles.google}`} type="button">
              <span className={styles.socialIcon} aria-hidden="true">
                {/* Google multicolor 'G' SVG (24x24 inside 36x36 box) */}
                <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.153,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.153,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.169,0,9.86-1.977,13.409-5.197l-6.197-5.236C29.231,35.091,26.748,36,24,36 c-5.202,0-9.62-3.317-11.278-7.949l-6.512,5.02C9.514,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.236-2.242,4.145-4.094,5.567 c0,0,0.002-0.001,0.003-0.002l6.197,5.236C35.037,40.081,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
              </span>
              <span className={styles.socialLabel}>Sign up with Google</span>
            </button>

            <button className={`${styles.socialBtn} ${styles.facebook}`} type="button">
              <span className={styles.socialIcon} aria-hidden="true">
                {/* Facebook icon in brand blue */}
                <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <circle cx="24" cy="24" r="20" fill="#1877F2"></circle>
                  <path d="M28.5 16H25.9C24.4 16 23.8 16.8 23.8 18v3h4.6l-.7 4.5h-3.9V36h-4.7v-10.5h-3.1V21h3.1v-2.6C19.1 15 21.4 13 24.9 13c1.4 0 2.7.1 3.6.2V16z" fill="#fff"/>
                </svg>
              </span>
              <span className={styles.socialLabel}>Sign up with Facebook</span>
            </button>
          </div>

          {/* OR divider */}
          <div className={styles.divider} role="separator" aria-label="OR">
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerLabel}>OR</span>
            <span className={styles.dividerLine}></span>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            {/* Full Name */}
            <div className={styles.field}>
              <label htmlFor="su-name" className={styles.label}>Full Name</label>
              <input
                id="su-name"
                name="name"
                type="text"
                className={`${styles.input} ${hasError('name') ? styles.inputError : ''}`}
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={hasError('name') ? 'true' : 'false'}
                aria-describedby={hasError('name') ? 'su-name-error' : undefined}
              />
              {hasError('name') ? (
                <div id="su-name-error" className={styles.errorText} aria-live="polite">{errors.name}</div>
              ) : null}
            </div>

            {/* E-mail Address */}
            <div className={styles.field}>
              <label htmlFor="su-email" className={styles.label}>E-mail Address</label>
              <input
                id="su-email"
                name="email"
                type="email"
                className={`${styles.input} ${hasError('email') ? styles.inputError : ''}`}
                placeholder="Enter your e-mail"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={hasError('email') ? 'true' : 'false'}
                aria-describedby={hasError('email') ? 'su-email-error' : undefined}
              />
              {hasError('email') ? (
                <div id="su-email-error" className={styles.errorText} aria-live="polite">{errors.email}</div>
              ) : null}
            </div>

            {/* Password */}
            <div className={styles.field}>
              <label htmlFor="su-password" className={styles.label}>Password</label>
              <div className={styles.inputWrap}>
                <input
                  id="su-password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  className={`${styles.input} ${hasError('password') ? styles.inputError : ''}`}
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={hasError('password') ? 'true' : 'false'}
                  aria-describedby={hasError('password') ? 'su-password-error' : undefined}
                />
                <button
                  type="button"
                  className={styles.toggle}
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? 'Hide' : 'Show'}
                </button>
              </div>
              {hasError('password') ? (
                <div id="su-password-error" className={styles.errorText} aria-live="polite">{errors.password}</div>
              ) : (
                <div className={styles.hint}>Use 8 or more characters.</div>
              )}
            </div>

            {/* Submit */}
            <button type="submit" className={`btn btn--yellow ${styles.submit}`}>Create Account</button>

            {/* Bottom switch */}
            <p className={styles.switch}>
              <span>Already have an account?</span>
              <a href="/login" className={styles.switchLink}>Log In</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
