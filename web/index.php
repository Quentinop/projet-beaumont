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

$app->get('/produits/extincteurs', function() use ($app)
{
	return $app['twig']->render('pages/product-ext.twig', array("page" => "product"));
})
->bind('product-ext');

$app->get('/produits/desenfumage', function() use ($app)
{
	return $app['twig']->render('pages/product-des.twig', array("page" => "product"));
})
->bind('product-des');

$app->get('/produits/autres', function() use ($app)
{
	return $app['twig']->render('pages/product-oth.twig', array("page" => "product"));
})
->bind('product-oth');

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