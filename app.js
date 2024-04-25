document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const jobItems = document.querySelectorAll('.job-item');

    jobItems.forEach(function(item) {
        const jobTitle = item.querySelector('h2').innerText.toLowerCase();
        if (jobTitle.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

