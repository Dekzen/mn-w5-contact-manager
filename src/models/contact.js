import { Model } from 'backbone'

export default Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: null,
  },
})
