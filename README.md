## ⚡ Coderockr Fullstack Test - Igor Lourenço

###### 👾 Available on [https://coderockr-fullstack-test-igor.vercel.app](https://coderockr-fullstack-test-igor.vercel.app/).

---
### Sections
1. **🔎 About**
2. **💻 Technologies**
    * System requirements
    * Used technologies
    * Used libraries
    * Why these technologies?
3. **🛠 Installing**
4. **🎉 Using & testing**

---
### 1. 🔎 About
This blog was developed as part of the selection for web developer frontend at Coderockr. I developed in six days, fulfilling the minimum requirements described in the test statement. In the next sections, you can see instructions for testing. Good reading.

---
### 2. 💻 Technologies
* **System requirements**
  * This application can be run on any operating system, as long as [Node.js](https://nodejs.org/en/) is installed.
  
* **Used Technologies**
  * [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): programming language that served as the basis for the application, both for the frontend and the backend;
  * [TypeScript](https://www.typescriptlang.org/): JavaScript superset, used to improve development;
  * [ReactJS](https://pt-br.reactjs.org/): library written in JavaScript to facilitate the creation of user interfaces;
  * [Node.js](https://nodejs.org/en/): event-driven JavaScript runtime, designed to build scalable network applications;
  * [Next.js](https://nextjs.org/): ReactJS framework, where frontend and backend can be integrated to deliver applications that are easy to maintain, develop and perform well;
  * [MongoDB](https://www.mongodb.com/): no-sql database where blog data was stored. 
  
* **Used libraries**
  * [Chakra UI](https://chakra-ui.com/): component library that facilitates the creation of the interface;
  * [React Icons](): icon library developed for integration with ReactJS applications.
  
* **Why these technologies?**
The choice of technologies was based on the context and complexity of the application, also taking into account the delivery time. For "small" and not very complex applications, as is the case with the blog, Next.js is the ideal framework, considering the treatment it does on static pages, pre-rendering them and optimizing SEO (crucial in blogs ). In addition, it is also possible to use the Next.js feature that allows backend functions to be developed in the form of * serverless functions *, developed in Node.js. * Serverless functions are ideal for the situation, as they are recommended in cases where data processing is not complex and massive.

Given this, we have advantages in using Next.js for its backend and frontend treatment, bringing the two together in one application, avoiding over-engineering and, at the same time, separating backend and frontend in a healthy way for development, maintenance and performance.

--- 
### 3. 🛠 Installing
1. Clone this project for your machine;

2. Navigate to the project folder and open the command prompt of your choice;

3. Once in the directory, execute the command to install the necessary libraries for the project to work:
   `npm install`or `yarn install`, depending on your preferred package manager;
   
4. After installation, it is necessary to configure the development environment:
   * I renamed the `.env.example` file to` .env`
   * fill in the variable `MONGODB_URI` with the URI that gives access to the database where the blog information is. In my case, I used the following: `mongodb+srv://admincoderockr:admincoderockr@cluster0.vvdeb.mongodb.net/coderockrtest?retryWrites=true&w=majority`.

5. Now it's time to run the application, typing `npm run dev` or` yarn dev`, depending on your package manager.

6. The blog must be running on [http://localhost:3000](http://localhost:3000/).


---
### 4. 🎉 Using & testing
* Blog readers:
   * on the blog's homepage, you can see all the articles that have been written and, by clicking on one, read it in its entirety;
   * it is also possible to request contact with the writers, leaving your details and a message.

* Administrators
   * the blog admin area is at [http: // localhost: 3000 / admin] (http: // localhost: 3000 / admin /);
   * on the admin homepage, you can monitor which readers have requested a conversation, their contact details and the message left;
   * it is also possible to write a new article by clicking on the `New Article` button and submitting it.
   
---
###### I hope the project documentation is clear. Any questions, please contact me by email.

---
Made With ❤️ & TypeScript by Igor Lourenço
