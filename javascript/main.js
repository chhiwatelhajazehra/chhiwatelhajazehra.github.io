function OpenLink(link_id, type, message=0)
{
	let _url = "";
	switch(link_id)
	{
	  case "fb":
	    _url = "https://web.facebook.com/mimix.dogrie.6";
	    break;
	  case "ig":
	    _url = "https://www.instagram.com/chhiwat_el_haja_zehra/";
	    break;
	  case "wa":
	    _url = "https://api.whatsapp.com/send?phone=212655040173";
	    if(message==1)
	    {
	    	_url+="&text="+"https://chhiwatelhajazehra.github.io/Product?id="+curr_product.id;
	    }
	    break;
	  case "ex":
	    _url = "https://chhiwatelhajazehra.github.io/Products";
	    break;
	  case "main":
	    _url = "https://chhiwatelhajazehra.github.io/";
	    break;
	}

	window.open(_url, type);
}

function CreateElement(type, className, parent) {
	var element = document.createElement(type);
	if(className!='')
		element.className = className;
	parent.appendChild(element);
	return element;
}

class Product
{
	constructor(id, price, name, img_src, product_details_imgs, product_details_descriptions)
	{
		this.id = id;
		this.price = price;
		this.name = name;
		this.img_src = img_src;
		this.product_details_imgs = product_details_imgs;
		this.product_details_descriptions = product_details_descriptions;
		// add tags: for the website's search bar
	}
}

let main_url_ = window.location.protocol+"//"+window.location.hostname+":"+window.location.port;

