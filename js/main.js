const h2result = document.getElementById('canvas-result')
console.log(h2result)

const fullNames = [
    'Балянова Арина',
    'Гелло Мария',
    'Гончаренко Роман',
    'Казаков Матвей',
    'Краснов Александр',
    'Кузьменко Софья',
    'Купцов Федор',
    'Митряев Андрей',
    'Натанилова Эвелина',
    'Натанилова Этель',
    'Платонов Арсений',
    'Райская-Орешкина Анна',
    'Рыбакова Ульяна',
    'Сидоров Александр',
    'Тишкин Ярослав',
    'Торутева Диана',
    'Фадеева Ольга',
    'Фомичева Елизавета',
    'Хабенко Александра',
    'Цветков Егор',
    'Шапавалов Никита',
    'Шопин Олег'
]

const data = fullNames.map((element, index) => ({text: element, fillStyle: index % 2 == 0 ? '#60BA97' : '#FFFFF'}))

// const data = [
//     {
//         text: 'text 1'
//     },

//     {
//         text: 'text 2'
//     },

//     {
//         text: 'text 3'
//     },

//     {
//         text: 'text 4'
//     },

//     {
//         text: 'text 5'
//     }
// ]

const theWheel = new Winwheel({
    numSegments : data.length,
    outerRadius : 530,
    textFontSize : 32,
    innerRadius: 54,
    textMargin: 38,
    textFillStyle: '#FFFFFF',
    textLineWidth: '1',
    segments: data,
    animation:
    {
        type: 'spinToStop',
        yoyo: true,
        direction: 'clockwise',
        duration: 14,
        spins: 4,
        callbackFinished: result => h2result.textContent = result.text
    },

    pointerGuide:
    {
        display: true,
        strokeStyle: 'black',
        lineWidth: 4
    }
})

const onClickStartButton = () => {
    theWheel.startAnimation()
}

window.wheel = theWheel