// Select form and feedback elements
const form = document.getElementById("authenticator-form");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

// Password strength validation function
function validatePassword(password) {
  let strength = 0;
  const feedbackMessages = [];

  // Check length
  if (password.length >= 8) {
    strength++;
  } else {
    feedbackMessages.push("Password must be at least 8 characters long.");
  }

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    strength++;
  } else {
    feedbackMessages.push("Add at least one uppercase letter.");
  }

  // Check for lowercase letters
  if (/[a-z]/.test(password)) {
    strength++;
  } else {
    feedbackMessages.push("Add at least one lowercase letter.");
  }

  // Check for numbers
  if (/\d/.test(password)) {
    strength++;
  } else {
    feedbackMessages.push("Add at least one number.");
  }

  // Check for special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength++;
  } else {
    feedbackMessages.push("Add at least one special character.");
  }

  // Return strength and feedback messages
  return { strength, feedbackMessages };
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = passwordInput.value;
  const { strength, feedbackMessages } = validatePassword(password);

  // Display feedback
  feedback.innerHTML = "";
  if (strength === 5) {
    feedback.innerHTML = "Password is strong!";
    feedback.className = "feedback-strong";
  } else if (strength >= 3) {
    feedback.innerHTML = "Password is moderate. Suggestions:<br>" + feedbackMessages.join("<br>");
    feedback.className = "feedback-moderate";
  } else {
    feedback.innerHTML = "Password is weak. Suggestions:<br>" + feedbackMessages.join("<br>");
    feedback.className = "feedback-weak";
  }
});
