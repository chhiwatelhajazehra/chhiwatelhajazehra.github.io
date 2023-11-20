// Nav Menu Toggle

// let navMenuItems = $("#nav-menu-items")[0];

// navMenuItems.style.maxHeight="0px";

// $("#nav-menu-icon").on("click", function()
// {
//   if(navMenuItems.style.maxHeight=="0px")
//   {
//     navMenuItems.style.maxHeight="200px";
//   }
//   else
//   {
//     navMenuItems.style.maxHeight="0px";
//   }
// });

// menu-btn START

    $('#menu-btn').click(function()
    {
        $('nav .navigation ul').addClass('active')
        $('#menu-btn').addClass('active')
    });
    $('#close-menu-btn').click(function()
    {
        $('nav .navigation ul').removeClass('active')
        $('#menu-btn').removeClass('active')
    });

// menu-btn END

// nav START

    $("nav").hover
    (
        // hovering
        function ()
        {
            $(":root").css({
                "--nav-bg-clr": "#fff",
                "--nav-link-clr": "var(--blue)",
                "--nav-logo-clr":"rgb(35, 35, 85)",
                "--nav-box-shadow":"2px 2px 10px rgba(0, 0, 0, 0.15)",
                "--menu-clr-invert":"invert(0)"
            });
        },

        // not
        function ()
        {
            $(":root").css({
                "--nav-bg-clr": "transparent",
                "--nav-link-clr": "#fff",
                "--nav-logo-clr":"#fff",
                "--nav-box-shadow":"none",
                "--menu-clr-invert":"invert(1)"
            });
        }
    );

    setInterval(function()
    {
        if($(window).scrollTop()>0)
        {
            $(":root").css({
                "--nav-bg-clr": "#fff",
                "--nav-link-clr": "var(--blue)",
                "--nav-logo-clr":"rgb(35, 35, 85)",
                "--nav-box-shadow":"2px 2px 10px rgba(0, 0, 0, 0.15)",
                "--menu-clr-invert":"invert(0)"
            });
        }
        else
        {   
            if(!$("nav").is(":hover"))
            {
                $(":root").css({
                    "--nav-bg-clr": "transparent",
                    "--nav-link-clr": "#fff",
                    "--nav-logo-clr":"#fff",
                    "--nav-box-shadow":"none",
                    "--menu-clr-invert":"invert(1)"
                });
            }
        }
    }, 100);

// nav END