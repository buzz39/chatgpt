<script>
    // convert time to selected timezone
    function convertTimezone() {
      var inputTimezone = document.getElementById("timezone-input").value;
      var convertedTime = moment().utc().tz(inputTimezone).format('MM/DD/YYYY hh:mm:ss a');
      document.getElementById("converted-time-display").innerHTML = convertedTime;
    }
    </script>