const product_details_imgs = [
	[main_url_+'/assets/food/insta/00001.jpg'],
	[main_url_+'/assets/food/insta/00002.jpg'],
	[main_url_+'/assets/food/insta/00003.jpg'],
	[main_url_+'/assets/food/insta/00004.jpg'],
	[main_url_+'/assets/food/insta/00005.jpg'],
	[main_url_+'/assets/food/insta/00006.jpg'],
	[main_url_+'/assets/food/insta/00007.jpg'],
	[main_url_+'/assets/food/insta/00008.jpg'],
	[main_url_+'/assets/food/insta/00009.jpg'],
	[main_url_+'/assets/food/insta/00010.jpg'],
	[main_url_+'/assets/food/insta/00011.jpg'],
	[main_url_+'/assets/food/insta/00012.jpg'],
	[main_url_+'/assets/food/insta/00013.jpg'],
	[main_url_+'/assets/food/insta/00014.jpg'],
	[main_url_+'/assets/food/insta/00015.jpg'],
	[main_url_+'/assets/food/insta/00016.jpg'],
	[main_url_+'/assets/food/insta/00017.jpg'],
	[main_url_+'/assets/food/insta/00018.jpg'],
	[main_url_+'/assets/food/insta/00019.jpg'],
	[main_url_+'/assets/food/insta/00020.jpg'],
	[main_url_+'/assets/food/insta/00021.jpg'],
	[main_url_+'/assets/food/insta/00022.jpg'],
	[main_url_+'/assets/food/insta/00023.jpg'],
	[main_url_+'/assets/food/insta/00024.jpg'],
	[main_url_+'/assets/food/insta/00025.jpg'],
	[main_url_+'/assets/food/insta/00026.jpg'],
	[main_url_+'/assets/food/insta/00027.jpg'],
	[main_url_+'/assets/food/insta/00028.jpg'],
	[main_url_+'/assets/food/insta/00029.jpg'],
	[main_url_+'/assets/food/insta/00030.jpg'],
	[main_url_+'/assets/food/insta/00031.jpg'],
	[main_url_+'/assets/food/insta/00032_1.jpg', main_url_+'/assets/food/insta/00032_2.jpg'],
	[main_url_+'/assets/food/insta/00033.jpg'],
	[main_url_+'/assets/food/insta/00034.jpg'],
	[main_url_+'/assets/food/insta/00035_1.jpg', main_url_+'/assets/food/insta/00035_2.jpg'],
	[main_url_+'/assets/food/insta/00036.jpg'],
	[main_url_+'/assets/food/insta/00037.jpg'],
	[main_url_+'/assets/food/insta/00038_1.jpg', main_url_+'/assets/food/insta/00038_2.jpg'],
	[main_url_+'/assets/food/insta/00039.jpg'],
	[main_url_+'/assets/food/insta/00040_1.jpg', main_url_+'/assets/food/insta/00040_2.jpg'],
	[main_url_+'/assets/food/insta/00041_1.jpg', main_url_+'/assets/food/insta/00041_2.jpg'],

	[main_url_+'/assets/food/yt/001_1.jpg', main_url_+'/assets/food/yt/001_2.jpg', main_url_+'/assets/food/yt/001_3.jpg', main_url_+'/assets/food/yt/001_4.jpg'],
	[main_url_+'/assets/food/yt/002_1.jpg', main_url_+'/assets/food/yt/002_2.jpg', main_url_+'/assets/food/yt/002_3.jpg', main_url_+'/assets/food/yt/002_4.jpg'],
	[main_url_+'/assets/food/yt/003.jpg'],
	[main_url_+'/assets/food/yt/004.jpg'],
	[main_url_+'/assets/food/yt/005.jpg'],
	[main_url_+'/assets/food/yt/006_1.jpg', main_url_+'/assets/food/yt/006_2.jpg', main_url_+'/assets/food/yt/006_3.jpg', main_url_+'/assets/food/yt/006_4.jpg'],
	[main_url_+'/assets/food/yt/007_1.jpg', main_url_+'/assets/food/yt/007_2.jpg', main_url_+'/assets/food/yt/007_3.jpg', main_url_+'/assets/food/yt/007_4.jpg'],


	[main_url_+'/assets/food/others/001_1.jpg', main_url_+'/assets/food/others/001_2.jpg', main_url_+'/assets/food/others/001_3.jpg'],
	[main_url_+'/assets/food/others/002_1.jpg', main_url_+'/assets/food/others/002_2.jpg', main_url_+'/assets/food/others/002_3.jpg'],
	[main_url_+'/assets/food/others/003.jpg'],
	[main_url_+'/assets/food/others/004.jpg'],
	[main_url_+'/assets/food/others/005_1.jpg', main_url_+'/assets/food/others/005_2.jpg'],
	[main_url_+'/assets/food/others/006_1.jpg', main_url_+'/assets/food/others/006_2.jpg'],
	[main_url_+'/assets/food/others/007_1.jpg', main_url_+'/assets/food/others/007_2.jpg', main_url_+'/assets/food/others/007_3.jpg'],
	[main_url_+'/assets/food/others/008_1.jpg', main_url_+'/assets/food/others/008_2.jpg', main_url_+'/assets/food/others/008_3.jpg', main_url_+'/assets/food/others/008_4.jpg'],
	[main_url_+'/assets/food/others/009_1.jpg', main_url_+'/assets/food/others/009_2.jpg', main_url_+'/assets/food/others/009_3.jpg', main_url_+'/assets/food/others/009_4.jpg'],
	[main_url_+'/assets/food/others/010.jpg'],
	[main_url_+'/assets/food/others/011_1.jpg', main_url_+'/assets/food/others/011_2.jpg', main_url_+'/assets/food/others/011_3.jpg']
];

