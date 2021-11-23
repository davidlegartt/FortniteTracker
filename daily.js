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
            console.log(i);
            $('body > #cards_daily').append('<div class="card"> ' + item.items[0].name + ' <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>');
            //console.log(item.items[0].rarity.displayValue + " - " + item.items[0].name)
        });
    });

//Featured offers
fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        //Log fetched json
        console.log(data)

        const test = JSON.stringify(data.data.featured.entries)
        const testing = JSON.parse(test);
        console.log(testing);

        $.each(data.data.featured.entries, function(i, item) {
            $('body > #cards_featured').append('<div class="card"> ' + item.items[0].name + ' <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>');

        });
    });

fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        //Log fetched json
        console.log(data)

        const test = JSON.stringify(data.data.specialFeatured.entries)
        const testing = JSON.parse(test);
        console.log(testing);

        $.each(data.data.specialFeatured.entries, function(i, item) {
            $('body > #cards_featured_special').append('<div class="card"> ' + item.items[0].name + ' <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + '  <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>');

        });
    });

//timer
(function() {
    var start = new Date;
    start.setHours(2, 0, 0); // 11pm

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
            start.setDate(start.getDate() + 1);
        }
        var remain = ((start - now) / 1000);
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
        document.getElementById('time').innerHTML =
            hh + ":" + mm + ":" + ss;
        setTimeout(tick, 1000);
    }

    document.addEventListener('DOMContentLoaded', tick);
})();
