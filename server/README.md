<h1 > Node.js CRUD Challenge</h1>
<h3 > Task Control Server #W3lcomeTasks</h3>

<br/>
<img src="https://raw.githubusercontent.com/eliveltonsf/w3lcome-tasks/main/client/public/demo-server.gif"/>

<br />

<p id="badges">
  <img src="https://img.shields.io/badge/-NODE-000?style=for-the-badge&logo=nodedotjs"/>
  <img src="https://img.shields.io/badge/-EXPRESS-000?style=for-the-badge&logo=EXPRESS"/>
  <img src="https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript"/>
  <img src="https://shields.io/badge/-swagger-000?style=for-the-badge&logo=swagger"/>
</p>

<br />

<h2 id="technologies" name="technologies">
🚀 Used technologies
</h2>

- [Node.js](https://nodejs.org/pt-br) using the framework [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/) for element typing
- [Hexagonal Architecture](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c) for working with connectors and adapters
- [Swagger](https://swagger.io/) to document all methods implemented in the api

<br />

<h2 id="technologies" name="technologies">
🎯 What I learned from this project
</h2>

In this api development project, I learned how the pagination flow of an information listing works, as well as implemented the basics of a hexagonal architecture, which allows us to decouple every business rule from our implementation, causing new implementations to be used in a different way. way where you don't change your code.

<br />
<h2 id="technologies" name="technologies">
⌨️ Prerequisites
</h2>

Before starting, you will need to have the following tools installed on your machine: [git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/) e [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).
Furthermore it is recommended to use an editor to work with the code as [VSCode](https://code.visualstudio.com/download).

#### :tada: Start the project and generate the database

```bash
# Clone the repository in some directory of your computer
$ git clone https://github.com/eliveltonsf/w3lcome-tasks

# Enter in the repository
$ cd w3lcome-tasks

# Enter in the repository server
$ cd server

# Install the dependencies
$ yarn install

# Start the backend
$ yarn dev
```

<br />
<h2 id="technologies" name="technologies">
▶️ Application Demonstration

#### :gear: You can test the API

- [ ] Install Insomnia Core - <a href="https://insomnia.rest/download/"> Download </a>

- [ ] After installing, download the request structure created for insomina. <a href="https://raw.githubusercontent.com/eliveltonsf/w3lcome-tasks/main/client/public/w3lcome-tasks.json"> w3lcome-tasks.json </a>

<blockquote>
  Importing the json link into insomnia:
  <br />
load the Insomnia_project_task.json file
<br />
<br />
<img src="https://uploaddeimagens.com.br/images/004/256/317/original/import_url_insomnia.jpeg?1670804205">
<br />
</blockquote>
<br />

#### :vertical_traffic_light: Routes

The server will start at port 3333, every request is sent by parameters to the back end, either by insomnia or in a web application, always taking into account the rules developed in the routes

##### List Tasks

As the listing was implemented with pagination, the route receives an offset value as a parameter to define which page will be returned

<blockquote>
http://localhost:3333/tasks?offset=1
</blockquote>

response

```json
{
  "tasks": [
    {
      "id": "519af13e-8f8f-4a42-be75-9eaa541cab7d",
      "title": "Apreender React",
      "isDone": false
    },
    {
      "id": "4ba4c79e-0582-4409-9377-3fb9e04a1fe2",
      "title": "Estudar NodeJS",
      "isDone": true
    },
    {
      "id": "05427df5-ad47-441c-a7fb-9ecf9db905d8",
      "title": "Praticar TypeScript",
      "isDone": false
    }
  ],
  "totalPages": 1
}
```

Insomina

<img src="https://uploaddeimagens.com.br/images/004/482/402/original/list.png?1685051932"/>

<br/>

##### Create Task

<blockquote>
http://localhost:3333/tasks
</blockquote>

```json
{
  "title": "New task description"
}
```

response

```json
{
  "task": {
    "id": "29efc9ea-d3f2-43d8-a71e-8cf576850ca9",
    "title": "New task description",
    "isDone": false
  },
  "message": "Task created successfully!"
}
```

Insomina

<img src="https://uploaddeimagens.com.br/images/004/482/409/original/create.png?1685052464"/>

<br/>

##### Update Task

<blockquote>
http://localhost:3333/29efc9ea-d3f2-43d8-a71e-8cf576850ca9
</blockquote>

```json
{
  "isDone": true
}
```

response

```json
{
  "task": {
    "id": "29efc9ea-d3f2-43d8-a71e-8cf576850ca9",
    "title": "New task description",
    "isDone": true
  },
  "message": "Task updated successfully!"
}
```

Insomina

<img src="https://uploaddeimagens.com.br/images/004/482/418/original/update.png?1685052690"/>

<br/>

##### Delete Task

<blockquote>
http://localhost:3333/8054ed82-5d37-4bae-bd5f-10f64c5f535f
</blockquote>

response

```json
{
  "message": "Task deleted successfully!"
}
```

Insomina

<img src="https://uploaddeimagens.com.br/images/004/482/419/original/delete.png?1685052786"/>

<br/>

</h2>

<h2 id="technologies" name="technologies">
⌨️ Documentation of routes in swagger
</h2>

After starting the project, you will have access to an endpoint configured to document and test all the functioning of your routes.

<blockquote>
  http://localhost:3333/api-docs/
</blockquote>

<img src="https://uploaddeimagens.com.br/images/004/482/427/original/swagger.png?1685053331"/>

<hr>

Made with 🧡 By Elivelton Ferreira. [Get in touch!](https://www.linkedin.com/in/eliveltonsf/) :calling:
