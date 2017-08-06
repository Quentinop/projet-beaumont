// HOME SLIDER

var home_slider_img = document.querySelectorAll('.slider-home > img');
var home_slider_text = document.querySelectorAll('.slider-info');
var home_slider_controls = document.querySelectorAll('.home-slider-item');


if(home_slider_img.length != 0)
{
	var i = home_slider_img.length - 1
	var j = 0

	home_slider_controls[j].style.backgroundColor = '#2e3689'
	var home_interval = setInterval(homeSlide, 4000)

	function homeSlide()
	{
		/*for(var k = 0; k < home_slider_controls.length; k++)
		{

			home_slider_controls[k].addEventListener('click', function(e){

				clearInterval(home_interval);
				home_interval = setInterval(homeSlide, 4000)
				resetHomeControls()
				j = e.target.id
				home_slider_controls[j].style.backgroundColor = '#2e3689'
				resetHomeSlides()
				i = e.target.id
				if(i == 0) i = 2
				else if(i == 2) i = 0
				if(i == 0)
				{
					home_slider_img[i].style.opacity = '0'
					home_slider_text[i].style.opacity = '0'
					resetHomeSlides()
					i = home_slider_img.length - 1
					j = 0
					resetHomeControls()
					home_slider_controls[j].style.backgroundColor = '#2e3689'
				}
				else
				{
					home_slider_img[i].style.opacity = '0'
					home_slider_text[i].style.opacity = '0'
					setTimeout(display(i), 500)
					i--
					j++
					resetHomeControls()
					home_slider_controls[j].style.backgroundColor = '#2e3689'
				}
				
			}*/

			for(var k = 0; k < home_slider_controls.length; k++)
			{
				home_slider_controls[k].addEventListener('click', function(e){
					clearInterval(home_interval);
					home_interval = setInterval(homeSlide, 5000)
					resetHomeControls()
					j = e.target.id
					home_slider_controls[j].style.backgroundColor = '#2e3689'
					resetHomeSlides()
					i = e.target.id
					if(i == 0) i = 2
						else if(i == 2) i = 0
							if(i == 0)
							{
								home_slider_img[i+1].style.opacity = '0'
								home_slider_text[i+1].style.opacity = '0'
								home_slider_img[i+2].style.opacity = '0'
								home_slider_text[i+2].style.opacity = '0'
							}
							if(i == 1)
							{
								console.log(home_slider_img[i]);
								home_slider_img[2].style.opacity = '0'
								home_slider_text[2].style.opacity = '0'
							}
						})
			}

			function resetHomeSlides()
			{
				for(var i = 0; i < home_slider_img.length; i++)
				{
					home_slider_img[i].style.opacity = '1'
					home_slider_text[i].style.opacity = '1'
					home_slider_text[i].style.display = 'block'
				}
			}

			function resetHomeControls()
			{
				for(var i = 0; i < home_slider_controls.length; i++)
				{
					home_slider_controls[i].style.backgroundColor = '#fff'
				}
			}

			function display(i)
			{
				home_slider_text[i].style.display = 'none'
			}
		}

// PRODUCTS SLIDER

var slider_img = document.querySelectorAll('.slider-img > img')
var slider_text = document.querySelectorAll('.slider-text > p')

if(slider_img.length != 0)
{
	var i = slider_img.length - 1
	var j = 0

	var interval = setInterval(slide, 7000)

	function slide()
	{
		if(i == 0)
		{
			slider_img[i].style.opacity = '0'
			resetSlides()
			clearTexts()
			j = 0
			i = slider_img.length - 1
		}
		else
		{
			resetTexts()
			slider_img[i].style.opacity = '0'
			slider_text[j].style.opacity = '1'
			i--
			j++
		}
	}

	var left = document.querySelector('.left-control');
	var right = document.querySelector('.right-control')


	left.addEventListener('click', function(e) {
		clearInterval(interval);
		interval = setInterval(slide, 7000)
		if(i == slider_img.length - 1)
		{
			clearSlides()
			resetTexts()
			j = slider_text.length - 1
			i = 0
			slider_img[i].style.opacity = '1'
			slider_text[j].style.opacity = '1'
		}
		else
		{
			slider_img[i+1].style.opacity = '1'
			resetTexts()
			slider_text[j-1].style.opacity = '1'
			i++
			j--
		}
	})
	right.addEventListener('click', function(e) {
		clearInterval(interval);
		interval = setInterval(slide, 7000)
		if(i == 0)
		{
			i = slider_img.length - 1
			resetSlides()
			clearTexts()
			j = 0
		}
		else
		{
			slider_img[i].style.opacity = '0'
			resetTexts()
			slider_text[j+1].style.opacity = '1'
			i--
			j++
		}
	})

	function resetSlides()
	{
		for(var i = 0; i < slider_img.length; i++)
		{
			slider_img[i].style.opacity = '1'
		}
	}

	function clearSlides()
	{
		for(var i = 0; i < slider_img.length; i++)
		{
			slider_img[i].style.opacity = '0'
		}
	}
}

function resetTexts()
{
	for(var i = 0; i < slider_text.length; i++)
	{
		slider_text[i].style.opacity = '0'
	}
}

function clearSlides()
{
	for(var i = 0; i < slider_img.length; i++)
	{
		slider_img[i].style.opacity = '0'
	}
}

function clearTexts()
{
	for(var i = 0; i < slider_text.length; i++)
	{
		slider_text[i].style.opacity = '0'
	}
	slider_text[0].style.opacity = '1'
}
}

