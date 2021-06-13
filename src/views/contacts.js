import { View } from 'backbone.marionette'
import ContactView from './contact'
import contacts from '../templates/contacts.hbs'

export default View.extend({
  template: contacts,
  itemView: ContactView,
  itemViewContainer: '.contacts-container',
  triggers: {
    'click .add-contact-btn': 'addContact:clicked',
  },
})
