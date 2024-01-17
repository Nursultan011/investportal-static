document.addEventListener('DOMContentLoaded', function () {
  let step = 1;
  let registrantionForm = {
    type: 0,
    fio: "",
    email: "",
    password: "",
    password_repeat: "",
  };

  function closeModal() {
    let allModals = document.getElementById('authorizationSection');
    allModals.style.display = 'none';
  }

  function changeStep(newStep) {
    step = newStep;
    updateUI();
  }

  function selectRole(roleType) {
    registrantionForm.type = roleType;
    updateUI();
  }

  function submitRegistration(event) {
    event.preventDefault();
    // Добавьте здесь логику отправки формы регистрации
    console.log('Регистрационная форма', registrantionForm);
  }

  function submitLogin(event) {
    event.preventDefault();
    // Добавьте здесь логику отправки формы входа
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log('Email:', email, 'Password:', password);
  }

  function updateUI() {
    let allModals = document.querySelectorAll('.authorization__modal');
    allModals.forEach(modal => modal.style.display = 'none');

    let currentModal = document.querySelector('#authModalStep' + step);
    if (currentModal) {
      currentModal.style.display = 'block';
    }
  }

  // Присвойте функции к глобальным переменным, чтобы они были доступны в HTML
  window.closeModal = closeModal;
  window.changeStep = changeStep;
  window.selectRole = selectRole;
  window.submitRegistration = submitRegistration;
  window.submitLogin = submitLogin;

  updateUI();
});
