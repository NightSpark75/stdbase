<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
        // 设置允许访问的域地址
        $domains = ['http://localhost:8080', 'http://stdbase.com', 'http://127.0.0.1'];
        // 判断请求头中是否包含ORIGIN字段
        if(isset($request->server()['HTTP_ORIGIN'])){
            $origin = $request->server()['HTTP_ORIGIN'];
            if (in_array($origin, $domains)) {
                //设置响应头信息
                header('Access-Control-Allow-Origin: '.$origin);
                header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');
            }
        }
        return $next($request);
        */
        header('Access-Control-Allow-Origin: *');
        
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin'
        ];
        if($request->getMethod() == "OPTIONS") {
            return Response::make('OK', 200, $headers);
        }

        $response = $next($request);
        
        foreach($headers as $key => $value)
            $response->headers->set($key, $value);
        return $response;
    }
}
