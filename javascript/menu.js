var json_products = {};

$(document).ready(function()
{
	$.getJSON('../data.json', function(data)
    {
    	let json_products = data.insta;

		let urlParams = new URLSearchParams(window.location.search);
			
		var small_container_Element = document.getElementsByClassName('small-container')[0];
		// var _page_max = 8;
		var _page_max = 16;
		var _page=1;
		var _curr=(_page_max*(_page-1))+1;
		small_container_Element.children[0].children[0].children[1].innerText="Il y a "+json_products.length+" produits.";
		small_container_Element.children[0].children[0].children[2].innerText=_curr+"-"+_page_max*_page+" sur "+json_products.length+" résultats.";

		var _new_url="";

		function UpdatePage(no_url_change=0)
		{
			var small_container_Element = document.getElementsByClassName('small-container')[0];
			var _curr=_page_max*(_page-1)+1;
			small_container_Element.children[0].children[0].children[1].innerText="Il y a "+json_products.length+" produits.";
			small_container_Element.children[0].children[0].children[2].innerText=_curr+"-"+_page_max*_page+" sur "+json_products.length+" résultats.";
			// make the span hover color stick
			sort(1);
			var _thing = (urlParams.get("sorting")==null)?("?page="+_page):("&page="+_page);
			if(no_url_change==1)
				return;
			if(_new_url==null)
				_new_url+=location.href;
			const url = _new_url+_thing;
   			window.history.pushState('', '', url);
   			if(no_url_change==2)
				window.location = url;
		}

		addProducts();

		function addProducts()
		{
			var small_container_Element = document.getElementsByClassName('small-container')[0];

			var page_btn = CreateElement('div', 'page-btn', small_container_Element);
			page_btn.style="margin: 0 auto 50px;";
				let prev_page_btn = CreateElement('span', '', page_btn);
					prev_page_btn.innerHTML = '&#8592;';
				for(var i=1; i<(json_products.length/_page_max)+1; i++)
					CreateElement('span', 'page-num', page_btn).innerHTML = i;
				let next_page_btn = CreateElement('span', '', page_btn);
				next_page_btn.innerHTML = '&#8594;';

			prev_page_btn.onclick = function()
			{
				if(_page>1)
				{
					_page--;
					UpdatePage(2);
				}
			}

			next_page_btn.onclick = function()
			{
				console.log(_page);
				console.log(document.getElementsByClassName("page-num").length/2);
				if(_page<document.getElementsByClassName("page-num").length/2)
				{
					_page++;
					UpdatePage(2);
				}
			}

			for(var j=0; j<_page_max/4;j++)
			{
				var row_Element = CreateElement('div', 'products-page-row', small_container_Element);
					for(var i=1; i<5; i++)
					{
						if( (((i+(4*j))-1)+(_page_max*(_page-1)))>json_products.length-1 )
							break;
							
							var col_4_Element = CreateElement('div', 'products-page-col-4', row_Element);

							const __url = location.protocol + '//' + location.host;
							var _a = CreateElement('a', '', col_4_Element);
							_a.href=__url+"/Product"+"?"+"id="+json_products[((i+(4*j))-1)+(_page_max*(_page-1))].id;

							var _div_parent = CreateElement('div', '', _a);
							// _div_parent.style="margin-top: -43px;";

							// CreateElement('div', 'en-stock', _div_parent).innerText='En stock';
							// CreateElement('div', 'en-stock promo', _div_parent).innerText='-20%';

							// col_4_Element.id=product_ids[((i+(4*j))-1)+(_page_max*(_page-1))];
								const _product = json_products[((i+(4*j))-1)+(_page_max*(_page-1))];
								col_4_Element.id=_product.id;
							// CreateElement('img', '', col_4_Element).src = '../images/product-'+(i+(4*j))+'.jpg';
								CreateElement('img', '', _div_parent).src = _product.imgs[0];
							// CreateElement('h4', '', col_4_Element).innerHTML = "Red Printed T-Shirt";

								// CreateElement('h4', 'product-text', _a).innerHTML = _product.name;

									// CreateElement('h4', 'product-text', _a).innerHTML = _product.name.includes("produit")?"":_product.name;

									// var heitchFour = CreateElement('h4', 'product-text', _a);
									// heitchFour.innerHTML = _product.name;
									// heitchFour.style.color = _product.name.includes("produit")?"white":"#555";


									var heitchFour = _product.name.includes("produit")?null:CreateElement('h4', 'product-text', _a);
									if(heitchFour!=null)
										heitchFour.innerHTML = _product.name;

							// var ratingElement = CreateElement('div', 'rating', col_4_Element);
							// 	for(var k=0; k<5; k++) { CreateElement('span', 'fa fa-star checked', ratingElement); }

							// CreateElement('p', '', col_4_Element).innerHTML = "$100";
								// CreateElement('p', '', _a).innerHTML = _product.price+" DH";
					}
			}

			var page_btn = CreateElement('div', 'page-btn', small_container_Element);
				prev_page_btn = CreateElement('span', '', page_btn);
				prev_page_btn.innerHTML = '&#8592;';
				for(var i=1; i<(json_products.length/_page_max)+1; i++)
					CreateElement('span', 'page-num', page_btn).innerHTML = i;
				next_page_btn = CreateElement('span', '', page_btn);
				next_page_btn.innerHTML = '&#8594;';

			// ------------------ js for products ---------------------

			var _products = document.getElementsByClassName("products-page-col-4");

			for (let product of _products)
			{
				product.onclick = function()
				{
					const url = location.protocol + '//' + location.host;
					window.location.href=url+"/Product"+"?"+"id="+product.id;
				}
			}

			var _page_nums = document.getElementsByClassName("page-num");

			for (let _page_num of _page_nums)
			{
				_page_num.onclick = function()
				{
					_page=_page_num.innerText;
					UpdatePage(2);
				}
			}

			prev_page_btn.onclick = function()
			{
				if(_page>1)
				{
					_page--;
					UpdatePage(2);
				}
			}

			next_page_btn.onclick = function()
			{
				console.log(_page);
				console.log(document.getElementsByClassName("page-num").length/2);
				if(_page<document.getElementsByClassName("page-num").length/2)
				{
					_page++;
					UpdatePage(2);
				}
			}
		}

		function removeProducts()
		{
			var small_container_Element = document.getElementsByClassName('small-container')[0];
			const _len = small_container_Element.children.length-1;
			for(var i=0; i<_len; i++)
				small_container_Element.removeChild(small_container_Element.children[1]);
		}

		function sortProducts(bool)
		{
			var prices = [];

			if(bool==0||bool==1) {
					json_products.forEach(product => 
					prices.push(parseFloat(product.price.replace(',', '.')))
				);
			}
			else if(bool==2||bool==3) {
					json_products.forEach(product => 
					prices.push(product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase())
				);
			}

			// console.log(prices);

			var result=[];

			if(bool==0||bool==2)
				result = Array.from(Array(prices.length).keys()).sort((a, b) => prices[a] < prices[b] ? -1 : (prices[b] < prices[a]) | 0);
			else if(bool==1||bool==3)
				result = Array.from(Array(prices.length).keys()).sort((a, b) => prices[a] > prices[b] ? -1 : (prices[b] > prices[a]) | 0);

			console.log(result);

			var small_container_Element = document.getElementsByClassName('small-container')[0];

			var page_btn = CreateElement('div', 'page-btn', small_container_Element);
				let prev_page_btn = CreateElement('span', '', page_btn);
				prev_page_btn.innerHTML = '&#8592;';
				for(var i=1; i<(json_products.length/_page_max)+1; i++)
					CreateElement('span', 'page-num', page_btn).innerHTML = i;
				let next_page_btn = CreateElement('span', '', page_btn);
				next_page_btn.innerHTML = '&#8594;';

			for(var j=0; j<_page_max/4;j++)
			{
				var row_Element = CreateElement('div', 'products-page-row', small_container_Element);
					for(var i=1; i<5; i++)
					{
						// console.log(((i+(4*j))-1)+(_page_max*(_page-1)));

						if( (((i+(4*j))-1)+(_page_max*(_page-1)))>json_products.length-1 )
							break;

						var col_4_Element = CreateElement('div', 'products-page-col-4', row_Element);

							const __url = location.protocol + '//' + location.host;
							var _a = CreateElement('a', '', col_4_Element);
							_a.href=__url+"/Product"+"?"+"id="+json_products[result[((i+(4*j))-1)+(_page_max*(_page-1))]].id;

							var _div_parent = CreateElement('div', '', _a);
							// _div_parent.style="margin-top: -43px;";

							// CreateElement('div', 'en-stock', _div_parent).innerText='En stock';
							// CreateElement('div', 'en-stock promo', _div_parent).innerText='-20%';

							const _product = json_products[result[((i+(4*j))-1)+(_page_max*(_page-1))]];
							col_4_Element.id=_product.id;
							CreateElement('img', '', _div_parent).src = _product.imgs[0];
							

							//
							// 
							var heitchFour = _product.name.includes("produit")?null:CreateElement('h4', 'product-text', _a);
									if(heitchFour!=null)
										heitchFour.innerHTML = _product.name;
							//
							//

							// var ratingElement = CreateElement('div', 'rating', col_4_Element);
							// 	for(var k=0; k<5; k++) { CreateElement('span', 'fa fa-star checked', ratingElement); }

							// CreateElement('p', '', col_4_Element).innerHTML = _product.price+" DH";
					}
			}

			var page_btn = CreateElement('div', 'page-btn', small_container_Element);
				prev_page_btn = CreateElement('span', '', page_btn);
				prev_page_btn.innerHTML = '&#8592;';
				for(var i=1; i<(json_products.length/_page_max)+1; i++)
					CreateElement('span', 'page-num', page_btn).innerHTML = i;
				next_page_btn = CreateElement('span', '', page_btn);
				next_page_btn.innerHTML = '&#8594;';


			// next_page_btn.onclick = function()
			// {
			// 	if(_page<document.getElementsByClassName("page-num").length/2)
			// 	{
			// 		_page++;
			// 		UpdatePage();
			// 	}
			// }

			var _products = document.getElementsByClassName("products-page-col-4");

			for (let product of _products)
			{
				product.onclick = function()
				{
					const url = location.protocol + '//' + location.host;
					window.location.href=url+"/Product"+"?"+"id="+product.id;
				}
			}

			var _page_nums = document.getElementsByClassName("page-num");

			for (let _page_num of _page_nums)
			{
				_page_num.onclick = function()
				{
					_page=_page_num.innerText;
					UpdatePage(2);
				}
			}

			prev_page_btn.onclick = function()
			{
				if(_page>1)
				{
					_page--;
					UpdatePage(2);
				}
			}

			next_page_btn.onclick = function()
			{
				if(_page<document.getElementsByClassName("page-num").length/2)
				{
					_page++;
					UpdatePage(2);
				}
			}
		}

		const _select = document.getElementById("products-select");

		function sort(bool, indicator=0) {
			urlParams = new URLSearchParams(window.location.search);
			// bool==1 while in the webpage, bool==2 when refreshing. else the webpage thing would never change
			if((_select.value=="Tri par défaut"&&bool==1)||(urlParams.get("sorting")=="default"&&bool==2)){
				removeProducts();
				addProducts();
				const url = location.protocol + '//' + location.host + location.pathname + "?sorting=default";
       			// window.history.pushState('', '', url);
       			_new_url="";
       			_new_url+=url;
				_select.value="Tri par défaut";
			}
			else if((_select.value=="Le moins cher"&&bool==1)||(urlParams.get("sorting")=="lowToHight"&&bool==2)){
				removeProducts();
				sortProducts(0);
				const url = location.protocol + '//' + location.host + location.pathname + "?sorting=lowToHight";
       			// window.history.pushState('', '', url);
       			_new_url="";
       			_new_url+=url;
				_select.value="Le moins cher";
			}
			else if((_select.value=="Le plus cher"&&bool==1)||(urlParams.get("sorting")=="highToLow"&&bool==2)){
				removeProducts();
				sortProducts(1);
				const url = location.protocol + '//' + location.host + location.pathname + "?sorting=highToLow";
       			// window.history.pushState('', '', url);
       			_new_url="";
       			_new_url+=url;
				_select.value="Le plus cher";
			}
			else if((_select.value=="Nom de A à Z"&&bool==1)||(urlParams.get("sorting")=="alphabetical"&&bool==2)){
				removeProducts();
				sortProducts(2);
				const url = location.protocol + '//' + location.host + location.pathname + "?sorting=alphabetical";
       			// window.history.pushState('', '', url);
       			_new_url="";
       			_new_url+=url;
				_select.value="Nom de A à Z";
			}
			else if((_select.value=="Nom de Z à A"&&bool==1)||(urlParams.get("sorting")=="reverseAlphabetical"&&bool==2)){
				removeProducts();
				sortProducts(3);
				const url = location.protocol + '//' + location.host + location.pathname + "?sorting=reverseAlphabetical";
       			// window.history.pushState('', '', url);
       			_new_url="";
       			_new_url+=url;
				_select.value="Nom de Z à A";
			}

			if(urlParams.get("page")!=null&&indicator==1){
				_page=urlParams.get("page");
			}
		}

		sort(2, 1);
		UpdatePage();

		_select.onclick = function()
		{
			sort(1);
			UpdatePage();
		}

		_select.onchange = function()
		{
			sort(1);
			UpdatePage();
		}

		window.onhashchange = function() {
			sort(1, 1);
		    UpdatePage(1);
		}

		window.onpopstate = function() {
			sort(1, 1);
		    UpdatePage(1);
		}

		// https://www.w3schools.com/js/js_cookies.asp

		// function setCookie(cname, cvalue, exdays) {
		//   const d = new Date();
		//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
		//   let expires = "expires="+ d.toUTCString();
		//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		// } setCookie("yolo", "hey", 1*30);


		var MenuItems = document.getElementById("MenuItems");
		MenuItems.style.maxHeight = "0px";

		function menutoggle()
		{
			if(MenuItems.style.maxHeight == "0px")
			{
				MenuItems.style.maxHeight = "100vh";
				// document.getElementById("Title").style.opacity = "0";
				// document.getElementsByClassName("explorebtn")[0].style.opacity = "0";
				document.getElementsByClassName("text-logo")[0].style.opacity = "0";
				// document.getElementById("social-links").style.opacity = "0";

				document.getElementById("top-menu-icon-bar").style.transform = "rotate(45deg) translate(25%, 125%)";
				document.getElementById("mid-menu-icon-bar").style.transition = "0s";
				document.getElementById("mid-menu-icon-bar").style.transform = "rotate(0deg)";
				document.getElementById("mid-menu-icon-bar").style.width = "0";
				// document.getElementById("mid-menu-icon-bar").style.opacity = "0";
				document.getElementById("bot-menu-icon-bar").style.transform = "rotate(-45deg) translate(25%, -125%)";
				
				document.getElementById("top-menu-icon-bar").style.backgroundColor = "white";
				document.getElementById("mid-menu-icon-bar").style.backgroundColor = "white";
				document.getElementById("bot-menu-icon-bar").style.backgroundColor = "white";

				document.getElementsByClassName("products-page-row row-2")[0].style.opacity = "0";
			}
			else
			{
				MenuItems.style.maxHeight = "0px";
				// document.getElementById("Title").style.opacity = "1";
				// document.getElementsByClassName("explorebtn")[0].style.opacity = "1";
				document.getElementsByClassName("text-logo")[0].style.opacity = "1";
				// document.getElementById("social-links").style.opacity = "1";

				document.getElementById("top-menu-icon-bar").style.transform = "rotate(0deg)";
				document.getElementById("mid-menu-icon-bar").style.transition = "0.5s";
				document.getElementById("mid-menu-icon-bar").style.transform = "rotate(0deg)";
				document.getElementById("mid-menu-icon-bar").style.width = "35px";
				// document.getElementById("mid-menu-icon-bar").style.opacity = "1";
				document.getElementById("bot-menu-icon-bar").style.transform = "rotate(0deg)";

				document.getElementById("top-menu-icon-bar").style.backgroundColor = "black";
				document.getElementById("mid-menu-icon-bar").style.backgroundColor = "black";
				document.getElementById("bot-menu-icon-bar").style.backgroundColor = "black";


				document.getElementsByClassName("products-page-row row-2")[0].style.opacity = "1";
			}
		}
    });
});