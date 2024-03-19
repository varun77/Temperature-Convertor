const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const from = form.querySelector('#from').value;
  const to = form.querySelector('#to').value;
  const temperature = parseFloat(form.querySelector('#temperature').value);

  const convertedTemperature = convertTemperature(temperature, from, to);

  result.textContent = `${convertedTemperature} ${to}`;
});

function convertTemperature(temperature, from, to) {
  switch (from) {
    case 'celsius':
      switch (to) {
        case 'fahrenheit':
          return temperature * 9 / 5 + 32;
        case 'kelvin':
          return temperature + 273.15;
      }
      break;
    case 'fahrenheit':
      switch (to) {
        case 'celsius':
          return (temperature - 32) * 5 / 9;
        case 'kelvin':
          return (temperature - 32) * 5 / 9 + 273.15;
      }
      break;
    case 'kelvin':
      switch (to) {
        case 'celsius':
          return temperature - 273.15;
        case 'fahrenheit':
          return (temperature - 273.15) * 9 / 5 + 32;
      }
      break;
  }
}
