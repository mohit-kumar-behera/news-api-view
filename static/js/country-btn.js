const countryContainer = document.getElementById("country");

countryContainer.addEventListener('click', function(e) {
    const btn = e.target.closest('.country-btn');
    if (!btn) return null;
    
    const code = btn.dataset.code;
    location.href = `/news/${code}`;
})