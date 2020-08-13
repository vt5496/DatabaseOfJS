//найдем нужный элемент в DOM
const root = document.querySelector('#root');

//массив кнопок
const buttons = [
    {
        name: 'SHOW',
        event() {
            Figure.create(figures)
        }
    },
    {
        name: 'HIDE',
        event() {
            hideContent()
        }
    },
    {
        name: 'ADD',
        event() {
            addSquare()
        }
    },
    {
        name: 'DELETE FIRST ITEM',
        event(){
            deleteFirst()
        }
    },
    {
        name: 'DELETE LAST ITEM',
        event() {
            deleteLast()
        }
    }

]

//отобразим кнопки
for (let b of buttons) {
    let create = document.createElement('button')
    create.innerText = b.name;
    create.style.background = '#efe2e7';
    create.style.width = '80px';
    create.style.height = '40px';
    create.style.borderRadius = '10px';
    create.style.margin = '20px';
    document.body.prepend(create)
    create.addEventListener('click', () => b.event())
}

//массив фигур
const figures = [];

//ФУНКЦИИ

//функция перезагрузки
const reload = () => {
    if (!!root.innerHTML === false) {
        root.innerHTML = ''
    } else {
        Figure.create(figures)
    }
}

//функция добавления квадратов
const addSquare = () => {
    figures[figures.length] = new Square({
        id: `square${figures.length}`,
        background: 'red',
        a: 100
    })
    reload()
}

//прячит контент
const hideContent = () => {
    root.innerHTML = '';
}

//удаление первого элемента
const deleteFirst = () => {
    figures.splice(0, 1);
    reload()
}

//удаление последнего элемента
const deleteLast = () => {
    figures.splice(--figures.length, 1);
    reload()
}

//КЛАССЫ

//классы фигур
class Figure {
    constructor(props) {
        this.id = props.id
        this.background = props.background;
    }

    static create(arr) {
        root.innerHTML = '';
        for (let obj of arr) {
            const div = document.createElement('div');
            div.style.margin = '20px'
            switch (obj.type) {
                case 'SQUARE':
                    div.id = obj.id;
                    div.style.background = obj.background;
                    div.style.width = div.style.height = `${obj.a}px`;
                    root.append(div)
                    break;
                case 'CIRCLE':
                    div.id = obj.id;
                    div.style.background = obj.background;
                    div.style.width = div.style.height = `${obj.r}px`;
                    div.style.borderRadius = '50%'
                    root.append(div)
                    break;
                default:
                    console.log('Error')
                    break;
            }


        }
    }
}

class Square extends Figure {
    constructor(props) {
        super(props);
        this.type = 'SQUARE';
        this.a = props.a;
    }
}

class Circle extends Figure {
    constructor(props) {
        super(props);
        this.type = 'CIRCLE';
        this.r = props.r;
    }
}

//фигуры
figures[figures.length] = new Circle({
    id: 'circle1',
    background: 'black',
    r: 100
})
figures[figures.length] = new Square({
    id: 'square2',
    background: 'red',
    a: 100
})
figures[figures.length] = new Circle({
    id: 'circle2',
    background: 'black',
    r: 100
})
