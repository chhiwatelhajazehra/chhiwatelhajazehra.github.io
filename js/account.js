// Toggle Form

let log = $("#login-form")[0];
let reg = $("#reg-form")[0];
let ind = $("#indicator")[0];

let log_span = $("#login-span")[0];
let reg_span = $("#reg-span")[0];

log_span.onclick = function(){login()}
reg_span.onclick = function(){register()}

function login()
{
	log.style.transform="translateX(300px)";
	reg.style.transform="translateX(300px)";
	ind.style.transform="translateX(0px)";
}

function register()
{
	log.style.transform="translateX(0px)";
	reg.style.transform="translateX(0px)";
	ind.style.transform="translateX(100px)";
}