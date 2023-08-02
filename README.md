# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

----

Step 1:
I started by developing the application using React.js. I used the useEffect hook to fetch data from TheMovieDB API. Initially, I encountered an error that required an API access key, so I logged in to TheMovieDB and obtained the API key. Once I had the key, I successfully fetched data from the API and checked its type.

Step 2:
I learned about fuzzy search and implemented it using the fuse.js package. I created an input tag to allow users to search for movies. The user's input was passed to the fuse.search method, and the filtered list of movies was displayed based on the search result.

Step 3:
To implement sorting based on the release date, I used the date-fns package. The filtered movies were passed to the compareDesc function to get a sorted list of movies based on the release date.

Step 4:
I implemented the like feature, which needed to be persisted. When a user clicks the like icon, it is updated in the backend (Node.js server with Express). I used react-icons to display the like icon and managed the like state between frontend and backend.

Step 5:
I implemented routing functionality using React Router. The user can see the list of movies on the / route and their favorite movies on the /favourites route.

Step 6:
I added a navigation bar with Home and Favorites links. Clicking on Home takes the user to the main page, and clicking on Favorites takes them to the favorites page.

Step 7:
I implemented pagination to display only 20 movies per page. I currently have 5 pages, showing a total of 100 movies. However, I haven't implemented routing for these pages yet.

Step 8:
I introduced a star rating feature using the voting_average field in the movie objects. I made it look beautiful by displaying stars based on the rating.

Step 9:
I implemented a modal component (MovieModal.js) that appears when a user clicks on a movie image. The modal displays the title, description, and a close button for the user to close the modal.


