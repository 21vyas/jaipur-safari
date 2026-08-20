const WHATSAPP_NUMBER = '917976582113';
const CONTACT_EMAIL = 'jaipursafari1@gmail.com';
const EMAIL_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

// Premium header/logo treatment.
const polish = document.createElement('style');
polish.textContent = `
.nav-whatsapp{min-height:42px!important;height:42px!important;padding:0 16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;border-radius:999px!important;font-size:14px!important;line-height:1!important;white-space:nowrap!important}
.nav-whatsapp svg{width:21px!important;height:21px!important;max-width:21px!important;max-height:21px!important;display:block!important;flex:0 0 21px!important}
.nav-whatsapp span{font-size:14px!important;line-height:1!important}
.floating-wa{width:62px!important;height:62px!important;padding:0!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:0!important}
.floating-wa svg{width:34px!important;height:34px!important;max-width:34px!important;max-height:34px!important;display:block!important}
.floating-wa span{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important}
.site-header .brand{gap:0!important;align-items:center!important}
.site-header .brand-logo{width:300px!important;height:78px!important;max-width:300px!important;max-height:78px!important;min-width:300px!important;min-height:78px!important;object-fit:contain!important;object-position:left center!important;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;mix-blend-mode:normal!important;filter:none!important}
.site-header .brand>span{display:none!important}
.footer-brand{gap:0!important}
.footer-brand .brand-logo{width:260px!important;height:70px!important;max-width:260px!important;max-height:70px!important;min-width:260px!important;min-height:70px!important;object-fit:contain!important;object-position:left center!important;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;mix-blend-mode:normal!important;filter:none!important}
.footer-brand>span{display:none!important}
@media(max-width:900px){.site-header .brand-logo{width:250px!important;height:68px!important;max-width:250px!important;max-height:68px!important;min-width:250px!important;min-height:68px!important}.footer-brand .brand-logo{width:230px!important;height:62px!important;max-width:230px!important;max-height:62px!important;min-width:230px!important;min-height:62px!important}}
@media(max-width:600px){.site-header .brand-logo{width:205px!important;height:58px!important;max-width:205px!important;max-height:58px!important;min-width:205px!important;min-height:58px!important}.footer-brand .brand-logo{width:200px!important;height:54px!important;max-width:200px!important;max-height:54px!important;min-width:200px!important;min-height:54px!important}}
`;
document.head.appendChild(polish);

function applyLogo() {
  document.querySelectorAll('.site-header .brand-logo, .footer-brand .brand-logo').forEach((img) => {
    const isHeader = img.closest('.site-header');
    const width = isHeader ? '300px' : '260px';
    const height = isHeader ? '78px' : '70px';
    img.src = 'images/logo.png?v=20260820-4';
    img.alt = 'Jaipur Safari Tour & Travels Pvt. Ltd.';
    img.style.setProperty('width', width, 'important');
    img.style.setProperty('height', height, 'important');
    img.style.setProperty('max-width', width, 'important');
    img.style.setProperty('max-height', height, 'important');
    img.style.setProperty('min-width', width, 'important');
    img.style.setProperty('min-height', height, 'important');
    img.style.setProperty('padding', '0', 'important');
    img.style.setProperty('background', 'transparent', 'important');
    img.style.setProperty('border', '0', 'important');
    img.style.setProperty('border-radius', '0', 'important');
    img.style.setProperty('box-shadow', 'none', 'important');
    img.style.setProperty('mix-blend-mode', 'normal', 'important');
    img.style.setProperty('filter', 'none', 'important');
  });
  document.querySelectorAll('.site-header .brand>span, .footer-brand>span').forEach((el) => el.remove());
}
applyLogo();

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
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const date = data.get('date') || '';
    const vehicle = data.get('vehicle') || '';
    const pickup = data.get('pickup') || '';
    const destination = data.get('destination') || '';
    const requirement = data.get('message') || '';

    const emailPayload = {
      name,
      phone,
      date,
      vehicle,
      pickup,
      destination,
      message: requirement,
      _subject: 'New Website Enquiry - Jaipur Safari Tour & Travels',
      _template: 'table',
      _url: window.location.href
    };

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending Enquiry...';
    }

    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Email submission failed');
      }

      alert('Enquiry sent successfully to jaipursafari1@gmail.com. Thank you!');
      quoteForm.reset();
    } catch (error) {
      console.error('Email enquiry error:', error);
      alert('Email could not be sent. Please check the activation email from FormSubmit, including Spam/Junk, or use the WhatsApp button.');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
}
