import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-storage.js";

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// Get elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const uid = document.getElementById("uid");
const fileInput = document.getElementById("fileInput");
const profileImage = document.getElementById("profileImage");
const editProfile = document.getElementById("editProfile");
const saveProfile = document.getElementById("saveProfile");
const logout = document.getElementById("logout");

// Fetch user data from Firestore
async function loadProfile() {
    const user = auth.currentUser;
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            username.innerText = docSnap.data().username;
            email.innerText = docSnap.data().email;
            uid.innerText = `UID: ${user.uid}`;

            // Load profile image
            const imageRef = ref(storage, `profile_pictures/${user.uid}`);
            getDownloadURL(imageRef).then((url) => {
                profileImage.src = url;
            }).catch(() => {
                profileImage.src = "default-profile.png";
            });
        }
    }
}

// Edit Profile
editProfile.addEventListener("click", () => {
    let newName = prompt("Enter new username:");
    if (newName) {
        username.innerText = newName;
    }
});

// Save Profile
saveProfile.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (user) {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, { username: username.innerText });
        alert("Profile updated!");
    }
});

// Upload Profile Picture
fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const user = auth.currentUser;

    if (user && file) {
        const imageRef = ref(storage, `profile_pictures/${user.uid}`);
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        profileImage.src = url;
    }
});

// Logout
logout.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html"; // Redirect to login page
});

// Load profile on page load
window.onload = loadProfile;