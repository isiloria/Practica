function handleLikeClick(event) {
    const postElement = event.target.closest('.post');
    const likesCountElement = postElement.querySelector('.likes-count');
    

    let likesCount = parseInt(likesCountElement.textContent);
    likesCount++;
    likesCountElement.textContent = likesCount;
}

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', handleLikeClick);
});