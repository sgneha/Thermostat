$(document).ready(function () {

    $("#city").val('london');
    let city = $('#city :selected').val();
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
    $.get(url, function (data) {
        $('#current-temperature').text(data.main.temp);
    })
    var thermostat = new Thermostat;
    $('#temperature').text(thermostat.temperature);

    $('#temperature-up').on('click', function () {
        thermostat.up();
        updateTemperature();

    })
    $('#temperature-down').click(function () {
        thermostat.down();
        updateTemperature();
    })
    $('#temperature-reset').click(function () {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#powersaving-on').click(function () {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').text('on')
        updateTemperature();
    })

    $('#powersaving-off').click(function () {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').text('off')
        updateTemperature();
    })
    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };
    $("#city").change(function () {
        let city = $('#city :selected').val();
        displayWeather(city);
    })

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';

        $.get(url + token + units, function (data) {
            $('#current-temperature').text(data.main.temp);
        })

    }
})