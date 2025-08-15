document.addEventListener("DOMContentLoaded", () => {
  let searchBox = document.getElementById("search_box");
  let searchButton = document.getElementById("search_btn");
  let profileContainer = document.getElementById("profile_container");
  let profileImage = document.getElementById("profile_img");
  let userName = document.getElementById("username");
  let userBio = document.getElementById("bio");
  let profileLink = document.getElementById("profile_link");
  let userRepoCount = document.getElementById("repo_count");
  let userFollowerCount = document.getElementById("follower_count");
  let userFollowingCount = document.getElementById("following_count");
  let errorMessageContainer = document.getElementById(
    "error_message_container"
  );
  let errorMessage = document.getElementById("error_message");
  profileContainer.classList.add("hidden");
  searchButton.addEventListener("click", async () => {
    let userProfileInput = searchBox.value.trim();
    if (!userProfileInput) return;
    try {
      let userData = await fetchUserData(userProfileInput);
      displayUserData(userData);
    } catch (error) {
      showError();
    }
  });
  async function fetchUserData(user) {
    let API_URL = `https://api.github.com/users/${user}`;
    let response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to find the User!");
    let data = await response.json();
    console.log(data);
    return data;
  }
  function displayUserData(showUser) {
    errorMessageContainer.classList.add("hidden");
    profileContainer.classList.remove("hidden");
    profileImage.src = showUser.avatar_url;
    userName.textContent = showUser.name || "No Name Available";
    userBio.textContent = showUser.bio || "No Bio Available";
    profileLink.textContent = showUser.html_url;
    userRepoCount.textContent = showUser.public_repos;
    userFollowerCount.textContent = showUser.followers;
    userFollowingCount.textContent = showUser.following;
  }

  function showError() {
    errorMessageContainer.classList.remove("hidden");
    profileContainer.classList.add("hidden");
    errorMessage.textContent = "Error: Failed to find the User!";
  }
});
