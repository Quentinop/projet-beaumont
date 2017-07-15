<?php 

// Require dependendies
require_once __DIR__.'/../vendor/autoload.php';

// Init Silex
$app = new Silex\Application();
$app['debug'] = true;

// Services
$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/../views',
	));

// Home
$app->get('/', function() use ($app)
{
	return $app['twig']->render('pages/home.twig');
})
->bind('home');

// Docs
$app->get('/documents-utiles', function() use ($app)
{
	return $app['twig']->render('pages/docs.twig');
})
->bind('docs');

// Run Silex
$app->run();