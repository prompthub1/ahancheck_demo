// نسخه ساده برای تست
document.addEventListener('DOMContentLoaded', function() {
    fetch('components/header.html')
        .then(r => r.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            console.log('هدر لود شد');
        });
});