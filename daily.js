//Daily offers
fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        $.each(data.data.daily.entries, function(i, item) {
            if (data.data.daily.entries[i].bundle != null) {
                return;
            }
            var html = '';
            if (item.items[0].rarity.displayValue) {
                var bgcolorforDiv = fetchbackGround(item.items[0].rarity.displayValue);
                html = '<div class="card" style="background:' + bgcolorforDiv + '"> <b>' + item.items[0].name + '</b> <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';

            } else {
                html = '<div class="card"> <b>' + item.items[0].name + '</b> <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';
            }
            $('body > #cards_daily').append(html);
        });
    });


//Featured offers
fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        $.each(data.data.featured.entries, function(i, item) {
            if (data.data.featured.entries[i].bundle != null) {
                return;
            }
            var html = '';
            if (item.items[0].rarity.displayValue) {
                var bgcolorforDiv = fetchbackGround(item.items[0].rarity.displayValue);
                html = '<div class="card" style="background:' + bgcolorforDiv + '"> <b>' + item.items[0].name + '</b> <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';

            } else {
                html = '<div class="card"> <b>' + item.items[0].name + '</b> <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';
            }
            $('body > #cards_featured').append(html);
        });
    });

fetch('https://fortnite-api.com/v2/shop/br')
    .then(res => res.json())
    .then(data => {
        $.each(data.data.specialFeatured.entries, function(i, item) {
            if (data.data.specialFeatured.entries[i].bundle != null) {
                return;
            }
            var html = '';
            if (item.items[0].rarity.displayValue) {
                var bgcolorforDiv = fetchbackGround(item.items[0].rarity.displayValue);
                html = '<div class="card" style="background:' + bgcolorforDiv + '"> <b>' + item.items[0].name + '</b> <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';

            } else {
                html = '<div class="card"> <b>' + item.items[0].name + '</b> <br> <span>' + item.finalPrice + '<img id="v_buck" src="https://fortnite-api.com/images/vbuck.png" height="28px"> </span>' + ' <br> ' + '<img id="image" src="' + item.items[0].images.icon + '"></img>' + '</div>';
            }
            $('body > #cards_featured_special').append(html);
        });
    });

//Timer
(function() {
    var start = new Date;
    start.setHours(2, 0, 0); // 02.00

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
}());

//Function to check the color
function fetchbackGround(rarity) {
    var background = "rgb(148, 148, 150)";
    switch (rarity) {
        case "Common":
            background = "radial-gradient(#d0d0d0 0%,#6d7071 100%)";
            break;
        case "Uncommon":
            background = "radial-gradient(#5bad03 0%,#01700a 100%)";
            break;
        case "Rare":
            background = "radial-gradient(#3dc7ff 0%,#0059a1 100%)";
            break;
        case "Epic":
            background = "radial-gradient(#d27bf4 0%,#7907a5 100%)";
            break;
        case "Legendary":
            background = "radial-gradient(#fb9625 0%,#875134 100%)";
            break;
        case "Icon Series":
            background = "#00FFFF";
            break;
    }
    return background;
}
//background-image: radial-gradient(#d27bf4 0%,#7907a5 100%)