function toggleContentClose() {
    var contentElement = document.querySelector('.free-menu');

    if (contentElement.style.display === 'none' || contentElement.style.display === '') {
        contentElement.style.display = 'flex'; // Show the content
    } else {
        contentElement.style.display = 'none'; // Hide the content
    }
}

function toggleContent() {
    var contentElement = document.querySelector('.free-menu');

    if (contentElement.style.display === 'none' || contentElement.style.display === '') {
        contentElement.style.display = 'flex'; // Show the content
    } else {
        contentElement.style.display = 'none'; // Hide the content
    }
}