jQuery(function (){
    if($(".sidebar-menu-icon").length){
        $(".sidebar-menu-icon").on("click", function(){
            $(".sidebar-menu-list").show();
            $(this).hide();
            $(".sidebar-menu-active").show();
        });
        $(".sidebar-menu-active").on("click", function () {
            $(".sidebar-menu-list").hide();
            $(this).hide();
            $(".sidebar-menu-icon").show();
        });
    }
})