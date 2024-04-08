// admin.js
document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('data-list');
            dataList.innerHTML = ''; // Clear previous data
            if (data.length === 0) {
                const li = document.createElement('li');
                li.textContent = 'No data available';
                dataList.appendChild(li);
            } else {
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    dataList.appendChild(li);
                });
            }
        })
        .catch(error => console.error('Error:', error));
}
