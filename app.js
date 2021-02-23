console.log("Let's get this party started!");

$(mainFunction);

function mainFunction() {
    $("#submit").on("click", searchAJAX)
}

async function searchAJAX(){
    let search = $("search-term").val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(response);
    $("search-term").empty();
    showResponse(response);
}

function showResponse(res){
    $("gifs").append(res.data);
}

