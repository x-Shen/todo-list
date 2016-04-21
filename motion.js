/**
 * Created by xinshen on 4/20/16.
 */
var add_new_line = function(){
    var to_add = $("#todos").val();
    var due_date = $("#due_date").val();
    console.log(to_add);
    $("#t").append(
        $("<tr\>").append($("<td\>").append("<input class='checkbox' type='checkbox'>"))
            .append($("<td\>").text(to_add))
            .append($("<td\>").text(due_date))
            .append($("<td\>").append("<button class='cross'>X")));
};

var check_and_cross = function(){
    if($(this).prop('checked')){
        $(this).parent().parent().addClass("done");
        $(this).parent().parent().find(".cross").prop('disabled',true);}
    else{
        $(this).parent().parent().removeClass("done");
        $(this).parent().parent().find(".cross").prop('disabled',false);
    }
};

var check_all = function(){
    if( $(this).prop('checked')){
        $("tr").addClass("done");
        $(".checkbox").prop( "checked", true );
    }
};
var cb = function(){$(this).parent().parent().remove()};

$( "#submit" ).click(add_new_line);
$(".cross").click(cb);
$("#t").on("click",".cross",cb);
$("#t").on('click','.checkbox',check_and_cross);
$("#t").on("click",".check_all", check_all);