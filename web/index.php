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

// Produits
$app->get('/produits', function() use ($app)
{
	return $app['twig']->render('pages/produits.twig');
})
->bind('produits');

// Plan
$app->get('/plan', function() use ($app)
{
	return $app['twig']->render('pages/plan.twig');
})
->bind('plan');

// Docs
$app->get('/documents-utiles', function() use ($app)
{
	return $app['twig']->render('pages/docs.twig');
})
->bind('docs');

// Contact
$app->get('/contact', function() use ($app)
{
	return $app['twig']->render('pages/contact.twig');
})
->bind('contact');

// Run Silex
$app->run();