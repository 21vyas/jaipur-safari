const WHATSAPP_NUMBER = '917976582113';
const CONTACT_EMAIL = 'jaipursafari1@gmail.com';

// Final visual polish: keep WhatsApp controls compact and professional even when browser CSS is cached.
const polish = document.createElement('style');
polish.textContent = `
.nav-whatsapp{min-height:42px!important;height:42px!important;padding:0 16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;border-radius:999px!important;font-size:14px!important;line-height:1!important;white-space:nowrap!important}
.nav-whatsapp svg{width:21px!important;height:21px!important;max-width:21px!important;max-height:21px!important;display:block!important;flex:0 0 21px!important}
.nav-whatsapp span{font-size:14px!important;line-height:1!important}
.floating-wa{width:62px!important;height:62px!important;padding:0!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:0!important}
.floating-wa svg{width:34px!important;height:34px!important;max-width:34px!important;max-height:34px!important;display:block!important}
.floating-wa span{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important}
.brand-mark{width:48px!important;height:48px!important;min-width:48px!important;border-radius:12px!important;display:grid!important;place-items:center!important}
.brand-mark:before{width:31px!important;height:31px!important}
.brand-wheel{font-size:17px!important}
`;
document.head.appendChild(polish);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Activate all WhatsApp buttons.
document.querySelectorAll('.nav-whatsapp, .floating-wa').forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

// Replace the contact details in the footer.
document.querySelectorAll('footer p').forEach((p) => {
  if (p.textContent.includes('Phone:')) {
    p.innerHTML = `Phone: <a href="tel:+${WHATSAPP_NUMBER}">+91 79765 82113</a>`;
  }
  if (p.textContent.includes('Email:')) {
    p.innerHTML = `Email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
  }
});

const vehicleSelect = document.getElementById('vehicle');
document.querySelectorAll('[data-vehicle]').forEach((link) => {
  link.addEventListener('click', () => {
    const vehicle = link.getAttribute('data-vehicle');
    if (vehicleSelect && vehicle) vehicleSelect.value = vehicle;
  });
});

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hello Jaipur Safari Tour & Travels,',
      '',
      'I would like to enquire about vehicle rental.',
      `Name: ${data.get('name') || ''}`,
      `Mobile: ${data.get('phone') || ''}`,
      `Travel Date: ${data.get('date') || ''}`,
      `Vehicle: ${data.get('vehicle') || ''}`,
      `Pickup: ${data.get('pickup') || ''}`,
      `Destination: ${data.get('destination') || ''}`,
      `Requirement: ${data.get('message') || ''}`
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');

    const subject = 'Website Enquiry - Jaipur Safari Tour & Travels';
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
}