// GALLERY SLIDER

var gallery_container = 	document.querySelectorAll('.plan-slider-container')
if(gallery_container.length > 0)
{

	var client_width = window.innerWidth
	var gallery_container_width = gallery_container[0].offsetWidth
	var gallery_container_scrolled = gallery_container[0].offsetLeft

	var scrollable = gallery_container_width + gallery_container_scrolled - client_width

	var gallery_left_control = 	document.querySelector('.plan-slider-controls img:first-child')
	var gallery_right_control = 	document.querySelector('.plan-slider-controls img:last-child')

	gallery_left_control.addEventListener('click', function(e) 
	{
		gallery_container_scrolled = gallery_container[0].offsetLeft
		var left_scroll = leftScroll()

		if(left_scroll)
		{
			gallery_container[0].style.left = gallery_container_scrolled + 400 + 'px'
		}
	})

	function leftScroll()
	{
		if(gallery_container_scrolled + 400 <= 0)
		{
			return true
		}
		else
		{
			return false
		}
	}

	gallery_right_control.addEventListener('click', function(e) 
	{
		gallery_container_scrolled = gallery_container[0].offsetLeft
		var right_scroll = rightScroll()

		if(right_scroll)
		{
			gallery_container[0].style.left = gallery_container_scrolled - 400 + 'px'
		}
	})

	function rightScroll()
	{
		if(gallery_container_width + gallery_container_scrolled - client_width - 400 >= 0)
		{
			return true
		}
		else
		{
			return false
		}
	}

}

// MAP SCROLL

var map_overlay = document.querySelectorAll('.map-overlay');

if(map_overlay.length > 0)
{

	map_overlay[0].addEventListener('click', function(e) 
	{
		this.style.pointerEvents = 'none'	
	})
}

// BURGER

var burger = document.querySelector('.burger-header')
var nav = document.querySelector('.menu-header')
var overlay_nav = document.querySelector('.burger-overlay')
var body = document.querySelector('body')
var open_nav = false;

burger.addEventListener('click', function(e) {
	if(open_nav)
	{
		body.style.overflow = 'inherit'
		nav.style.transform = 'translateX(-100%)'
		overlay_nav.style.display = 'none'
		overlay_nav.style.opacity = '0'
		open_nav = !open_nav
	}
	else if(!open_nav)
	{
		body.style.overflow = 'hidden'
		nav.style.transform = 'translateX(0%)'
		overlay_nav.style.display = 'block'
		setTimeout(function(){overlay_nav.style.opacity = '1'}, 220)
		open_nav = !open_nav
	}
})

overlay_nav.addEventListener('click', function(e) {
	if(open_nav)
	{
		body.style.overflow = 'inherit'
		nav.style.transform = 'translateX(-100%)'
		overlay_nav.style.display = 'none'
		overlay_nav.style.opacity = '0'
		open_nav = !open_nav
	}
})

//CONTACT

var inputs = document.querySelectorAll('.inputs > input');
var textarea = document.querySelector('.inputs > textarea');
var labels = document.querySelectorAll('.labels');

for(var i=0; i<inputs.length; i++){

	inputs[i].addEventListener('focus', function(e){
		resetLabels();
		labels[this.dataset.index].style.color = 'red'
		labels[this.dataset.index].style.fontWeight ='bold'
	})
}

textarea.addEventListener('focus', function(){
	resetLabels();
	labels[this.dataset.index].style.color = 'red'
	labels[this.dataset.index].style.fontWeight ='bold'
})

function resetLabels()
{
	for(var i = 0; i < labels.length; i++)
	{
		labels[i].style.color = '#2e3689'
		labels[i].style.fontWeight = 'normal'
	}
}
