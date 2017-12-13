import { Meteor } from 'meteor/meteor';
import { Parties } from '../imports/collections/parties';

Meteor.startup(() => {
  if (Parties.find().count() === 0) {
	  Parties.insert({
		  "name" : "Pablo",
		  "description" : "Licenciado"
	  });
	  
	  Parties.insert({
		  "name" : "Pedro",
		  "description" : "Ingeniero"
	  });
  }
});
