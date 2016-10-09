document.addEventListener('DOMContentLoaded', function() {



    // Zadanei 1
    // Po najechaniu myszką na element menu wysuń podmenu. Jeżeli element nie ma  podmenu, to dodaj je w HTML-u.

    var mainLiElements = document.querySelectorAll('.nav>li');

    var arrow = document.querySelector('.arrow');

    for (var i = 0; i < mainLiElements.length; i++) {

        mainLiElements[i].addEventListener('mouseover', function() {
            var secondLevelUl = this.firstElementChild;
            if (secondLevelUl !== null) { //jezeli taki element istnieje czyli jezeli element nie rowna sie null
                secondLevelUl.style.display = "block";
                arrow.style.display = "inline";
            }
        });
        mainLiElements[i].addEventListener('mouseout', function() {
            var secondLevelUl = this.firstElementChild;
            if (secondLevelUl !== null) {
                secondLevelUl.style.display = "none";
                arrow.style.display = "none";
            }
        });
    };

    // Zadanie 2.
    // Dwa bloki (z obrazkami). Po najechaniu myszką schowaj cały blok z nazwą

    var clairImage = document.querySelector('div.clair_img');
    var divWithOpacityClaire = document.querySelector('div.clair_opa');

    var margaritaImage = document.querySelector('div.margarita_img');
    var divWithOpacityMargarita = document.querySelector('div.margarita_opa');

    clairImage.addEventListener('mouseover', function() {
        divWithOpacityClaire.style.display = "none";
    });

    clairImage.addEventListener('mouseout', function() {
        divWithOpacityClaire.style.display = "block";
    });


    margaritaImage.addEventListener('mouseover', function() {
        divWithOpacityMargarita.style.display = "none";
    });

    margaritaImage.addEventListener('mouseout', function() {
        divWithOpacityMargarita.style.display = "block";
    });


    // Zadanie 3.
    // Stwórz przesuwany slider

    var prev = document.querySelector('p.arrow1'); //strzalka przewijajace zdjecia w sliderze
    var next = document.querySelector('p.arrow2'); //strzalka przewijajace zdjecia w sliderze

    var allSliderLi = document.querySelectorAll('.slider li'); //tablica wszystkich li zawierajacych zdjecia do slidera

    var visibleImage = 0; //zmienna do przechowywania indeksow zdjec

    allSliderLi[visibleImage].classList.add('visible'); //dodaje do zerowego elementu klase 'visible' (czyli display:inline-block)

    next.addEventListener('click', function() {

        allSliderLi[visibleImage].classList.remove('visible'); //po nacisnieciu guzika zabierz zerowemu elementowi klase visible
        visibleImage++ //zwieksz licznik, czyli indeks zwiekszy sie o 1

        if (visibleImage == allSliderLi.length) { //jesli indeks juz rowna sie ilosci elemento
            visibleImage = 0; //to go wyzeruj zeby obrzki przewijaly sie od poczatku; mozna by tu zrobic (visibleImage = visibleImage - 1) wtedy zatrzymalibysmy sie na ostatnim obrazku
        }

        allSliderLi[visibleImage].classList.add('visible');

    });

    prev.addEventListener('click', function() {

        allSliderLi[visibleImage].classList.remove('visible'); //po nacisnieciu guzika zabierz biezacemu elementowi klase visible
        visibleImage-- //zwieksz licznik, czyli indeks zwiekszy sie o 1

        if (visibleImage < 0) { //jesli indeks jest ju mniejszy od zerowego
            visibleImage = allSliderLi.length - 1; //to nastaw go na wartosc poczatkowa, zeby mozna bylo przewijac jeszcze raz; mozna by tu zrobic (visibleImage = visibleImage + 1) wtedy zatrzymalibysmy sie na ostatnim obrazku
        }

        allSliderLi[visibleImage].classList.add('visible');

    });


    // Funkcjonalności
    // a) trzy listy drop-down –
    // Po kliknięciu w strzałkę pierwszej listy zostaje
    // rozwinięte pole z opcjami do wyboru:
    // Chair Clair
    // Chair Margarita
    // Chair Selena


    var allListArrows = document.querySelectorAll('.list_arrow'); //tablica
    var arrow1 = allListArrows[0];
    var arrow2 = allListArrows[1];
    var arrow3 = allListArrows[2];


    var allListPanels = document.querySelectorAll('.list_panel'); //tablica z ukrytymi listami rozwijalnymi
    var listPanel1 = allListPanels[0];
    var listPanel2 = allListPanels[1];
    var listPanel3 = allListPanels[2];

    var counter1 = 0;

    arrow1.addEventListener('click', function() {
        if (counter1 % 2 == 0) {
            listPanel1.style.display = 'block';
        } else {
            listPanel1.style.display = 'none';
        }
        counter1++;
    });

    var counter2 = 0;
    arrow2.addEventListener('click', function() {
        if (counter2 % 2 == 0) {
            listPanel2.style.display = 'block';
        } else {
            listPanel2.style.display = 'none';
        }
        counter2++;
    });

    var counter3 = 0;
    arrow3.addEventListener('click', function() {
        if (counter3 % 2 == 0) {
            listPanel3.style.display = 'block';
        } else {
            listPanel3.style.display = 'none';
        }
        counter3++;
    });

    //var listPanel1 = allListPanels[0];

    var listPanel1Options = listPanel1.children // tablica  <li>Clair</li> <li>Margarita</li> <li>Selena</li>

    // var clair = listPanel1Options[0];
    // var margarita = listPanel1Options[1];
    // var selena = listPanel1Options[2];

    var alllistLabels = document.querySelectorAll('.list_label'); // Tablica ze spanami : 'Wybierz rodzaj', 'Wybierz kolor', 'Wybierz material'
    var spanChairName = alllistLabels[0];
    var spanChairColor = alllistLabels[1];
    var spanChairFabric = alllistLabels[2];

    var title = document.querySelector('h4.title'); //tam gdzie w podsumowaniu ma isc nazwa krzesla
    var titleValue = document.querySelector('h4.title.value'); //tam gdzie w podsumowaniu ma isc cena krzesla





    var totalSum = document.querySelector('div.sum strong');

    var prices = {
        chair: 0,
        color: 0,
        pattern: 0,
        transport: 0
    };

    // function calculateOnlyChariAndColor() {
    //     var sum = prices["chair"] + prices["color"];
    //     console.log("calculateOnlyChariAndColor: ", sum);
    // }

    function calculateTotalPrice() {
        var sum = 0;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        for (property in prices) {
            // console.log('property: ', property);
            sum = sum + prices[property]; // wartosc danego property
        }
        totalSum.innerHTML = sum + " zl";
    }
    //wybor krzesla:
    for (i = 0; i < listPanel1Options.length; i++) {

        listPanel1Options[i].addEventListener('click', function() {
            counter1 = 0; //resetuje licznik danej listy bo inaczej po wybraniu danego krzesla i checi zmiany trzeba by bylo dwa razy kliknac na trojkat do rozwijania gownej listy
            listPanel1.style.display = 'none'; //kiedy wybierzemy dane krzeslo cala lista musi zniknac
            spanChairName.innerHTML = this.innerHTML; //wstaw nazwe wybranego krzesla do spanu glownej listy
            spanChairName.style.color = "#818181"; //zmienie jeszcze zeby font wybranego krzesla sie zmienil
            title.innerHTML = "Chair " + spanChairName.innerHTML; // dodaj nazwe krzesla do podsumowania
            titleValue.innerHTML = this.dataset.price; // dodaj cene krzesla do podsumowania
            prices.chair = parseInt(this.dataset.price, 10);
            calculateTotalPrice();
        });
    }

    // <div class="sum"><strong></strong></div>

    var listPanel2Options = listPanel2.children; // tablica  <li>Czerwony</li> <li>Czarny</li> <li>Pomaranczowy</li>
    var listPanel3Options = listPanel3.children // tablica <li>Tkanina</li> <li>Skóra</li>;

    var spanColor = document.querySelector('span.color'); // //tam gdzie w podsumowaniu ma isc nazwa kolor
    var spanColorValue = document.querySelector('span.color.value'); //tam gdzie w podsumowaniu ma isc kolor krzesla

    //wybor koloru:
    for (i = 0; i < listPanel2Options.length; i++) {
        listPanel2Options[i].addEventListener('click', function() {
            counter2 = 0; //resetuje licznik danej listy bo inaczej po wybraniu danego koloru i checi zmiany trzeba by bylo dwa razy kliknac na trojkat do rozwijania gownej listy
            listPanel2.style.display = 'none'; //kiedy wybierzemy dany kolor krzeslo cala lista musi zniknac
            spanChairColor.innerHTML = this.innerHTML; //wstaw wybrany kolor do spanu glownej listy
            spanChairColor.style.color = "#818181"; //zmienie jeszcze zeby font wybranego koloru zmienil sie
            spanColor.innerHTML = "Kolor " + this.innerHTML; // dodaj kolor krzesla do podsumowania
            spanColorValue.innerHTML = this.dataset.price; // dodaj cene koloru krzesla do podsumowania
            prices.color = parseInt(this.dataset.price, 10);
            calculateTotalPrice();
        });
    }

    var spanPattern = document.querySelector('span.pattern'); // //tam gdzie w podsumowaniu ma isc rodzaj tkaniny
    var spanPatternValue = document.querySelector('span.pattern.value'); //tam gdzie w podsumowaniu ma isc kolor krzesla

    // wybor tkaniny:
    for (i = 0; i < listPanel3Options.length; i++) {
        listPanel3Options[i].addEventListener('click', function() {
            counter3 = 0; //resetuje licznik danej listy bo inaczej po wybraniu danego krzesla i checi zmiany trzeba by bylo dwa razy kliknac na trojkat do rozwijania gownej listy
            listPanel3.style.display = 'none'; //kiedy wybierzemy dane krzeslo cala lista musi zniknac
            spanChairFabric.innerHTML = this.innerHTML; //wstaw nazwe wybranego krzesla do spanu glownej listy
            spanChairFabric.style.color = "#818181"; //zmienie jeszcze zeby font wybranego krzesla sie zmienil
            spanPattern.innerHTML = this.innerHTML; // dodaj tkanine krzesla do podsumowania
            spanPatternValue.innerHTML = this.dataset.price; //dodaj cenne tkaniny do podsumowania
            prices.pattern = parseInt(this.dataset.price, 10);
            calculateTotalPrice();
        });
    }

    // <input type="checkbox" id="transport" data-transport-price="200">

    var checkbox = document.getElementById('transport');
    var spanTransport = document.querySelector('span.transport'); // //tam gdzie w podsumowaniu ma isc rodzaj tkaniny
    var spanTransportValue = document.querySelector('span.transport.value'); //tam gdzie w podsumowaniu ma isc kolor krzesla


    checkbox.addEventListener("click", function() {

        if (checkbox.checked == true) {
            spanTransport.innerHTML = "Transport";
            spanTransportValue.innerHTML = this.dataset.transportPrice;
            prices.transport = parseInt(this.dataset.transportPrice);
        } else {
            spanTransport.innerHTML = "";
            spanTransportValue.innerHTML = "";
            prices.transport = 0;
        }
        calculateTotalPrice();
    });






});
