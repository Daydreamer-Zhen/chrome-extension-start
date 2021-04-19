// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', ({ color }) => {
    let colorInside = '#F9CAF7';
    changeColor.style.backgroundColor = color;
});
