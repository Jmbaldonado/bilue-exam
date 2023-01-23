## Weather API

Backend Service for Weather API

## Installation

1. Install [Node.js and npm](https://www.npmjs.com/get-npm) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Clone this repository:

```bash git clone https://github.com/Jmbaldonado/bilue-exam.git

```

1. This project uses PostgresSQL. We recommend install [Docker](https://docs.docker.com/desktop/mac/install/).
   After install, run:

   ```bash
   docker run --name weatherapi -p 5432:5432 -e POSTGRES_USER=weatherapi -e POSTGRES_PASSWORD=weatherapi -d postgres
   ```

2. Create [.env](.env).


## Running the app

1.  To run the app for the first time and everytime there are changes in the migration files, execute these commands:

```bash
$ npm run build
$ npm run migration:up
```

Followed by any of the commands in step 2.

1. If there is no need for any migrations, the app can be run using any of these command:

   ```bash
   # development
   $ npm run start

   # watch mode
   $ npm run start:dev

   # production mode
   $ npm run start:prod
   ```
   
2. For deploying it (using serverless), run the following command:

 ```bash
   $ npm install -g serverless
   $ sls offline
   ```


## Stay in touch

- Author
    - [John Michael Baldonado](mailto:baldonadojm0216@gmail.com)