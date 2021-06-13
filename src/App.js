import { Application } from 'backbone.marionette'
import Bb from 'backbone'
import RootView from './views/root'

const App = Application.extend({
  region: '#app',

  initialize() {
    console.log('initialized')
  },

  onStart(options) {
    this.showView(new RootView(options))
    Bb.history.start()
  },
})

export default App
