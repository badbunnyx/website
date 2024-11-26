// Comment Handle
// Handle comment submission
const form = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list').querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Create a new comment element
    const newComment = document.createElement('li');
    newComment.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

    // Append the new comment to the list
    commentsList.appendChild(newComment);

    // Clear the form inputs
    form.reset();
});
