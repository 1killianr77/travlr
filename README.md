# Travlr

# Architecture
# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
# Why did the backend use a NoSQL MongoDB database?
The Express HTML customer-facing page uses MVC architecture to handle data, logic, and the application interface. Its project structure is organized into the API and server folders. Each of these components has controllers and routes which handle controller interactions for the MVC architecture. The app API section contains the model and the server contains the view.

The models, controllers, config, and routes for the Express HTML website were each developed in JavaScript. The views were developed using generated HTML from Handlebars.

The Angular project follows a different structure. There are two main folders: app and assets. Assets contains the images shared by application components. App contains components, models, and services. Angular components handle specific application functions, including CRUD functionality and data handling. The model used in the Angular project is the same as the one used in the Express HTML customer-facing page. Angular services handle requests, such as HTTP client requests.

Angular components consist of a CSS, HTML, spec.TS and TS file. The views were developed using HTML. For this project, I did not use CSS. However, the CSS file can build upon the view developed using HTML. The spec.TS file was auto-generated during npm installs. I developed the component logic using TypeScript.

This project used the NoSQL database MongoDB for the backend. MongoDB improves upon SQL databases with its schema-less organization and faster indexing. 

# Functionality
# How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
# Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
JSON provides data modeling to JavaScript. It organizes data about an object into key-value pairs. MongoDB uses BSON, or binary JSON, for storing documents. Because the application uses JSON for object modeling, data can easily be passed between components in the MEAN stack. Data is converted to BSON and stored in MongoDB. It is then converted back to JSON and may be accessed by Express, Angular, and Node.js. 

I first developed this project using static HTML webpages. I then refractored the code to accept dynamically rendered JSON data from Handlebars. Next, I developed a database and moved the data displayed in views to the backend. I followed a similar approach with the single page application. First, I developed static web application. I then developed API to handle CRUD functionality. Finally, I added authentication to the webpage. 

The benefit to this approach was that I could visualize the completed webpage during the early development stages. I then moved data from static webpages to the backend. Because the webpages were dynamically rendered, I could reuse UI components. I minimized repetitive and redundant code, which improved my project's reusability and maintenance. The finished project was easier to debug and included components which could be reused in future projects.

# Testing
# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
A full stack application is best supported by a well-tested and designed API. This application used API methods to access CRUD functionality with the database. API GET methods correspond to read requests. They can be used to access a specific database entry, as with /api/trips/:tripCode, or a list of entries, as with /api/trips. API POST methods correspond to create requests. They are used to add an entry to the database. API PUT methods correspond to update requests. They are used to update a specific database entry. API DELETE methods correspond to delete requests. They are used to delete a specific database entry or a list of database entries.

Proper implementation of an API with a full stack application requires the application to return the correct response. The API must anticipate errors at each step in the process. It must also return the correct error code when the request cannot be handled. If the request is accepted and the appropriate action is completed, the API must return the correct success code. Error handling and API responses allow clients to determine what went wrong.

Another important consideration with APIs is security. The website may include routes which are protected. An unauthorized user should not be able to access a protected route. The API must perform authentication on the request to secure these endpoints.

# Reflection
# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has provided me with a variety of new skills. I learned about development with the MEAN stack. I worked with new software, including Postman and VSCode. I managed GitHub repositories from the command line. I refamiliarized myself with JavaScript, which I had not worked with in over 10 years. Most importantly, I gained experience troubleshooting errors. The final project in this course included a variety of deprecated functions. I learned how to research and update my code based on updates to Angular and Express. After completing this project, I feel very comfortable reading error logs and identifying where problems in code originate. These skills will be invaluable to me as I spend time working with code that is outdated or written by other people.
