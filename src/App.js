import { Application } from 'backbone.marionette'
import Bb from 'backbone'
import RootView from './views/root'
import ContactsCollection from './collections/contacts'
import Router from './routes'
import Controller from './controller'

const App = Application.extend({
  region: '#app',

  initialize() {
    const contacts = new ContactsCollection()
    const router = new Router()
    const controller = new Controller({
      contacts,
      router,
    })

    router.processAppRoutes(controller, {
      contacts: 'showContacts',
      'contacts/new': 'newContact',
      'contacts/edit/:id': 'editContact',
    })
  },

  onStart(options) {
    this.showView(new RootView(options))
    Bb.history.start()
  },
})

export default App
