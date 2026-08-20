const WHATSAPP_NUMBER = '917976582113';
const CONTACT_EMAIL = 'jaipursafari1@gmail.com';

// Premium visual polish and logo treatment.
const polish = document.createElement('style');
polish.textContent = `
.nav-whatsapp{min-height:42px!important;height:42px!important;padding:0 16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;border-radius:999px!important;font-size:14px!important;line-height:1!important;white-space:nowrap!important}
.nav-whatsapp svg{width:21px!important;height:21px!important;max-width:21px!important;max-height:21px!important;display:block!important;flex:0 0 21px!important}
.nav-whatsapp span{font-size:14px!important;line-height:1!important}
.floating-wa{width:62px!important;height:62px!important;padding:0!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:0!important}
.floating-wa svg{width:34px!important;height:34px!important;max-width:34px!important;max-height:34px!important;display:block!important}
.floating-wa span{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important}

/* Make the existing white-background PNG logo blend cleanly into the premium header. */
.site-header .brand-logo{width:58px!important;height:58px!important;max-width:58px!important;max-height:58px!important;min-width:58px!important;min-height:58px!important;object-fit:contain!important;padding:5px!important;border-radius:15px!important;background:#d4a84b!important;border:1px solid #e9c875!important;box-shadow:0 4px 18px rgba(0,0,0,.35)!important;mix-blend-mode:multiply!important;filter:contrast(1.12) saturate(1.2)!important}
.footer-brand .brand-logo{width:54px!important;height:54px!important;max-width:54px!important;max-height:54px!important;min-width:54px!important;min-height:54px!important;object-fit:contain!important;padding:4px!important;border-radius:13px!important;background:#d4a84b!important;border:1px solid #e9c875!important;mix-blend-mode:multiply!important;filter:contrast(1.12) saturate(1.2)!important}
@media(max-width:600px){.site-header .brand-logo{width:50px!important;height:50px!important;max-width:50px!important;max-height:50px!important;min-width:50px!important;min-height:50px!important}.footer-brand .brand-logo{width:48px!important;height:48px!important;max-width:48px!important;max-height:48px!important;min-width:48px!important;min-height:48px!important}}
`;
document.head.appendChild(polish);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.nav-whatsapp, .floating-wa').forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

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
