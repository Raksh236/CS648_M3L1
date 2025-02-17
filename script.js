// 1. Create a string array that contains your five favorite movies and display the second movie
let favourite_movies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Pulp Fiction",
];
console.log(favourite_movies[1]); // Display the second movie

// 2. Declare an array using the function constructor method, and assign 5 favorite movies
let movies = new Array(5);
movies[0] = "Inception";
movies[1] = "The Matrix";
movies[2] = "Interstellar";
movies[3] = "The Dark Knight";
movies[4] = "Pulp Fiction";
console.log(movies[0]); // Display the first movie

// 3. Add a new movie to the 3rd position and display the length of the array
movies.splice(2, 0, "The Prestige"); // Adds "The Prestige" to the 3rd position
console.log(movies.length); // Display the length of the array

// 4. Remove the first movie using `delete` and display the array contents
delete movies[0]; // Remove the first movie
console.log(movies); // Display the contents of the array

// 5. Use a `for/in` loop to iterate through the array and display each movie
for (let index in movies) {
  console.log(movies[index]);
}

// 6. Use a `for/of` loop to iterate through the array and display each movie
for (let movie of movies) {
  console.log(movie);
}

// 7. Use a `for/of` loop to display the movies in a sorted view
movies.sort(); // Sort the array alphabetically
for (let movie of movies) {
  console.log(movie);
}

// 8. Create a new array `leastFavMovies` and display both arrays
let leastFavMovies = ["Twilight", "The Room", "Birdemic"];
console.log("Movies I like:");
for (let movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:");
for (let movie of leastFavMovies) {
  console.log(movie);
}

// 9. Merge the two arrays using `concat()` and display them in reverse sorted order
let allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse(); // Sort in reverse order
console.log(allMovies);

// 10. Use an array function to return just the last item in the array
console.log(allMovies[allMovies.length - 1]); // Display the last movie

// 11. Use a method to return the first item in the array
console.log(allMovies[0]); // Display the first movie

// 12. Retrieve the indices of disliked movies and add movies you like
leastFavMovies.forEach((movie, index) => {
  let movieIndex = allMovies.indexOf(movie);
  if (movieIndex !== -1) {
    allMovies[movieIndex] = movies[index]; // Replace disliked movies with liked ones
  }
});
console.log(allMovies);

// 13. Create a multi-dimensional array and filter out only movie names
let movieRankings = [
  ["Inception", 1],
  ["The Matrix", 2],
  ["Interstellar", 3],
  ["The Dark Knight", 4],
  ["Pulp Fiction", 5],
];
let movieNames = movieRankings
  .filter((movie) => typeof movie[0] === "string")
  .map((movie) => movie[0]);
console.log(movieNames);

// 14. Create an anonymous function to display employees' names
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let showEmployee = function (empArray) {
  console.log("Employees:");
  empArray.forEach((employee) => console.log(employee));
};
showEmployee(employees);

// 15. Filter false, null, 0, and blank values from an array
function filterValues(arr) {
  return arr.filter((value) => value);
}
console.log(filterValues([58, "", "abcd", true, null, false, 0])); // [58, "abcd", true]

// 16. Get a random item from an array
function getRandomItem(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));

// 17. Get the largest number from a numeric array
function getLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(getLargestNumber(numbers)); // 10
