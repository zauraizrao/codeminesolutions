/* Compact footer contact form. Uses the same Google Sheets endpoint as the main contact form. */
(function () {
  const endpoint = 'https://script.google.com/macros/s/AKfycbwYToeOWdD6PeKziJQfJF5Tz_s3lFn2u1DoVOwspn4i4fw1FzKl14rMRDJUNkGqmT9d/exec';
  document.querySelectorAll('.footer-contact-form').forEach((form, index) => {
    const frame = form.querySelector('iframe');
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('[data-footer-status]');
    let submitted = false;
    if (!frame || !button) return;
    form.action = endpoint;
    form.method = 'POST';
    form.target = frame.name;
    frame.addEventListener('load', () => {
      if (!submitted) return;
      submitted = false;
      button.disabled = false;
      button.textContent = 'Send';
      if (status) { status.textContent = 'Thanks — we’ll be in touch.'; status.dataset.state = 'success'; }
      form.reset();
    });
    form.addEventListener('submit', (event) => {
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      const trap = form.querySelector('[name="website"]');
      if (trap && trap.value) { event.preventDefault(); return; }
      const validEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!name?.value.trim() || !validEmail || !message?.value.trim()) {
        event.preventDefault();
        if (status) { status.textContent = 'Please enter your name, a valid email, and a message.'; status.dataset.state = 'error'; }
        return;
      }
      submitted = true;
      button.disabled = true;
      button.textContent = 'Sending…';
      if (status) { status.textContent = 'Sending…'; status.dataset.state = ''; }
    });
  });

  // The shared home footer opens a modal on the homepage. On routes without
  // that modal, keep its main CTA useful by sending visitors to Contact.
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open-modal]');
    if (!trigger || document.getElementById('modal-panel')) return;
    event.preventDefault();
    window.location.href = '/contact/';
  });
}());
