console.log("Let's get this party started!");

$(mainFunction);

function mainFunction() {
    $("#form").on("submit", searchAJAX);
    
    $("#remove").on("click", () => {
        $(".gifs").empty();
    });
}

async function searchAJAX(evt){
    evt.preventDefault();
    let search = $("#search-term").val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(response);

    $("#search-term").val("");
    showResponse(response);
}

function showResponse(res){
    let index = Math.floor(Math.random() * res.data.data.length);
    let gifURL = res.data.data[index].images.original.url;
    $(".gifs").append($(`<div class=gifGallery><img src="${gifURL}"></div>`));
}