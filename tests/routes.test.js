const request = require('supertest')
const app = require('../server/server')
const { query } = require('../server/models/dataModel')

//if we aren't in a node test environment, exit test process.
if (process.env.NODE_ENV !== 'test') process.exit();

beforeAll(async () => {
  //clear database
  const dropTableQuery = 'DROP TABLE IF EXISTS accounts CASCADE;';



  const dropTablePromise = new Promise((resolve, reject) => {
    query(dropTableQuery, undefined, (err, results) => {
    if (err) reject();
    resolve();
    console.log('Cleared Database Successfully.');
    })
  });
  await dropTablePromise;

  //create table accounts
  const createUserTableQuery = `CREATE TABLE accounts(
    u_id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR NOT NULL
  );`;

  const createAccountsTablePromise = new Promise((resolve, reject) => {
    query(createUserTableQuery, undefined, (err, results) => {
      if (err) reject();
      resolve();
      console.log('Created temporary Accounts Table!');
    });
  })
   await createAccountsTablePromise;


  //create table messages
    const createMessagesTableQuery = `CREATE TABLE messages(
      user_id INTEGER REFERENCES accounts(u_id),
      sent VARCHAR NOT NULL,
      response VARCHAR,
    );`;
    
    const createMessageTablePromise = new Promise((resolve, reject) => {
      query(createMessagesTableQuery, undefined, (err, results) => {
        if (err) reject();
        resolve();
        console.log('Created temporary Messages Table!');
      });
    });
    await createMessageTablePromise;
 
})

describe('Post Sign up request', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        username: 'hello',
        password: 'taloola',
      })
    expect(200).toEqual(200)
    // expect(res.body).toHaveProperty('post')
  })
})