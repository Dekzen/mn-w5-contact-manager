import { View } from 'backbone.marionette'
import newContact from '../templates/new-contact.hbs'

export default View.extend({
  template: newContact,

  ui: {
    nameInput: '.contact-name-input',
    telInput: '.contact-tel-input',
    emailInput: '.contact-email-input',
  },

  events: {
    'submit .contact-form': 'onFormSubmit',
  },

  triggers: {
    'click .form-cancel-btn': 'form:canceled',
  },

  serializeData() {
    return _.extend(this.model.toJSON(), {
      isNew: this.model.isNew(),
    })
  },

  onFormSubmit(e) {
    e.preventDefault()

    this.trigger('form:submitted', {
      name: this.ui.nameInput.val(),
      tel: this.ui.telInput.val(),
      email: this.ui.emailInput.val(),
    })
  },
})
