# Knonbull Student News Website Documentation

<h1>Overview</h1>

<p>This is a <strong>Student News Website</strong> for <strong>Knonbull</strong>, designed to allow students to browse news articles. </p>
<p><strong>Supervisor: </strong>Lynn (The Founder of Knonbull)  </p>
<p><strong>Team Leader: </strong>Jiahong Liu</p>

<h2>Preview</h2>
<h3>Current News Page</h3>
<img width="1899" alt="news page" src="https://github.com/JahongLiu/Student-News-Page/assets/121676539/a4c5f7bc-26d9-4f70-83cd-ab0006997102">
<h3>Current Management Page</h3>
<img width="1899" alt="management page" src="https://github.com/JahongLiu/Student-News-Page/assets/121676539/c8d4b10c-e31a-4e91-aea4-01a392933efe">
<h3>Current Add Article Page</h3>
<img width="1410" alt="addArticle" src="https://github.com/JahongLiu/Student-News-Page/assets/121676539/d6efd321-6e70-4af5-a368-50a82b0f9194">

<h1>Tech Stack</h1>
<p>It's built using the <strong>MERN stack</strong> (MongoDb,Express.js, React.js, Node.js) with <strong>TypeScript.</strong></p>
<p>P.S. <strong>'react-ant-admin'</strong>, a React.js based dashboard was used for the management</p>
<h1>Requirements</h1>
<ul>
  <li>
    Node.js v14+
  </li>
  <li>
    MongoDB v4.4+
  </li>
    <li>
    React.js v17.0.0+ (The project's dependencies will handle the installation of React.js when you run "npm install")
  </li>
</ul>

<h1>Installation and Setup</h1>
<p>1. Clone the repository and navigate into the main directory</p>
<p>2. To install dependencies, navigate to the <strong>"front"</strong> directory and run: </p>
<p><strong>npm install</strong></p>
<p>3. also, navigate to the the <strong>"server"</strong> directory and run: </p>
<p><strong>npm install</strong></p>
<p>4. To start the front, run:</p>
<p><strong>npm run dev</strong></p>
<p>5. To start the server, run:</p>
<p><strong>npm run server</strong></p>

<h1>Architecture</h1>
<p>This application follows the standard MERN stack architecture, with a React frontend and an Express/Node.js backend. The frontend is located in the front directory, and the server side is in the server directory.</p>

<h1>API Documentation</h1>
<h2>API Directory Structure</h2>
<p>server</p>
<p>-api</p>
<ul>
  <li>article.js</li>
  <li>category.js</li>
  <li>draft.js</li>
  <li>index.js</li>
  <li>login.js</li>
  <li>tag.js</li>
  <li>user.js</li>
</ul>

<h1>Database</h1>
<p>The website uses <strong>MongoDB</strong>, a NoSQL database, as the primary data store.</p>
<h2>Database Schema</h2>
<p>The application consists of the following four collections:</p>
<p><strong>1. User Collection:</strong> This collection stores information about the users of the system. Each document in the user collection has the following fields:
<ul>
  <li>name: String - The username of the user</li>
  <li>password: String - The hashed password of the user</li>
  <li>salt: String - The unique salt used in the password hashing process</li>
  <li>userType: Number - The type of the user (e.g., admin, regular user, etc.)</li>
  <li>avatar: String - The URL of the user's avatar image</li>
  <li>collectArticle: Array - An array storing the articles collected by the user</li>
  <li>collectComment: Array - An array storing the comments collected by the user</li>
</ul>
</p>
<p><strong>2. Category Collection:</strong> This collection is used to store various categories under which articles can be posted. It has the following field:
<ul>
  <li>name: String - The name of the category</li>
</ul>
</p>
<p><strong>3. Article Collection:</strong> This collection is used to store articles posted by users. Each document in the article collection has the following fields:
<ul>
  <li>title: String - The title of the article</li>
  <li>desc: String - A brief description of the article</li>
  <li>categoryId: ObjectId - A reference to the associated category in the Category Collection</li>
  <li>charge: Number - The cost to access the article, if applicable</li>
  <li>banner: String - The URL of the banner image for the article</li>
  <li>content: String - The content of the article</li>
</ul>
</p>
<p><strong>4. Pay Collection:</strong> This collection is used to record transactions where users pay to access certain articles. Each document in the pay collection has the following fields:
<ul>
  <li>userId: String - The user who made the payment</li>
  <li>articleId: String - The article for which the payment was made</li>
</ul>
</p>
<h2>Database Notes</h2>
<p>1. Database operations are performed using the <strong>Mongoose API</strong>, which provides a simple and intuitive interface for creating, reading, updating, and deleting documents.</p>
<p>2. password storage is handled with security in mind. User passwords are hashed using the SHA1 algorithm, and a unique salt is generated for each user to prevent rainbow table attacks.</p>
<p>3. The database is initialized with an admin user when the application is first run, allowing immediate administrative access.</p>
<p>4. with MongoDB and Mongoose, data enforcement is done at the application level rather than the database level, offering flexibility in data structures and types.</p>





