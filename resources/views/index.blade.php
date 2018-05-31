<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>standard web base</title>
        <link href="{{asset('css/app.css?x=') . rand()}}" rel="stylesheet" type="text/css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('/js/manifest.js?x=') . rand() }}"></script>
        <script src="{{asset('/js/vendor.js?x=') . rand() }}"></script>
        <script src="{{asset('js/app.js?x=') . rand()}}" ></script>
    </body>
</html>