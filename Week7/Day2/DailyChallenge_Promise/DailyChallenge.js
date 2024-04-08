document.getElementById('sunriseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const parisLat = document.getElementById('parisLat').value;
    const parisLong = document.getElementById('parisLong').value;
    const nyLat = document.getElementById('nyLat').value;
    const nyLong = document.getElementById('nyLong').value;

    const parisUrl = `https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLong}&formatted=0`;
    const nyUrl = `https://api.sunrise-sunset.org/json?lat=${nyLat}&lng=${nyLong}&formatted=0`;

    const fetchParisSunrise = fetch(parisUrl).then(response => response.json());
    const fetchNYSunrise = fetch(nyUrl).then(response => response.json());

    Promise.all([fetchParisSunrise, fetchNYSunrise])
        .then(data => {
            const parisSunrise = data[0].results.sunrise;
            const nySunrise = data[1].results.sunrise;
            document.getElementById('result').innerHTML = `Sunrise Time in Paris: ${parisSunrise}<br>Sunrise Time in New York: ${nySunrise}`;
        })
        .catch(error => {
            console.error('Error fetching sunrise time:', error);
        });
});