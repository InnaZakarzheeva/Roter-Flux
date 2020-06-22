import Realm from 'realm';

export default class User extends Realm.Object {}
User.schema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'string',
    userName: {type: 'string', default: ''},
  },
};
