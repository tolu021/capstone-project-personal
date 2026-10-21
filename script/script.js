document.addEventListener('DOMContentLoaded', () => {
  // 1. Database of planet facts
  const planetsData = {
    mercury: {
      name: "Mercury",
      type: "Terrestrial",
      description: "The smallest planet in our solar system and closest to the Sun.",
      gravity: "3.7",
      mass: "0.330",
      period: "88",
      temp: "440",
      moons: "0",
      diameter: "4879",
      distance: "57.9",
      image: "assets/mercury.jpg"
    },
    venus: {
      name: "Venus",
      type: "Terrestrial",
      description: "Spinning in the opposite direction to most planets, it is the hottest planet in our solar system.",
      gravity: "8.87",
      mass: "4.87",
      period: "225",
      temp: "737",
      moons: "0",
      diameter: "12104",
      distance: "108.2",
      image: "assets/venus.jpg"
    },
    earth: {
      name: "Earth",
      type: "Terrestrial",
      description: "The only known planet to support life, with liquid water on its surface.",
      gravity: "9.8",
      mass: "5.97",
      period: "365",
      temp: "288",
      moons: "1",
      diameter: "12756",
      distance: "149.6",
      image: "assets/earth.png"
    },
    mars: {
      name: "Mars",
      type: "Terrestrial",
      description: "Often called the Red Planet due to the iron oxide prevalent on its surface.",
      gravity: "3.71",
      mass: "0.642",
      period: "687",
      temp: "210",
      moons: "2",
      diameter: "6792",
      distance: "227.9",
      image: "assets/mars.jpg"
    },
    jupiter: {
      name: "Jupiter",
      type: "Gas Giant",
      description: "The largest planet, known for its Great Red Spot and dozens of moons.",
      gravity: "24.79",
      mass: "1898",
      period: "4331",
      temp: "165",
      moons: "95",
      diameter: "142984",
      distance: "778.5",
      image: "assets/jupiter.jpg"
    },
    saturn: {
      name: "Saturn",
      type: "Gas Giant",
      description: "Adorned with a dazzling, complex system of icy rings.",
      gravity: "10.44",
      mass: "568",
      period: "10747",
      temp: "134",
      moons: "146",
      diameter: "120536",
      distance: "1432.0",
      image: "assets/saturn.jpg"
    },
    uranus: {
      name: "Uranus",
      type: "Ice Giant",
      description: "An ice giant that rotates on its side, making it highly unique.",
      gravity: "8.69",
      mass: "86.8",
      period: "30589",
      temp: "76",
      moons: "28",
      diameter: "51118",
      distance: "2867.0",
      image: "assets/uranus.jpg"
    },
    neptune: {
      name: "Neptune",
      type: "Ice Giant",
      description: "Dark, cold, and whipped by supersonic winds. It is the last of the planets.",
      gravity: "11.15",
      mass: "102",
      period: "59800",
      temp: "72",
      moons: "16",
      diameter: "49528",
      distance: "4515.0",
      image: "assets/neptune.jpg"
    },
    pluto: {
      name: "Pluto",
      type: "Dwarf Planet",
      description: "A complex world of ice mountains and frozen plains in the Kuiper Belt.",
      gravity: "0.62",
      mass: "0.013",
      period: "90560",
      temp: "44",
      moons: "5",
      diameter: "2376",
      distance: "5906.3",
      image: "assets/pluto.jpg"
    }
  };

  // 2. Select form elements
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('planet-search');

  // 3. Search submit listener
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();

    if (planetsData[query]) {
      const planet = planetsData[query];

      document.getElementById('planet-name').textContent = planet.name;
      document.getElementById('planet-type').textContent = planet.type;
      document.getElementById('planet-description').textContent = planet.description;
      document.getElementById('planet-gravity').textContent = planet.gravity;
      document.getElementById('planet-mass').textContent = planet.mass;
      document.getElementById('planet-period').textContent = planet.period;
      document.getElementById('planet-temp').textContent = planet.temp;
      document.getElementById('planet-moons').textContent = planet.moons;
      document.getElementById('planet-diameter').textContent = planet.diameter;
      document.getElementById('planet-distance').textContent = planet.distance;

      const planetImg = document.getElementById('planet-image');
      planetImg.src = planet.image;
      planetImg.alt = `Planet ${planet.name}`;
    } else {
      alert("Planet not found! Please enter a valid planet (e.g., Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto).");
    }

    searchInput.value = '';
  });

  // 4. Dark Mode Toggle with localStorage Memory
  const themeBtn = document.getElementById('theme-btn');

  const updateThemeUI = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      themeBtn.innerHTML = 'LIGHT <img src="assets/moon.svg" alt="Light mode icon" class="moon-icon">';
    } else {
      document.body.classList.remove('dark-theme');
      themeBtn.innerHTML = 'DARK <img src="assets/moon.svg" alt="Dark mode icon" class="moon-icon">';
    }
  };

  // Initial theme check on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    updateThemeUI(true);
  }

  themeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    updateThemeUI(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});