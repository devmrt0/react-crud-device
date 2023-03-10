const user = [{
  username: "admin",
  password: "admin123",
}]
localStorage.setItem('users', JSON.stringify(user));
let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {

        // authenticate
        if(url.endsWith('/login') && opts.method === 'POST') {
          // get parameters from post request
          let params = JSON.parse(opts.body);
         

          // find if any user matched with login credentials
          let filteredUsers = users.filter(user => user.username === params.username.username && user.password === params.username.password );

          if(!filteredUsers.length)
            return reject('Username or password is incorrect')

          let user = filteredUsers[0];
          let responseJson = {
            ...user,
            token: 'fake-jwt-token'
          }
          resolve({ ok: true, json: () => Promise.resolve(responseJson)});
          return;
        }

        // get users
        if(url.endsWith('/users') && opts.method === 'GET') {
          if(opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            resolve({ok: true, json: () => Promise.resolve(users)});
          } else {
            reject('unauthorized');
          }
          return;
        }

        // get user by id
        if(url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          if(opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            // find user by id in users array
            let urlParts = url.split('/');
            let id = parseInt(urlParts[urlParts.length -1]);
            let matchedUsers = users.filter(user => user.id === id);
            let user = matchedUsers.length ? matchedUsers[0] : null;

            // respond
            resolve({ ok: true, json: () => user});
          } else {
            reject('Unauthorized');
          }
        }

        // register user
        if(url.endsWith('/users/register') && opts.method === 'POST') {
          // get new user object from post body
          let newUser = JSON.parse(opts.body);
          console.log(users);
          // validation
          let duplicateUser = users.filter(user => user.username === newUser.username);

          if(duplicateUser.length) {
            reject(`username: ${newUser.username} is already taken`);
            return;
          }

          // save new user
          newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          resolve({ok:true, json: () => Promise.resolve({})});
          return;
        }

        // delete
        if(url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
          if(opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            // find user by id in users array
            let urlParts = url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            let filteredUsers = users.filter(user => user.id !== id);
            localStorage.setItem('users', JSON.stringify(filteredUsers));
            // respond 200 ok
            resolve({ok: true, json: ()=>Promise.resolve({})});
          } else {
            reject('Unauthorized');
          }
          return;
        }

        realFetch(url, opts).then(response => resolve(response)).catch(err => reject(err));
      }, 500);
    });
  }
}