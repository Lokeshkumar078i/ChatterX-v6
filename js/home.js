// Redirect to Profile Page
document.getElementById("profileIcon").addEventListener("click", () => {
    window.location.href = "profile.html";
});

// Redirect to Settings Page
document.getElementById("settingsIcon").addEventListener("click", () => {
    window.location.href = "settings.html";
});

// Dummy Friend List (Replace with Firebase)
const friends = [
    { username: "Aryan", uid: "001" },
    { username: "Mayank", uid: "002" },
    { username: "Riya", uid: "003" }
];

const friendsContainer = document.getElementById("friendsContainer");

// Display Friends
friends.forEach(friend => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${friend.username}</span> <button>Chat</button>`;
    friendsContainer.appendChild(li);
});

// Search Friends
document.getElementById("searchInput").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredFriends = friends.filter(friend => friend.username.toLowerCase().includes(query));

    // Clear and Re-add Filtered Friends
    friendsContainer.innerHTML = "";
    filteredFriends.forEach(friend => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${friend.username}</span> <button>Chat</button>`;
        friendsContainer.appendChild(li);
    });
});
// Open Profile Page
function openProfile() {
    window.location.href = "profile.html";
}