import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './SignUp.module.css';

// PUBLIC_INTERFACE
export default function SignUp() {
  /**
   * Sign Up page UI matching the design system:
   * - Uses local CSS module with global tokens for precise spacing, typography, and colors
   * - Inputs: Full Name, Email Address, Password, Confirm Password, Terms checkbox
   * - Inline validation states and messages
   * - Password show/hide toggles
   * - CTA button styled to design tokens
   */
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    agree: false,
  });

  const [touched, setTouched] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = (() => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) {
      e.email = 'Email address is required';
    } else {
      // Simple RFC2822-ish email test
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = 'Please enter a valid email';
    }
    if (!form.password) {
      e.password = 'Password is required';
    } else if (form.password.length < 8) {
      e.password = 'Password must be at least 8 characters';
    }
    if (!form.confirm) {
      e.confirm = 'Please confirm your password';
    } else if (form.confirm !== form.password) {
      e.confirm = 'Passwords do not match';
    }
    if (!form.agree) e.agree = 'You must agree to the Terms & Privacy';
    return e;
  })();

  const hasError = (field) => Boolean(errors[field] && (touched[field] || submitted));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      // Mock-only: no API call here; purely UI
      alert('Account created successfully!');
      setForm({ name: '', email: '', password: '', confirm: '', agree: false });
      setTouched({});
      setSubmitted(false);
    }
  };

  return (
    <div>
      <Header />
      <section className={styles.wrap}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.panel}>
              <h1 className={styles.title}>Create your account</h1>
              <p className={styles.subtitle}>
                Join Eventify to explore and create memorable events.
              </p>

              <form className={styles.form} onSubmit={onSubmit} noValidate>
                {/* Full Name */}
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${hasError('name') ? styles.inputError : ''}`}
                    aria-invalid={hasError('name') ? 'true' : 'false'}
                    aria-describedby={hasError('name') ? 'name-error' : undefined}
                  />
                  {hasError('name') ? (
                    <div id="name-error" className={styles.errorText}>{errors.name}</div>
                  ) : null}
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${hasError('email') ? styles.inputError : ''}`}
                    aria-invalid={hasError('email') ? 'true' : 'false'}
                    aria-describedby={hasError('email') ? 'email-error' : undefined}
                  />
                  {hasError('email') ? (
                    <div id="email-error" className={styles.errorText}>{errors.email}</div>
                  ) : null}
                </div>

                {/* Password */}
                <div className={styles.field}>
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="password"
                      name="password"
                      type={showPw ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={form.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.input} ${hasError('password') ? styles.inputError : ''}`}
                      aria-invalid={hasError('password') ? 'true' : 'false'}
                      aria-describedby={hasError('password') ? 'password-error' : undefined}
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
                    <div id="password-error" className={styles.errorText}>{errors.password}</div>
                  ) : (
                    <div className={styles.hint}>Use 8 or more characters.</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className={styles.field}>
                  <label htmlFor="confirm" className={styles.label}>Confirm Password</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="confirm"
                      name="confirm"
                      type={showPw2 ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={form.confirm}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.input} ${hasError('confirm') ? styles.inputError : ''}`}
                      aria-invalid={hasError('confirm') ? 'true' : 'false'}
                      aria-describedby={hasError('confirm') ? 'confirm-error' : undefined}
                    />
                    <button
                      type="button"
                      className={styles.toggle}
                      onClick={() => setShowPw2((v) => !v)}
                      aria-label={showPw2 ? 'Hide confirm password' : 'Show confirm password'}
                    >
                      {showPw2 ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {hasError('confirm') ? (
                    <div id="confirm-error" className={styles.errorText}>{errors.confirm}</div>
                  ) : null}
                </div>

                {/* Terms */}
                <div className={`${styles.field} ${styles.termsRow}`}>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      onBlur={() => setTouched((p) => ({ ...p, agree: true }))}
                      aria-invalid={hasError('agree') ? 'true' : 'false'}
                      aria-describedby={hasError('agree') ? 'agree-error' : undefined}
                    />
                    <span>
                      I agree to the <a href="#tos" className={styles.link}>Terms of Service</a> and{' '}
                      <a href="#privacy" className={styles.link}>Privacy Policy</a>
                    </span>
                  </label>
                  {hasError('agree') ? (
                    <div id="agree-error" className={styles.errorText}>{errors.agree}</div>
                  ) : null}
                </div>

                {/* Submit */}
                <button type="submit" className={`${styles.submit} btn btn--yellow`}>
                  Create Account
                </button>

                {/* Switch to login */}
                <p className={styles.switchHint}>
                  Already have an account? <a href="/login" className={styles.link}>Log In</a>
                </p>
              </form>
            </div>

            <div className={styles.aside} aria-hidden="true">
              <div className={styles.brandCard}>
                <div className={styles.brandTicket} />
                <div className={styles.brandText}>
                  <div className={styles.brandTitle}>Eventify</div>
                  <div className={styles.brandTag}>Plan. Discover. Enjoy.</div>
                </div>
              </div>
              <ul className={styles.bullets}>
                <li>Discover events locally and globally</li>
                <li>Create and manage your own events</li>
                <li>Get personalized recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
