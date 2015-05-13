var templateHTML, data, i;

function getData (){
    $.ajax({
        type: "GET",
        url: "/assignments",
        dataType: 'json',
        success: function(response){
            console.log(response);
            data = response;
            appendData();
        },
        error: function(xhr, status){
            alert('Error: ', status);
        },
        complete: function(){
            console.log("Ajax complete yo");
        }
    });
}



function appendData(){
    for(i = 0; i < data.length; i++){
        $('.container').append(templateHTML);
        var appendChild = $('.container').children().last();
        appendChild.children('.btn').attr("data-id", data[i]._id);
        appendChild.children('#name').append(data[i].name);
        appendChild.children('#age').append(data[i].age);
        appendChild.children('#score').append(data[i].score);
        if(data[i].living == true){
            appendChild.children('#living').append("Alive");
        } else {
            appendChild.children('#living').append("DEAD!");
        }
        appendChild.children('#dateCompleted').append(data[i].date_completed);
    }
    $('.container').on("click", ".btn", function(){
        console.log($(this).data("id"));
        $.ajax({
            type: "DELETE",
            url: "/assignments/" + $(this).data("id"),
            success: function(){
               //alert("He dead");

            },
            error: function(xhr, status){
                alert("Error: ", status);
            },
            complete: function(){
                console.log("Delete complete");
            }

        });

        $(this).parent().slideUp("slow");

    });
}

$(document).ready(function(){
    $.ajax({
        url: '/template',
        success: function(response){
            templateHTML = response;
            getData();
        }
    });
});