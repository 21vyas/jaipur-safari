document.getElementById('year').textContent = new Date().getFullYear();

const vehicleSelect = document.getElementById('vehicle');
document.querySelectorAll('[data-vehicle]').forEach((link) => {
  link.addEventListener('click', () => {
    const vehicle = link.getAttribute('data-vehicle');
    if (vehicleSelect && vehicle) vehicleSelect.value = vehicle;
  });
});

document.getElementById('quoteForm').addEventListener('submit', (event) => {
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

  // Replace this number with the owner's WhatsApp number before launch.
  const whatsappNumber = '91XXXXXXXXXX';
  if (whatsappNumber.includes('X')) {
    alert('Thank you! The enquiry form is ready. The owner WhatsApp number still needs to be configured.');
    return;
  }
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
});
