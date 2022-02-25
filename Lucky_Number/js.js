
var button = document.getElementById('lucky-button');

var input = document.getElementById('lucky-input');

var luckyTimeS = document.querySelector('.lucky-time');

var luckyImport = document.querySelector('.lucky-import');

var luckyIllegal = document.querySelector('.lucky-illegal');

var luckyRandom = document.querySelector('.lucky-random');

var winPrize = document.querySelector('.win-prize');

var outOfMove = document.querySelector('.out-of-move');

function randomNumbers() {

    var number = Math.floor(Math.random() * 10)


    if (input.value === '') {

        luckyImport.style.display = 'block'

        setTimeout(function () {

            luckyImport.style.display = 'none';

        }, 2000)

        luckyTimeS.classList.remove('lucky-time-block');

        return undefined;


    } if (input.value > 10) {

        luckyIllegal.style.display = 'block'

        setTimeout(function () {

            luckyIllegal.style.display = 'none';

        }, 2000)

        luckyTimeS.classList.remove('lucky-time-block');

        input.focus();
        input.value = '';

        return undefined;

    } if (input.value < 0) {

        luckyIllegal.style.display = 'block'

        setTimeout(function () {

            luckyIllegal.style.display = 'none';

        }, 2000)

        luckyTimeS.classList.remove('lucky-time-block');

        input.focus();
        input.value = '';

        return undefined;

    } if (input.value === number) {
        winPrize.style.display = 'block';
    } else {

        luckyTimeS.classList.add('lucky-time-block');

        setTimeout(function () {

            luckyRandom.innerHTML = `<p>Số may mắn là: ${number}</p>`;

            luckyTimeS.classList.remove('lucky-time-block')
        }, 3000)

    }

    input.focus();
    input.value = '';


}

var index = 0;

button.addEventListener('click', function (e) {

    randomNumbers()

    index++

    if (index >= 3) {
        setTimeout(function () {
            outOfMove.style.display = 'block';
            button.style.display = 'none';
        }, 3000);
    }

})
