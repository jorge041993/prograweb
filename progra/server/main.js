import { Meteor } from 'meteor/meteor';
import { InfoDB } from '../imports/api/info.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (InfoDB.find().count() === 0) {
    InfoDB.insert({
      nombre : 'Fulanito',
      cantidad : 1,
      extra : '',
      owner : 1,
      usuario : 'Admin'
      
    });
  }
});

