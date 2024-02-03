function addPost() {
    var postContent = document.getElementById("post-content").value;
    var feedPost = document.getElementById("feed-post");

    var newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `
                <img src="profile_image.png" alt="profile-pic">
                <p id="username">Username</p>
                <p id="userId">User Id</p>
                <br>
                <p class="post-text">${postContent}</p>
                <div class="actions">
                    <img src="heart.png" alt="" class="action-icons heart">
                    <img src="comment.png" alt="" class="action-icons comment">
                </div>
            `;

    // Insert the new post at the beginning of the feedPost element
    feedPost.insertBefore(newPost, feedPost.firstChild);
}

document.getElementById("post-content").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addPost();
    }
});
