 <h5 id="title" align="center"><img style="width: 300px; height:200px;" src="https://uploaddeimagens.com.br/images/004/478/866/original/logo-tasks.png?1684927823"/>
 </h5>

 <h4 id="title" align="center"></h4>

<h4 align="center"></h4>

<br/>
<br/>

<h3 id="description" align="center">
  Task Control #W3lcomeTasks
</h3>

<br/>

<h3>
  <p id="badges" align="center">
    <img src="https://img.shields.io/badge/-NODE-000?style=for-the-badge&logo=nodedotjs"/>
    <img src="https://img.shields.io/badge/-EXPRESS-000?style=for-the-badge&logo=EXPRESS"/>
    <img src="https://shields.io/badge/-swagger-000?style=for-the-badge&logo=swagger"/>
    <img src="https://img.shields.io/badge/-REACT-000?style=for-the-badge&logo=REACT"/>
    <img src="https://img.shields.io/badge/next-000?style=for-the-badge&logo=nextdotjs"/>
    <img src="https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript"/>
    <img src="https://img.shields.io/badge/Sass-000?style=for-the-badge&logo=sass"/>
    
  </p>
<hr/>

Application to control tasks with the entire flow of manipulation such as creation, change of status, deletion and listing with pagination with a limit of 5 items per page.

</h3>

<br />

- [Title and image](#title)
- [Badges](#badges)
- [Description](#description)
- [Status of project](#status)
- [Project's goal](#objective)
- [Functionalities](#functionalities)
- [Prerequisites](#prerequisites)
- [Server Demo](#serverdemo)
- [Client Demo](#clientdemo)
- [Technologies](#techonologies)

<br />

<h4 id="status" align="center">
  Project README 🚀 Finished ✔️
</h4>

<h2 id="objective" name="objective">
🎯 Project's goal
</h2>

This project is the result of a challenge for the Full Stack React Full vacancy at [W3lcome](https://w3lcome.com/), where it is divided into two fronts, we have a server with the entire backend designed in Hexagonal Architecture and a client where it was developed with Nexts.Js using typescript.

<br />

<h2 id="functionalities" name="functionalities">
📋 Functionalities
</h2>

- [x] - GET: endpoint can receive two numerical values, namely, limit per page and the page, and thus present the corresponding tasks.
- [x] - POST: endpoint accepts an object in the body of its call containing the task's title, because as a premise every task starts with the status not completed.
- [x] - PATCH: endpoint accepts the identifier (id) of the task and an object in its body containing the value to be updated, be it the title being non-mandatory or the status being mandatory.
- [x] - DELETE: endpoint accepts the identifier (id) of the task to perform a search for the specific task and delete it from the list.

<br/>

<h2 id="prerequisites" name="prerequisites">
⌨️ Prerequisites
</h2>

To download the project repository on your machine, you will need to run the following commands:

```bash
# Clone the repository in some directory of your computer
$ git clone https://github.com/eliveltonsf/w3lcome-tasks.git

# Enter in the repository
$ cd w3lcome-tasks
```

In this repository you will find the backend api in the server folder, to start run the commands:
<br/>
OBS: to run this command you must be inside the w3lcome-tasks repository

```bash
# Enter in the repository server
$ cd server

# Install the dependencies
$ yarn install

# Start application server
$ yarn dev
```

📋 [See api server documentation](https://github.com/eliveltonsf/w3lcome-tasks/tree/main/server#-task-control-server-w3lcometasks)
<br/>
<br/>

In this repository you will find the front end application in the client folder, to start run the commands:
<br/>
OBS: to run this command you must be inside the w3lcome-tasks
repository

```bash
# Enter in the repository client
$ cd client

# Install the dependencies
$ yarn install

# Start application client
$ yarn dev
```

📋 [See the client documentation](https://github.com/eliveltonsf/w3lcome-tasks/tree/main/client#-task-control-client-w3lcometasks)
<br/>
<br/>
<br />

<h2 id="serverdemo" name="serverdemo">
🎥 Server demo 
</h2>
<br/>
<img src="https://raw.githubusercontent.com/eliveltonsf/w3lcome-tasks/main/client/public/demo-server.gif"/>

<br />
<br />
<br />

<h2 id="clientdemo" name="clientdemo">
🎥 Client demo 
</h2>
<br/>
<img src="https://raw.githubusercontent.com/eliveltonsf/w3lcome-tasks/main/client/public/demo-client.gif"/>
<br />
<br />
<br />
<h2 id="techonologies" name="technologies">
🚀 Technologies
</h2>

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React.js](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Swagger](https://swagger.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Yarn](https://yarnpkg.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

<hr>

Made with 🧡 By Elivelton Ferreira. [Get in touch!](https://www.linkedin.com/in/eliveltonsf/) :calling:
