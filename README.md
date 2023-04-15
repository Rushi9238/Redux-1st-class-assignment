# Hosted link : https://redux-1st-class-assignment.vercel.app/

## Tech Used :- ReactJS,Redux



## Summary
Implemented a React App With the Filtering Feature and Routing,and used Redux for the State Management.

 ### App contains following Components

- Home Component
- Product Component
- Contact Component
- Redux Component

 
## Steps
 1. First intall Redux library `npm i redux`
 2. Then intall react-redux library `npm i react-redux`
 3. Create Store file and import this file to index.js file
 4. Then `import {Provider} from 'react-redux`
 5. Wrapp the our parent Component APP to Provider
 6. Inside Provider pass key as a store and there value set the our store file function
 8. Create Reducer file and reducer nothing but is JS function take two parameter 1. intialValue 2. is action and return the processing intialValue
 9. Which data pass to the store there call eventListener and add action
 10. Also is function create asction by using dispatch
 11. pass the data as object form there is one type key and their is pass value is string and second key pass our data pass to store
 12. Then whenever this data are used this component they use useSelector hook its take callback function and they store in on varivbale this data are present in object form disturcture the object and get this value whenever is used.


 ### Thank you
