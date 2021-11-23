//Daily offers
fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        //Log fetched json
        console.log(data)

        const test = JSON.stringify(data.data.daily.entries)
        const testing = JSON.parse(test);
        console.log(testing);

        $.each(data.data.daily.entries, function(i, item) {
            $('body > #cards_daily').append('<div class="card"> ' + item.items[0].name + ' <br> ' + item.finalPrice + '<img src="https://fortnite-api.com/images/vbuck.png" height="20px">' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>');
        });
    });

//Features offers
fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        //Log fetched json
        console.log(data)

        const test = JSON.stringify(data.data.featured.entries)
        const testing = JSON.parse(test);
        console.log(testing);

        $.each(data.data.featured.entries, function(i, item) {
            $('body > #cards_featured').append('<div class="card"> ' + item.items[0].name + ' <br> ' + item.finalPrice + ' vBucks' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>');
        });
    });