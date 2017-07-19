// HOME SLIDER

var home_slider_img = document.querySelectorAll('.slider-home > img');
var home_slider_text = document.querySelectorAll('.slider-info');
var home_slider_controls = document.querySelectorAll('.home-slider-item');

var i = home_slider_img.length - 1
var j = 0

home_slider_controls[j].style.backgroundColor = '#2e3689'

var home_interval = setInterval(homeSlide, 4000)

function homeSlide()
{
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
}

for(var k = 0; k < home_slider_controls.length; k++)
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


// PRODUCTS SLIDER

var slider_img = document.querySelectorAll('.slider-img > img')

if(slider_img.length != 0)
{
    var i = slider_img.length - 1

	var interval = setInterval(slide, 7000)

    function slide()
    {
        if(i == 0)
        {
            slider_img[i].style.opacity = '0'
            resetSlides()
            i = slider_img.length - 1
        }
        else
        {
            slider_img[i].style.opacity = '0'
            i--
        }
    }

    var left = document.querySelector('.left-control');
    var right = document.querySelector('.right-control');

	left.addEventListener('click', function(e) {
		clearInterval(interval);
		interval = setInterval(slide, 7000)
		if(i == slider_img.length - 1)
		{
			clearSlides()
			i = 0
			slider_img[i].style.opacity = '1'
		}
		else
		{
			slider_img[i+1].style.opacity = '1'
			i++
		}
	})
	right.addEventListener('click', function(e) {
		clearInterval(interval);
		interval = setInterval(slide, 7000)
		if(i == 0)
		{
			i = slider_img.length - 1
			resetSlides()
		}
		else
		{
			slider_img[i].style.opacity = '0'
			i--
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