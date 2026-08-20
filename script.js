const WHATSAPP_NUMBER = '917976582113';
const CONTACT_EMAIL = 'jaipursafari1@gmail.com';

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Activate all WhatsApp buttons.
document.querySelectorAll('.nav-whatsapp, .floating-wa').forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

// Replace the placeholder contact details in the footer.
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

    // Open WhatsApp with the complete enquiry.
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');

    // Also prepare an email enquiry in the visitor's mail client.
    const subject = 'Website Enquiry - Jaipur Safari Tour & Travels';
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
}
