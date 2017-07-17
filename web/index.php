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
	return $app['twig']->render('pages/home.twig', array("page" => "home"));
})
->bind('home');

// Produits
$app->get('/produits', function() use ($app)
{
	return $app['twig']->render('pages/produits.twig', array("page" => "products"));
})
->bind('produits');

// Plan
$app->get('/plan', function() use ($app)
{
	return $app['twig']->render('pages/plan.twig', array("page" => "plan"));
})
->bind('plan');

// Docs
$app->get('/documents-utiles', function() use ($app)
{
	return $app['twig']->render('pages/docs.twig', array("page" => "docs"));
})
->bind('docs');

// Contact
$app->get('/contact', function() use ($app)
{
	return $app['twig']->render('pages/contact.twig', array("page" => "contact"));
})
->bind('contact');

// Run Silex
$app->run();