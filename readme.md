NEMEN E-commerce Web Application Steps

1. Frontend Side

   1. Create a React application
      - Open terminal in VS code
      - Then write 'npx create-react-app frontend'
      - to launch the react app, we need to go on the frontend folder and then we type 'npm start'
      - Delete App.css, App.test.jd, logo svg, and setUpTests.js. This will give an error
      - To correct the error, go to App.js and remove "import logo from './logo.svg'" and "import './App.css';", and the content in return
      - Replace the code under return with the content in body container in html template created earlier and copy the content of the css file of the template to index.css (Remeber to remove the comments from the html body pasted under return scope)
      - Inside css file, copy the following inside body tag: "-webkit-font-smoothing: antialiased;" and "-moz-osx-font-smoothing: grayscale;"
      - Inside index.css file again after body tag add #root{height: 100%}. Root is from the index.html that is located inside public folder
      - From our templte folder, copy the Images folder to public folder inside frontend folder.
      - If you check developer console there will be an error. To fix the error we need to change "class" to "className"
   2. Creating data.js inside scr folder. This file contains javascript array from were data will be loaded
   3. Exporting data from data.js using "export default data;" and modifying the Apps.js to be able to use the data we stored inside data.js
