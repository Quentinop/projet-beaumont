<?php 

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Validator\Constraints\Length;

// Require dependendies
require_once __DIR__.'/../vendor/autoload.php';

// Init Silex
$app = new Silex\Application();
$app['debug'] = true;

// Services
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

// Email
$app->register(new Silex\Provider\FormServiceProvider());
$app->register(new Silex\Provider\TranslationServiceProvider());
$app->register(new Silex\Provider\ValidatorServiceProvider());
$app->register(new Silex\Provider\LocaleServiceProvider());
$app->register(new Silex\Provider\SwiftmailerServiceProvider(), array(

    'swiftmailer.options' => array(
        'host'       => 'smtp.gmail.com',
        'port'       => 465,
        'username'   => 'louise.saguin@hetic.net',
        'password'   => 'mmrme',
        'encryption' => 'ssl',
        'auth_mode'  => 'login'
    )
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
$app->match('/contact',function(Request $request) use ($app)
            {
                $data = array();

                $form_builder = $app['form.factory']->createBuilder();

                $form_builder->setMethod('post');
                $form_builder->setAction($app['url_generator']->generate('contact'));

                $form_builder->add(
                    'entreprise',
                    EmailType::class,
                    array(
                        'label' =>'entreprise',
                        'trim' =>true,
                        'required' =>true
                    )
                );

                $form_builder->add(
                    'name',
                    EmailType::class,
                    array(
                        'label' =>'name',
                        'trim' =>true,
                        'required' =>true
                    )
                );

                $form_builder->add(
                    'email',
                    EmailType::class,
                    array(
                        'label' =>'Mail',
                        'trim' =>true,
                        'required' =>true
                    )
                );

                $form_builder->add(
                    'tel',
                    EmailType::class,
                    array(
                        'label' =>'tel',
                        'trim' =>true,
                        'required' =>true
                    )
                );

                $form_builder->add(
                    'body',
                    TextareaType::class,
                    array(
                        'label' =>'Message',
                        'trim' =>true,
                        'required' =>true
                    )
                );

                $form_builder->add(
                    'submit', 
                    SubmitType::class,
                    array('label' =>'Envoyer')
                );

                $form = $form_builder->getForm();

                $form->handleRequest($request);

                if($form->isSubmitted() && $form->isValid()){
                    $formData = $form->getData();

                    $message = new \Swift_Message();
                    $message->setSubject($formData['title']);
                    $message->setFrom($formData['email']);
                    $message->setTo(array('louisesaguin7@gmail.com'));
                    $message->setBody($formData['body']);

                    $app['mailer']->send($message);

                    return $app->redirect($app['url_generator']->generate('contact'));
                }

                $data['contact_form'] = $form->createView();
                $data['page'] = 'contact';

                return $app['twig']->render('pages/contact.twig', $data);
            })
    ->bind('contact');

// Run Silex
$app->run();