
$(window).load(function(){
$dropdown = $("#contextMenu");
$(".dsDeTai_actionButton").click(function() {
    var id = $(this).closest("tr").children().first().html();
    $(this).after($dropdown);
    $dropdown.find(".payLink").attr("href", "/transaction/pay?id="+id);
    $dropdown.find(".delLink").attr("href", "/transaction/delete?id="+id);
    $(this).dropdown();
});
});//]]>  
