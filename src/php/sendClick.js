import $ from "jquery";

export const SendClick = (title) => {
   
    $.ajax({
        
        url: "https://johngoodell.biz/mk/click.php", 
        method: "POST",
        dataType: "JSON",
        data: {
            pg: title,
        },
        success: function () { },
        complete: function () { },
    });
}

// http://localhost/westore/marketch/click.php