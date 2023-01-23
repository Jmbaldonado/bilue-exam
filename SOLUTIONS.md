# 🤔 Solution to the technical test

 1.  My approach to this project was to first establish a connection with a third-party API by obtaining the necessary key and waiting for the activation process to complete.
2. Next, I set up the repository and implemented a modular approach, including serverless configurations.
3. I then implemented a user module which demonstrated my proficiency with GraphQL.
4. In addition, I created a weather module and implemented an output Data Transfer Object (DTO) to structure the 
   data according to the requirements of the project. Finally, I deployed the project.
5. Deploy it.

## 🏋🏾‍♂️ Challenges
1. Experienced an interruption in internet connectivity during the technical examination.
2. Required a refresher on serverless YAML configurations
3. Incurred a delay of 30 minutes to 1 hour while awaiting activation of the provided API

## ⌛ Things to implement if given longer time
1. Implement a feature to calculate the distance between the user's current location and their destination, as well as providing information about the weather at the destination if given a longer time frame.
2. Implement unit testing.

## 💡 Reasons why choosing patterns/etc.
1.  a modular approach and adhered to principles of clean architecture, specifically the onion architecture, to 
    separate concerns between the database layer and the controller/resolver.
2. Utilized both GraphQL and REST, but favored GraphQL due to its ability to limit the amount of data returned to the front-end and reduce payload size.
3. Chose to use NestJS as the framework to demonstrate my proficiency with TypeScript and personal comfort level with the technology.
4. Customized error messages with i18n support and provided language options for English error messages, allowing for scalability in supporting multiple languages.
5. Utilized TypeORM as the Object-Relational Mapping (ORM) tool, due to my extensive experience working with it.

Overall the exam is amazing and quite fun to do so. Thank you Bilue for the opportunity! Please refer to the README.md to run the project.