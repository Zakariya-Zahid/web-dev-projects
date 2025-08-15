document.addEventListener("DOMContentLoaded", () => {
  let searchInput = document.getElementById("search_input");
  let searchButton = document.getElementById("search_btn");
  let errorContainer = document.getElementById("error");
  let errorMessage = document.getElementById("error_message");
  let movieCard = document.getElementById("movie_card");
  let movieImage = document.getElementById("movie_image");
  let movieTitle = document.getElementById("movie_title");
  let movieYear = document.getElementById("movie_year");
  let movieRating = document.getElementById("movie_rating");
  let moviePlot = document.getElementById("movie_plot");
  let movieRuntime = document.getElementById("movie_runtime");
  let movieCountry = document.getElementById("movie_country");
  let movieBoxOffice = document.getElementById("movie_boxoffice");
  let API = "60b412e9";

  searchButton.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      let movieInput = searchInput.value.trim();
      if (!movieInput) return;
      let movieData = await fetchMovieData(movieInput);
      displayMovieData(movieData);
      searchInput.value = "";
    } catch (error) {
      showError();
    }
  });
  async function fetchMovieData(movie) {
    const url = `https://www.omdbapi.com/?apikey=${API}&t=${movie}`;
    let response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Movie Data!");
    let data = await response.json();
    console.log(data);
    return data;
  }
  function displayMovieData(showMovie) {
    if (showMovie.Response === "False") {
      showError();
      movieCard.classList.add("hidden");
      return;
    }
    errorContainer.classList.add("hidden");
    movieCard.classList.remove("hidden");
    movieImage.onerror = function () {
      movieImage.src =
        "https://cdn-icons-png.flaticon.com/512/13434/13434972.png";
    };

    movieImage.src =
      showMovie.Poster ||
      "https://cdn-icons-png.flaticon.com/512/13434/13434972.png";

    movieTitle.textContent = `Movie: ${showMovie.Title}`;
    moviePlot.textContent = showMovie.Plot;
    movieYear.textContent = showMovie.Year;
    movieRating.textContent = showMovie.imdbRating;
    movieRuntime.textContent = showMovie.Runtime;
    movieCountry.textContent = showMovie.Country || "N/A";
    movieBoxOffice.textContent = showMovie.BoxOffice || "N/A";
  }
  function showError() {
    errorContainer.classList.remove("hidden");
    errorMessage.textContent = "Failed to fetch Movie Data!";
  }
});
