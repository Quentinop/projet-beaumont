var slider_img = document.querySelectorAll('.slider-img > img')

if(slider_img.length != 0)
{
	var i = slider_img.length - 1

	var interval = setInterval(slide, 3000)

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
		interval = setInterval(slide, 3000)
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
		interval = setInterval(slide, 3000)
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
