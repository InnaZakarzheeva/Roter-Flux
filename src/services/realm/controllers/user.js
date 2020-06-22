import realm from '../models/index';

export const getUser = () =>
  realm.objects('User')['0']
    ? realm.objects('User')['0']
    : realm.objects('User');

export const setUserName = name => {
  realm.write(() => {
    getUser().userName = name;
  });
};

export const setUser = () =>
  new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        if (Object.keys(getUser()).length === 0) {
          resolve(realm.create('User', {_id: 'user_id'}));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
