<p align="center"><img src="./assets/logo.png" width="200" height="auto" /></p>

# Epycure back-end test

To demonstrate your back-end skills, you are asked to **fill the gaps in a custom Trello x Algolia integration**, served by a Node+Express server.
The test is quite short: it **has been designed to be completed in about 2 hours**.

We'll discuss your work (choices, code syntax, mistakes if there are some, etc.) during a review call after you have completed the assignment.

**Carefully read all the instructions, then give yourself a limited time.**
If you struggle to finish it, value your time and don't spend days on it. Just submit your best effort.

⚠️ If you think something is wrong with the test (doesn't run as expected, missing instructions, ...), please email me at [nicolas@epycure.com](mailto:nicolas@epycure.com).

## 🚀 Objectives

The goal of this back-end test is to assess your skills on:
- installing and running a Node.js + PostgreSQL development environment;
- using SDKs;
- making API calls to third-party services;
- manipulating webhooks;
- writing PostgreSQL queries;
- writing some unit tests with Jest;
- understanding basics of performance and security;
- adapting to an existing architecture;
- following instructions and looking for answers in documentations.

## 🎓 Instructions

The server should be able to:
- create Trello cards through a secured route;
- listen to Trello webhooks to save created and updated cards into a local database;
- synchronize the Trello cards content from the database with Algolia.

The exercise is to write some code **only** where the `/* TODO: ... */` instructions are:
- [./src/routes/cards.js](./src/routes/cards.js): write the endpoint to create cards (see [API reference](#api-reference) below);
- [./src/routes/cards.test.js](./src/routes/cards.test.js): write the the tests for this endpoint;
- [./src/routes/webhooks.js](./src/routes/webhooks.js): write the Trello webhook that saves cards to the database;
- [./src/jobs/sync-algolia.js](./src/jobs/sync-algolia.js): write the job that sync Algolia from the database.


## 📦 Installing the project

```
git clone git@github.com:Epycure/back-end-test.git epycure-back-end-test
cd epycure-back-end-test
npm install
cp .env.sample .env
```

Alternatively, you can [download the source code](https://github.com/Epycure/back-end-test/archive/master.zip) and unzip it.

### Create a local database

1. [Install PostgreSQL](https://www.postgresqltutorial.com/install-postgresql/) if you haven't already.
2. Connect to Postgres using a terminal and run `CREATE DATABASE epycure_backend_test;`.
3. Copy the connexion string into your `.env` file (default should be `postgres://<user>:<password>@127.0.0.1:5432/epycure_backend_test?ssl=false`).
4. Run `npm run install:db` to create the tables.

### Create a Trello account

1. Create a free [Trello](https://trello.com) account if you don't have one already, then visit https://trello.com/app-key to generate credentials.
2. Create a new board `Epycure back-end test`.
3. Open the board, and append `.json` into the URL bar to get the board ID (example: `https://trello.com/b/W6RusfMK/epycure-back-end-test.json`).
4. Copy the credentials and the board ID into your `.env` file.

### Create an Algolia account

1. Create a free [Algolia](https://algolia.com) account if you don't have one already, then login to your dashboard.
2. Create a new application and then go to "API Keys" to get its credentials (you need the Admin API Key).
3. Create a new index `cards`.
4. Copy the credentials and the index name into your `.env` file.

**Note:** You may be contacted by sales after you register to Algolia services.

### Running the project

You first need to expose your local API so that Trello can send events to your webhooks. For this, run `npx ngrok http 5000` to listen to `localhost:5000`. **Keep that terminal open for the whole test**.

On another terminal, run your server:

```
npm run dev
```

and then, on a third terminal, run:

```
npm run install:webhooks https://<NGROK_ID>.ngrok.io
```

Your server will be available at [localhost:5000](http://localhost:5000). Changes made to the code should reload automatically.

**Important note:** if for any reason you have to restart ngrok, the webhooks URL will therefore change, so you'll need to register the webhooks again.

- To run the Algolia sync job: `npm run job:sync-algolia`.
- To run tests: `npm run test`.

## 🧰 API reference

<table>
  <thead>
    <tr>
      <th>Endpoint</th>
      <th>Action</th>
      <th>Payload</th>
      <th>Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>POST /cards</code></td>
      <td>Create a new card in Trello</td>
      <td><div class="highlight highlight-source-json"><pre>{
  "name": "My new Trello Card !",
  "idList": "5fa106c99173787897d5ff3e",
  "description": "This is a nice description :).",
  "due": "2020-12-24",
}</pre></div></td>
      <td>
        <details>
          <summary>See response body</summary>
          <div class="highlight highlight-source-json"><pre>{
    "ok": true,
    "data": {
        "id": "5fa264697c310c4623b40eda",
        // ...
    }
}</pre></div>
        </details>
      </td>
    </tr>
  </tbody>
</table>

In case of parameters error, the server returns a `422` error code.
In case of a dependency error, the server returns a `424` error code.

## 🗒 Additional notes 

- You'll find specific information and help where the `/* TODO: ... */` instructions are.
- You should not need to add any package to the project.
- I've shared a [Postman collection](./epycure-backend-test.postman_collection.json) in this repository to save you some time when testing your endpoint. You'll need to update the Bearer Token and the `idList` (here's [how to find yours](https://customer.io/actions/trello/)).

---

## 📪 Once you're done

Send me an email at [nicolas@epycure.com](mailto:nicolas@epycure.com) with subject `[Back-end test]`, and containing:
- either a link to the GitHub repository of your project (if you want to keep it private, add [@noclat](http://github.com/noclat) as collaborator),
- **OR** a ZIP **WITHOUT the `node_modules` folder**;
- **your next availabilities** so I can schedule a review call with you.

**Thanks for participating, and good luck!**  
_Nicolas, CTO at Epycure.com_