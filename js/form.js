export class FormValid {
  constructor(form) {
    this.form = form;
    this.btnSubmit = document.querySelector('button[type="submit"]');

    this.handelSubmitForm = this._submitForm.bind(this);

    this._init();
  }

  _init() {
    this.btnSubmit.addEventListener("click", this.handelSubmitForm);
  }

  _submitForm(event) {
    event.preventDefault();
    const newData = new Date();

    if (!this.form.checkValidity()) {
      this.form.classList.add("invalid");
    } else {
      this.form.classList.remove("invalid");

      const formData = new FormData(this.form);
      formData.append("newData", newData);
      const userData = {};

      for (const [name, value] of formData) {
        userData[name] = value;
      }

      this.form.reset();
      console.log(userData);
    }
  }
}
