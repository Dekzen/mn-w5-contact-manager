import { CollectionView } from 'backbone.marionette'
import ContactView from './contact'
import contacts from '../templates/contacts.hbs'

export default CollectionView.extend({
  template: contacts,
  childView: ContactView,
  childViewContainer: '.contacts-container',
  triggers: {
    'click .add-contact-btn': 'addContact:clicked',
  },
})
