const request = require('supertest')
const app = require('../server/server')
const { query } = require('../server/models/dataModel')

//if we aren't in a node test environment, exit test process.
if (process.env.NODE_ENV !== 'test') process.exit();

// beforeAll((done) => {
//     const createUserTableQuery = `CREATE TABLE accounts(
//     u_id SERIAL PRIMARY KEY,
//     username VARCHAR UNIQUE,
//     password VARCHAR NOT NULL
//   );`;

//   const createAccountsTablePromise = new Promise((resolve, reject) => {
//     query(createUserTableQuery, undefined, (err, results) => {
//       if (err) reject();
//       resolve();
//       // console.log('Created temporary Accounts Table!');
//     });
//   })

// })

beforeAll((done) => {
  //clear database

  const promiseArray = [];
  // const dropTableQuery = 'DROP TABLE IF EXISTS accounts CASCADE;';



  // const dropTablePromise = new Promise((resolve, reject) => {
  //   query(dropTableQuery, undefined, (err, results) => {
  //   if (err) reject();
  //   resolve();
  //   console.log('Cleared Database Successfully.');
  //   })
  // });
  // promiseArray.push(dropTablePromise);

  //create table accounts
  const createUserTableQuery = `CREATE TEMPORARY TABLE accounts(
    u_id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR NOT NULL
  );`;

  const createAccountsTablePromise = new Promise((resolve, reject) => {
    query(createUserTableQuery, undefined, (err, results) => {
      if (err) reject();
      resolve();
      done();
      console.log('Created temporary Accounts Table!');
    });
  })
   promiseArray.push(createAccountsTablePromise);


  //create table messages
    // const createMessagesTableQuery = `CREATE TABLE messages(
    //   user_id INTEGER REFERENCES accounts(u_id),
    //   sent VARCHAR NOT NULL,
    //   response VARCHAR,
    // );`;
    
    // const createMessageTablePromise = new Promise((resolve, reject) => {
    //   query(createMessagesTableQuery, undefined, (err, results) => {
    //     if (err) reject();
    //     resolve();
    //     console.log('Created temporary Messages Table!');
    //   });
    // });
    // promiseArray.push(createMessageTablePromise);

    // Promise.all(promiseArray).then(data => done());
    // promiseArray.forEach(async(promise, ind) => {
    //   await promise;
    //   if (ind === (promiseArray.length-1)) done();
    // })
})

describe('Post Sign up request', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        username: 'hello',
        password: 'taloola',
      })
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('post')
  })
})

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})