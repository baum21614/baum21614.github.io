<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IP</title>
    <script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript" defer></script>
    <style>
        body{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            background: #181818;
            color: #fff;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <pre id="pre"> { "status": 404 } </pre>
    <noscript> Enable JS </noscript>
    <script> fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        document.getElementById("pre").innerHTML = "payload.location.country.name + ', ' + payload.location.city";
    }); </script>
</body>
</html>
