import { MnObject } from 'backbone.marionette'
import ContactsView from './views/contacts'

export default MnObject.extend({
  initialize(options) {
    this.router = options.router
    this.mainRegion = options.mainRegion
    this.contacts = options.contacts

    this.contacts.fetch()

    if (this.contacts.isEmpty()) {
      this.createSampleData()
    }
  },

  showContacts() {
    const contactsView = new ContactsView({
      collection: this.contacts,
    })

    this.listenTo(contactsView, 'addContact:clicked', this.newContact)
    this.listenTo(contactsView, 'child:delete:clicked', (contactView) => {
      contactView.model.destroy()
      console.log(contactView.model)
    })
    this.listenTo(contactsView, 'child:edit:clicked', (contactView) => {
      this.editContact(contactView.model.id)
      console.log(contactView.model.id)
    })

    this.region.showView(contactsView)

    // this._router.navigate('contacts');
  },

  newContact() {},
  editContact() {},

  //   createSampleData() {
  //     const data = [
  //       {
  //         id: 1,
  //         name: 'Terrence S. Hatfield',
  //         tel: '651-603-1723',
  //         email: 'TerrenceSHatfield@rhyta.com',
  //         avatar: '1.jpg',
  //       },
  //       {
  //         id: 2,
  //         name: 'Chris M. Manning',
  //         tel: '513-307-5859',
  //         email: 'ChrisMManning@dayrep.com',
  //         avatar: '2.jpg',
  //       },
  //       {
  //         id: 3,
  //         name: 'Ricky M. Digiacomo',
  //         tel: '918-774-0199',
  //         email: 'RickyMDigiacomo@teleworm.us',
  //         avatar: '3.jpg',
  //       },
  //       {
  //         id: 4,
  //         name: 'Michael K. Bayne',
  //         tel: '702-989-5145',
  //         email: 'MichaelKBayne@rhyta.com',
  //         avatar: '4.jpg',
  //       },
  //       {
  //         id: 5,
  //         name: 'John I. Wilson',
  //         tel: '318-292-6700',
  //         email: 'JohnIWilson@dayrep.com',
  //         avatar: '5.jpg',
  //       },
  //       {
  //         id: 6,
  //         name: 'Rodolfo P. Robinett',
  //         tel: '803-557-9815',
  //         email: 'RodolfoPRobinett@jourrapide.com',
  //         avatar: '6.jpg',
  //       },
  //     ]
  //   },
})
