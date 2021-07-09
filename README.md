# Getting Started with URL Shortener App (Backend)

<br />
<p>This app creates the api's (having the encryption/decryption logic) which will be consumed by FE. </p>

<br />

#### Technology used:

1. NodeJS
2. Express (to write backend APIs)
3. MYSQL Database
4. Mocha-Chai for testcases

#### To start with this app please follow below steps:

1. clone this app using command <i>git@github.com:SumitJadiya/URL_shortner_node_backend.git</i>.
2. run "npm install" to install dependencies.
3. Setup Mysql in local and then create a file .env in the main(same directory having readme) folder, this file will have the contents: <br/>
   - SERVER_PORT = <your_server_port>
   - DBHOST = '<your_mysql_db_host>'
   - DBUSER = '<your_mysql_db_user>'
   - DBPASSWORD = '<your_mysql_db_pass>'
   - DBDATABASE = '<your_mysql_db_database>'
   - TESTING_URL = '<your_local_url>'+SERVER_PORT<br/>
4. once the dependencies are installed, and MYSQL setup is complete. You're good to work on this repo.

#### PSB the list of folder/files and their uses:

1. Models -> The list of all the models (In our case, the only model is URL)
2. Controllers -> The core logic of encryption/decryption
3. Routes -> Routes through which FE can access the APIs
4. config -> Configuration related file (In our case, MYSQL database connection details)
5. test -> Test related files

### Algorithm used for Encryption/Decryption

<p>The longString is encoded to a shortString by generating random characters from a string set. Here, I've used a String (which consists of all the characters, numbers) to generate the random characters. </p>
<p>As soon as the string is encoded, the string is stored in database (MYSQL in this app)</p>
<p>When User tries to encode a longString again and again, I'm checking if the URL is already present i'm returning the short URL as it is <b>without generating</b> new one.</p>
