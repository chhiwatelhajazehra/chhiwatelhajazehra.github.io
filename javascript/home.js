// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/

	function shuffleArray(array)
	{
	   for(var i=array.length-1; i>0; i--)
	   {
	       var j = Math.floor(Math.random()*(i+1));
	       var temp = array[i];
	       array[i] = array[j];
	       array[j] = temp;
	   }  
	   return array;
	}

// Image Slider Code START

	var r = document.querySelector(':root');
				
	var counter=1;
	document.getElementById('img-slider-slides-radio-'+counter).checked = true;
	counter++;

	setInterval(function()
	{
		// document.getElementById('img-slider-slides-radio-'+counter).checked = true;
		// document.getElementById('img-slider-slides-radio-'+counter).style.backgroundColor="#40D4DC";
		// r.style.getPropertyValue('--clr-one');

		for(let i=1; i<5; i++)
		{
			if(document.getElementById('img-slider-slides-radio-'+i).checked)
			{
				document.getElementById('img-slider-slides-radio-'+i).checked=false;
				document.getElementById('img-slider-slides-radio-'+( i==4?1:i+1 )).checked=true;
				counter= i==4?1:i+1;
				return;
			}
		}

	}, 5000);

// Image Slider Code END

$(document).ready(function()
{
	let sliderImagesElements = $(".img-slider-slides-slide a img");
	$.getJSON('../data.json', function(data)
    {	
    	var sliderImages = []; 

		for(var i=0; i<data.sliderImages.length;i++)
        {
        	sliderImages.push(data.sliderImages[i][0]);
        }

        sliderImages = shuffleArray(sliderImages); 

		for(var i=0; i<sliderImagesElements.length;i++)
        {
        	sliderImagesElements[i].src = sliderImages[i];
        }
    });
});