const product_details_descriptions = [
	"produit 01 decription",
	"produit 02 decription",
	"produit 03 decription",
	"produit 04 decription",
	"produit 05 decription",
	"produit 06 decription",
	"produit 07 decription",
	"produit 08 decription",
	"produit 09 decription",
	"produit 10 decription",
	"produit 11 decription",
	"produit 12 decription",
	"produit 13 decription",
	"produit 14 decription",
	"produit 15 decription",
	"produit 16 decription",
	"produit 17 decription",
	"produit 18 decription",
	"produit 19 decription",
	"produit 20 decription",
	"produit 21 decription",
	"produit 22 decription",
	"produit 23 decription",
	"produit 24 decription",
	"produit 25 decription",
	"produit 26 decription",
	"produit 27 decription",
	"produit 28 decription",
	"produit 29 decription",
	"produit 30 decription",
	"produit 31 decription",
	"produit 32 decription",
	"produit 33 decription",
	"produit 34 decription",
	"produit 35 decription",
	"produit 36 decription",
	"produit 37 decription",
	"produit 38 decription",
	"produit 39 decription",
	"produit 40 decription",
	"produit 41 decription",
	"produit 42 decription",
	"produit 43 decription",
	"produit 44 decription",
	"produit 45 decription",
	"produit 46 decription",
	"produit 47 decription",
	"produit 48 decription",
	"produit 49 decription",
	"produit 50 decription",
	"produit 51 decription",
	"produit 52 decription",
	"produit 53 decription",
	"produit 54 decription",
	"produit 55 decription",
	"produit 56 decription",
	"produit 57 decription",
	"produit 58 decription",
	"produit 59 decription",
	"produit 60 decription"
];

