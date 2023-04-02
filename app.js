$(document).ready(function () {
    console.log("Let's get this party started!");
    // const form = $('#giphy-form');
    // const submitBtn = $('#search-button');
    let $gifArea = $("#gif-area");



    $('#giphy-form').on('submit', async function (e) {
        e.preventDefault();
        let search = $("#search-term").val();
        $("#search-term").val('');

        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                q: search,
                api_key: 'HtikKdxRo5jDRV5L4NdoVdxezw0a2obx',
            }
        });
        console.log(response.data);
        addGif(response.data);
    });

    function addGif(searchResponse) {
        if (searchResponse.data.length) {
            let index = Math.floor(Math.random() * searchResponse.data.length);
            let newGif = $('<img>', {
                src: searchResponse.data[index].images.original.url,
            });
            $gifArea.append(newGif);
        }

    }

    $('#remove-button').on('click', function () {
        $gifArea.empty();
    });
    //.images.original.url })
})