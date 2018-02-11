import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from '/imports/startup/client/routes.jsx';

import '/imports/ui/stylesheets/style.css';
Meteor.startup(() => {
  render(routes(), document.getElementById('app'));
});
