const h2result = document.getElementById('canvas-result')

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

const onFinishWheel = result => {
    data.map((item, index) => {
        if (item.text == result.text) {
            data.splice(index, 1)
        }
    })

    h2result.innerText = result.text
}

let theWheel = null

const CreateWheel = () => {
    theWheel = new Winwheel({
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
            duration: 8,
            spins: 2,
            callbackFinished: result => onFinishWheel(result)
        },
    
        pointerGuide:
        {
            display: true,
            strokeStyle: 'black',
            lineWidth: 4
        }
    })
}

CreateWheel()

const onClickStartButton = () => {
    try {
        theWheel.clearCanvas()
    } catch (error) {
        console.log(error)
    }
    CreateWheel()
    theWheel.startAnimation()
}

window.wheel = theWheel