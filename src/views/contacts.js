import { View } from 'backbone.marionette'
import contact from '../templates/contact.hbs'

export default View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: contact,

  triggers: {
    'click .delete-contact': 'delete:clicked',
    'click .edit-contact': 'edit:clicked',
  },
})
