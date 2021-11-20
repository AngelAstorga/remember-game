<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Remember Game</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="counter">
            <h1>SCORE:<span id="score">0</span> </h1>
        </div>
        <div id="image">
        </div>
        <div class="form">
            <form action="">
                <div  class="alternative"><input type="radio" name="alternative" id="alternative-1" value="Victor Raul">
                <label id="alternative1" for="alternative-1">Profile 1</label></div>
                <div class="alternative"><input type="radio" name="alternative" id="alternative-2" value="Pepe Mujica">
                <label id="alternative2" for="alternative-2">Profile 2</label></div>
                <div class="alternative"><input type="radio" name="alternative" id="alternative-3" value="Jhony Lescano">
                <label id="alternative3" for="alternative-3">Profile 3</label></div>
            </form>
        </div>
    </div>
    <script src="js/data.js"></script>
</body>
</html>