const products = [

	new Product('01', '00,00', 'بسطيلة الدجاج صغيرة', main_url_+'/assets/food/insta/00001.jpg'
		, [main_url_+'/assets/food/insta/00001.jpg'], "بسطيلة الدجاج صغيرة"),

	new Product('02', '00,00', 'Cigare', main_url_+'/assets/food/insta/00002.jpg'
		, product_details_imgs[1], product_details_descriptions[1]),
	new Product('03', '00,00', 'بريوات حوت صغار', main_url_+'/assets/food/insta/00003.jpg'
		, product_details_imgs[2], product_details_descriptions[2]),
	new Product('04', '00,00', 'produit 04', main_url_+'/assets/food/insta/00004.jpg'
		, product_details_imgs[3], product_details_descriptions[3]),

	// new Product('05', '00,00', 'produit 05', main_url_+'/assets/food/insta/00005.jpg'
	// 	, product_details_imgs[4], product_details_descriptions[4]),

	new Product('06', '00,00', 'produit 06', main_url_+'/assets/food/insta/00006.jpg'
		, product_details_imgs[5], product_details_descriptions[5]),

	// new Product('07', '00,00', 'produit 07', main_url_+'/assets/food/insta/00007.jpg'
	// 	, product_details_imgs[6], product_details_descriptions[6]),

	new Product('08', '00,00', 'produit 08', main_url_+'/assets/food/insta/00008.jpg'
		, product_details_imgs[7], product_details_descriptions[7]),
	new Product('09', '00,00', 'produit 09', main_url_+'/assets/food/insta/00009.jpg'
		, product_details_imgs[8], product_details_descriptions[8]),
	new Product('10', '00,00', 'produit 10', main_url_+'/assets/food/insta/00010.jpg'
		, product_details_imgs[9], product_details_descriptions[9]),
	new Product('11', '00,00', 'produit 11', main_url_+'/assets/food/insta/00011.jpg'
		, product_details_imgs[10], product_details_descriptions[10]),
	new Product('12', '00,00', 'produit 12', main_url_+'/assets/food/insta/00012.jpg'
		, product_details_imgs[11], product_details_descriptions[11]),
	new Product('13', '00,00', 'produit 13', main_url_+'/assets/food/insta/00013.jpg'
		, product_details_imgs[12], product_details_descriptions[12]),
	new Product('14', '00,00', 'produit 14', main_url_+'/assets/food/insta/00014.jpg'
		, product_details_imgs[13], product_details_descriptions[13]),
	new Product('15', '00,00', 'produit 15', main_url_+'/assets/food/insta/00015.jpg'
		, product_details_imgs[14], product_details_descriptions[14]),
	new Product('16', '00,00', 'produit 16', main_url_+'/assets/food/insta/00016.jpg'
		, product_details_imgs[15], product_details_descriptions[15]),
	new Product('17', '00,00', 'produit 17', main_url_+'/assets/food/insta/00017.jpg'
		, product_details_imgs[16], product_details_descriptions[16]),
	new Product('18', '00,00', 'produit 18', main_url_+'/assets/food/insta/00018.jpg'
		, product_details_imgs[17], product_details_descriptions[17]),
	new Product('19', '00,00', 'produit 19', main_url_+'/assets/food/insta/00019.jpg'
		, product_details_imgs[18], product_details_descriptions[18]),
	new Product('20', '00,00', 'produit 20', main_url_+'/assets/food/insta/00020.jpg'
		, product_details_imgs[19], product_details_descriptions[19]),
	new Product('21', '00,00', 'produit 21', main_url_+'/assets/food/insta/00021.jpg'
		, product_details_imgs[20], product_details_descriptions[20]),
	new Product('22', '00,00', 'produit 22', main_url_+'/assets/food/insta/00022.jpg'
		, product_details_imgs[21], product_details_descriptions[21]),
	new Product('23', '00,00', 'produit 23', main_url_+'/assets/food/insta/00023.jpg'
		, product_details_imgs[22], product_details_descriptions[22]),
	new Product('24', '00,00', 'produit 24', main_url_+'/assets/food/insta/00024.jpg'
		, product_details_imgs[23], product_details_descriptions[23]),
	new Product('25', '00,00', 'produit 25', main_url_+'/assets/food/insta/00025.jpg'
		, product_details_imgs[24], product_details_descriptions[24]),
	new Product('26', '00,00', 'produit 26', main_url_+'/assets/food/insta/00026.jpg'
		, product_details_imgs[25], product_details_descriptions[25]),
	new Product('27', '00,00', 'produit 27', main_url_+'/assets/food/insta/00027.jpg'
		, product_details_imgs[26], product_details_descriptions[26]),
	new Product('28', '00,00', 'produit 28', main_url_+'/assets/food/insta/00028.jpg'
		, product_details_imgs[27], product_details_descriptions[27]),

	// new Product('29', '00,00', 'produit 29', main_url_+'/assets/food/insta/00029.jpg'
	// 	, product_details_imgs[28], product_details_descriptions[28]),

	new Product('30', '00,00', 'produit 30', main_url_+'/assets/food/insta/00030.jpg'
		, product_details_imgs[29], product_details_descriptions[29]),
	new Product('31', '00,00', 'produit 31', main_url_+'/assets/food/insta/00031.jpg'
		, product_details_imgs[30], product_details_descriptions[30]),
	new Product('32', '00,00', 'produit 32', main_url_+'/assets/food/insta/00032_1.jpg'
		, product_details_imgs[31], product_details_descriptions[31]),
	new Product('33', '00,00', 'produit 33', main_url_+'/assets/food/insta/00033.jpg'
		, product_details_imgs[32], product_details_descriptions[32]),
	new Product('34', '00,00', 'produit 34', main_url_+'/assets/food/insta/00034.jpg'
		, product_details_imgs[33], product_details_descriptions[33]),
	new Product('35', '00,00', 'produit 35', main_url_+'/assets/food/insta/00035_1.jpg'
		, product_details_imgs[34], product_details_descriptions[34]),

	// new Product('36', '00,00', 'produit 36', main_url_+'/assets/food/insta/00036.jpg'
	// 	, product_details_imgs[35], product_details_descriptions[35]),
	// new Product('37', '00,00', 'produit 37', main_url_+'/assets/food/insta/00037.jpg'
	// 	, product_details_imgs[36], product_details_descriptions[36]),

	new Product('38', '00,00', 'produit 38', main_url_+'/assets/food/insta/00038_1.jpg'
		, product_details_imgs[37], product_details_descriptions[37]),
	new Product('39', '00,00', 'produit 39', main_url_+'/assets/food/insta/00039.jpg'
		, product_details_imgs[38], product_details_descriptions[38]),
	new Product('40', '00,00', 'produit 40', main_url_+'/assets/food/insta/00040_1.jpg'
		, product_details_imgs[39], product_details_descriptions[39]),
	new Product('41', '00,00', 'produit 41', main_url_+'/assets/food/insta/00041_1.jpg'
		, product_details_imgs[40], product_details_descriptions[40]),

	new Product('42', '00,00', 'produit 42', main_url_+'/assets/food/yt/001_2.jpg'
		, product_details_imgs[41], product_details_descriptions[41]),
	new Product('43', '00,00', 'produit 43', main_url_+'/assets/food/yt/002_2.jpg'
		, product_details_imgs[42], product_details_descriptions[42]),
	new Product('44', '00,00', 'produit 44', main_url_+'/assets/food/yt/003.jpg'
		, product_details_imgs[43], product_details_descriptions[43]),
	new Product('45', '00,00', 'produit 45', main_url_+'/assets/food/yt/004.jpg'
		, product_details_imgs[44], product_details_descriptions[44]),
	new Product('46', '00,00', 'produit 46', main_url_+'/assets/food/yt/005.jpg'
		, product_details_imgs[45], product_details_descriptions[45]),
	new Product('47', '00,00', 'produit 47', main_url_+'/assets/food/yt/006_4.jpg'
		, product_details_imgs[46], product_details_descriptions[46]),
	new Product('48', '00,00', 'produit 48', main_url_+'/assets/food/yt/007_3.jpg'
		, product_details_imgs[47], product_details_descriptions[47]),
	
	new Product('49', '00,00', 'produit 49', main_url_+'/assets/food/others/001_1.jpg'
		, product_details_imgs[48], product_details_descriptions[48]),
	new Product('50', '00,00', 'produit 50', main_url_+'/assets/food/others/002_1.jpg'
		, product_details_imgs[49], product_details_descriptions[49]),
	new Product('51', '00,00', 'produit 51', main_url_+'/assets/food/others/003.jpg'
		, product_details_imgs[50], product_details_descriptions[50]),
	new Product('52', '00,00', 'produit 52', main_url_+'/assets/food/others/004.jpg'
		, product_details_imgs[51], product_details_descriptions[51]),
	new Product('53', '00,00', 'produit 53', main_url_+'/assets/food/others/005_1.jpg'
		, product_details_imgs[52], product_details_descriptions[52]),
	new Product('54', '00,00', 'produit 54', main_url_+'/assets/food/others/006_1.jpg'
		, product_details_imgs[53], product_details_descriptions[53]),
	new Product('55', '00,00', 'produit 55', main_url_+'/assets/food/others/007_1.jpg'
		, product_details_imgs[54], product_details_descriptions[54]),
	new Product('56', '00,00', 'produit 56', main_url_+'/assets/food/others/008_1.jpg'
		, product_details_imgs[55], product_details_descriptions[55]),
	new Product('57', '00,00', 'produit 57', main_url_+'/assets/food/others/009_1.jpg'
		, product_details_imgs[56], product_details_descriptions[56]),
	new Product('58', '00,00', 'produit 58', main_url_+'/assets/food/others/010.jpg'
		, product_details_imgs[57], product_details_descriptions[57]),
	new Product('59', '00,00', 'produit 59', main_url_+'/assets/food/others/011_1.jpg'
		, product_details_imgs[58], product_details_descriptions[58])
];

// -------------- toggle menu -------------- //

function menutoggle()
{
	if(menuItems.style.maxHeight == "0px")
		menuItems.style.maxHeight = "200px";
	else
		menuItems.style.maxHeight = "0px";
}

var menuItems=null;

let update = setInterval(() => {

	menuItems = document.getElementById("MenuItems");

	if(menuItems!=null) {
		clearInterval(update);
	}

}, 0);