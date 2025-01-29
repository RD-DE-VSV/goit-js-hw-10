const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Initialize formData object
let formData = {
  email: '',
  message: '',
};

// Load data from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
});

// Save form data to local storage on input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Remove spaces around input
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Check if all fields are filled
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Log the form data, clear local storage and reset form
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
