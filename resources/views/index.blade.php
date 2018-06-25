<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>standard web base</title>
        <!-- <script src='nprogress.js'></script>
        <link rel='stylesheet' href='nprogress.css'/> -->
        <link href="{{asset('css/app.css?x=') . rand()}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('/js/manifest.js?x=') . rand() }}"></script>
        <script src="{{asset('/js/vendor.js?x=') . rand() }}"></script>
        <script src="{{asset('js/app.js?x=') . rand()}}" ></script>
    </body>
</html>