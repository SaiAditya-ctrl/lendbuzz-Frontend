# Step 1:
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






![image](https://github.com/SaiAditya-ctrl/lendbuzz/assets/56829774/802b10bd-629a-437e-b026-ce87823c2604)
