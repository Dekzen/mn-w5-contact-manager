import AppRouter from 'marionette.approuter'

export default AppRouter.extend({
  routes: {
    '': 'home',
  },

  home() {
    this.navigate('contacts', {
      trigger: true,
      replace: true,
    })
  },
})
