// Weather simulation engine
class WeatherEngine {
  constructor() {
    this.weatherTypes = ['clear', 'clouds', 'rain', 'storm', 'fog']
    this.currentWeather = 'clear'
    this.windSpeed = 0
    this.windDirection = 0
    this.visibility = 10000
    this.temperature = 15
    this.pressure = 1013.25
  }

  generateRandomWeather() {
    this.currentWeather = this.weatherTypes[
      Math.floor(Math.random() * this.weatherTypes.length)
    ]
    this.windSpeed = Math.random() * 50
    this.windDirection = Math.random() * 360
    this.visibility = 5000 + Math.random() * 9000
    this.temperature = 10 + Math.random() * 20
    return this.getWeatherData()
  }

  getWeatherData() {
    return {
      type: this.currentWeather,
      windSpeed: this.windSpeed,
      windDirection: this.windDirection,
      visibility: this.visibility,
      temperature: this.temperature,
      pressure: this.pressure
    }
  }

  getWeatherImpact() {
    const impacts = {
      clear: { dragMultiplier: 1, visibilityBonus: 1.5 },
      clouds: { dragMultiplier: 1.1, visibilityBonus: 0.8 },
      rain: { dragMultiplier: 1.2, visibilityBonus: 0.5 },
      storm: { dragMultiplier: 1.5, visibilityBonus: 0.2 },
      fog: { dragMultiplier: 1, visibilityBonus: 0.1 }
    }
    return impacts[this.currentWeather] || impacts.clear
  }
}

module.exports = WeatherEngine
