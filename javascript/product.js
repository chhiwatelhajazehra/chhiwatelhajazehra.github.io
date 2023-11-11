function getRngYo(nums, json_products)
{
	let rng = Math.floor(Math.random() * (json_products.length-1));
	if(!nums.includes(rng))
		nums.push(rng);
	else
		getRngYo(nums, json_products);
	return rng;
}









var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle()
{
	if(MenuItems.style.maxHeight == "0px")
	{
		MenuItems.style.maxHeight = "100vh";
		// document.getElementById("Title").style.opacity = "0";
		// document.getElementById("exploreBtn").style.opacity = "0";
		// document.getElementById("logo").style.opacity = "0";
		// document.getElementById("social-links").style.opacity = "0";

		document.getElementById("top-menu-icon-bar").style.transform = "rotate(45deg) translate(25%, 125%)";
		document.getElementById("mid-menu-icon-bar").style.transition = "0s";
		document.getElementById("mid-menu-icon-bar").style.transform = "rotate(0deg)";
		document.getElementById("mid-menu-icon-bar").style.width = "0";
		document.getElementById("bot-menu-icon-bar").style.transform = "rotate(-45deg) translate(25%, -125%)";
	}
	else
	{
		MenuItems.style.maxHeight = "0px";
		// document.getElementById("Title").style.opacity = "1";
		// document.getElementById("exploreBtn").style.opacity = "1";
		// document.getElementById("logo").style.opacity = "1";
		// document.getElementById("social-links").style.opacity = "1";

		document.getElementById("top-menu-icon-bar").style.transform = "rotate(0deg)";
		document.getElementById("mid-menu-icon-bar").style.transition = "0.5s";
		document.getElementById("mid-menu-icon-bar").style.transform = "rotate(0deg)";
		document.getElementById("mid-menu-icon-bar").style.width = "35px";
		document.getElementById("bot-menu-icon-bar").style.transform = "rotate(0deg)";
	}
}














function addProducts(json_products)
{
	var small_container_Element = document.getElementsByClassName('small-container more')[0];

	for(var j=0; j<1;j++)
	{
		var row_Element = CreateElement('div', 'row', small_container_Element);
			let nums = [];
			
			for(var i=1; i<5; i++)
			{
				let num = getRngYo(nums, json_products);
				
				var col_4_Element = CreateElement('div', 'col-4', row_Element);

				const __url = location.protocol + '//' + location.host;
				var _a = CreateElement('a', '', col_4_Element);
				_a.href=__url+"/Product"+"?"+"id="+json_products[num].id;

				var _div_parent = CreateElement('div', '', _a);
				// _div_parent.style="margin-top: -43px;";

				// CreateElement('div', 'en-stock', _div_parent).innerText='En stock';
				// CreateElement('div', 'en-stock promo', _div_parent).innerText='-20%';

					const _product = json_products[num];
					col_4_Element.id=_product.id;
					CreateElement('img', '', _div_parent).src = _product.imgs[0];
					CreateElement('h4', '', _a).innerHTML = _product.name.includes("produit")?"":_product.name;
					// CreateElement('p', '', _a).innerHTML = _product.price+" DH";
			}
	}
}

var json_products = {};

$(document).ready(function()
{
	$.getJSON('../data.json', function(data)
    {

    	let json_products = data.insta;

		addProducts(json_products);

		


















		const _input = document.getElementById("input");
		function stepper(btn)
		{
			let id = btn.getAttribute("id");
			let min = _input.getAttribute("min");
			let max = _input.getAttribute("max");
			let val = _input.getAttribute("value");
			let calcStep = (id == "input-increment-btn") ? 1 : -1;
			let newValue = parseInt(val)+calcStep;

			if(newValue>=min && newValue<=max)
				_input.setAttribute("value", newValue);
		}

		const urlParams = new URLSearchParams(window.location.search);
		const curr_product = json_products.find(product => product.id==urlParams.get('id'));
		if(curr_product==null)
		{
			// set a white cover (that get removed if the product is valid) so that the frame of the broken product page that shows up for a split second doesnt even show up
			window.location.href = main_url_+"/404";
		}

		// document.title = curr_product.name + ' - Digital Agadir';
		document.title = "شهيوات الحاجة زهرة - " + curr_product.name;

		var _row = document.getElementsByClassName('small-container single-product')[0].children[0];
		_row.children[1].children[1].innerText =  curr_product.name.includes("produit")?"":curr_product.name; // h1 : product name
		// _row.children[1].children[2].innerText = curr_product.price+" DH"; // h4 : product price
		// _row.children[1].children[8].innerText = curr_product.product_details_descriptions; // p : product description
		// _row.children[1].children[7].innerText = curr_product.name.includes("produit")?"":curr_product.product_details_descriptions; // p : product description // select size got removed

		_row.children[0].children[0].children[2].src = curr_product.imgs[0];

		var _row2 = _row.children[0].children[1];

			const _children = [];

			// for(var i=0; i<4; i++) {
			// 	_row2.removeChild(_row2.children[0]);
			// }
			
			for(var i=0; i<curr_product.imgs.length; i++) {
				var col = CreateElement('div', 'small-img-col', _row2);
				var img = CreateElement('img', 'small-img', col).style = "width: 100%";
			}

			for(var i=0; i<_row2.children.length; i++) {
				_children.push(_row2.children[i]);
			}

			if(curr_product.imgs[0]!=null&&curr_product.imgs.length>1)
				_children[0].children[0].src = curr_product.imgs[0];
			else
				_row2.removeChild(_children[0]);

			for(var i=1; i<_row2.children.length; i++) {
				var child = _children[i];
				console.log(child);
				if(child==null)
					continue;
				if(curr_product.imgs[1]!=null)
					child.children[0].src = curr_product.imgs[i];
				else
					_row2.removeChild(child);
			}

		// Get the root element
		var r = document.querySelector(':root');

		// // Create a function for getting a variable value
		// function myFunction_get() {
		//   // Get the styles (properties and values) for the root
		//   var rs = getComputedStyle(r);
		//   // Alert the value of the --blue variable
		//   alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
		// }

		// Create a function for setting a variable value
		// function myFunction_set() {
		  // Set the value of variable --blue to another value (in this case "lightblue")
		  // r.style.setProperty('--product-imgs-flex-basis', '0%');
		  var percentage = ((100/curr_product.imgs.length)-(10/curr_product.imgs.length));
		  r.style.setProperty('--product-imgs-flex-basis', percentage+'%');
		// }

		// ------------------ js for product gallery ---------------------

		var product_img = document.getElementById("product-img");
		var small_imgs = document.getElementsByClassName("small-img");

		for (let small_img of small_imgs)
		{
			small_img.onclick = function()
			{
				// product_img.classList.toggle("transparent");
				product_img.src=small_img.src;
			}
		}

    });
});