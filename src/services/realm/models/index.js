import Realm from 'realm';
import User from './user';

const realm = new Realm({
  schema: [User.schema],
  schemaVersion: 0,
});

export default realm;
