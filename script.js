const userData = {
  username: "Free Me",
  posts: 1,
  followers: 250,
  likes: 1200,
};

function populateUserData() {
  document.getElementById("account-username").textContent =
    "@" + userData.username;
  document.getElementById(
    "posts-count"
  ).textContent = `Posts: ${userData.posts}`;
  document.getElementById(
    "followers-count"
  ).textContent = `Followers: ${userData.followers}`;
  document.getElementById(
    "likes-count"
  ).textContent = `Likes: ${userData.likes}`;
}

window.onload = populateUserData;
