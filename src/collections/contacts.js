import { LocalStorage } from 'backbone.localstorage'
import { Collection } from 'backbone'

import ContactModel from '../models/contact'

export default Collection.extend({
  model: ContactModel,
  localStorage: new LocalStorage('contacts'),
})
