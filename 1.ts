// При работе с классовым компонентом:
// будут вызваны:  1 (рождение - Mount) - constructor, render, componentDidMount
//                 2 (состояние компонента изменилось - Update) - render, componentDidUpdate
//                 3 (состояние удаления - OutMount) - componentWillMount

import { useEffect } from "react";

class App extends React.Component { // классовый компонент
  timeout: undefined;

  constructor(props) { //  при инициализации класса (первоначальной отрисовки элемента в браузере)
    // Коснтруктор определяет первоначальное состояние компонента
    super(props); // 1 - происходит вызов конструктора (жизненый цикл Mount - рождение)

    this.state = {
      loading: true,
      usd: 0,
      rubAmount: 0,
    }

    this.timeout = undefined;
  }

  componentDidMount() { // 1 - происходит вызов метода componentDidMount (жизненый цикл Mount - рождение)
    // Значит элемент был отрисован и добавлен в DOM браузера

    // все логика с не React кодом должна быть здесь
  }

  componentDidUpdate(oldProps, oldState) { // 2 - происходит вызов метода componentDidUpdate (жизненый цикл Update - обновление)
    // Значит элемент уже ранее был отрисован и добавлен в DOM браузера, но сейчас изменил свое состояние и уже отрисован заново
    // Принимает два атрибута (oldProps - предыдущие показатели props, чтобы их можно было сравнить
    //                         oldState - предыдущее состояние элемента)

    // Чтобы oldProps не подсвечивался как не используемый, но при этом удалить его нам нельзя есть фича: _oldProps
    // Ставим нижнее подчеркивание перед именем (так js будет понимать, что данный параметр не будет использоваться далее)

    // все логика с не React кодом должна быть здесь
  }

  componentWillMount() { // 3 - вызывается когда элемент полностью удален (переход на другую страницу)
    // все логика с не React кодом должна быть здесь (если страница изменена)
    // обычно используется чтобы почистить state
    window.clearTimeout(this.timeout); // эта функция чистит все таймауты

    // также здесь стоит прописать удалеие привязки всех событий для елементов
    // пример: input.removeEventListener('click', () => this.funk)
  }

  render() { // 1 - происходит вызов метода render (жизненый цикл Mount - рождение)
             // 2 - происходит вызов метода componentDidUpdate (жизненый цикл Update - обновление)

    // render - просто рисует пользователю содержимое на страницу
    if (this.state.loading) return <div>Loading...</div>;

    return (
      <div>
        <input type="text"></input>
      </div>
    )
  }
}


// --------------------------------------------------------------------------------

// Функциональный компонент

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState(); // здесь мы сохранили время получения данных (новый элемент)
  const [rubAmount, setRubAmount] = useState(0); // то что ввел пользователь
  const [usd, setUsd] = useState(0); // стомость долара сохранена
  let timeout; // --- так таймаут делать нельзя (он здесь чиисто для примера)

  const loadData = () => {
    setTimeout(() => {
      fetchApi()
        .then(data = > {
          console.log('data is loaded at' + new Date());
          const usd = data.find(c => c.title === 'usd');

          setUsd(usd.value);
          setLoading(false);
          setUpdated(new Date().getTime());
        })
    }, 1000);
  }
}

// чтобы создать жизненный цикл для функционального компонента надо использовать useEffect
useEffect(() => {}, []) // он вызывается всегда с дву аргументами (функция и массив)
// если массив не добавить то функция будет вызываться не предсказуемо, поэтому всегда добавлять массив
// useEffect вызывается при достижении определенных условий
// массив позволяет задать эти условиия

useEffect(() => {
  loadData();
  console.log('Privet');

  return () => {
    console.log('Poka')
  } // componentWillMount
}, []) // componentDidMount

// Если передать пустой массив [], то функция будет вызываться когда компонент монтируется это аналог componentDidMount
// Если useEffect возвращает функцию, то она будет работать как жизненный цикл componentWillMount (удаление кмпонента)
// Данная функция будет вызываться когда компонент будет удаляться со страницы

useEffect(() => {
  console.log('input change %s', rubAmount);
}, [rubAmount]) // аналог componentDidUpdate (массив не пустой)
// если переменная rubAmount поменялась (и только в этом случае, именно стало другое значение, а не такое же как было) тогда вызывается useEffect


useEffect(() => { // чисто для примера создали, если нужная переменная не поменялась, но нам надо создать новый таймер
  if (!loading) {
    timeout = window.setTimeout(loadData, 5 * 1000);
  }

  return () => { // вызывем componentWillMount для компонента, сразу его чистим
    console.log('таймаут очищен');
    window.clearTimeout(timeout);
  }
}, [updated, usd, rubAmount]) // аналог componentDidUpdate (массив не пустой)

// Если нам нужен жизненный цикл Update - то нужно привязать useEffect к переменной которая обязательно будет меняться (иначе вызова не будет)
// Можно передать список переменных, если изменится хоть одна из них, то будет вызван нужный useEffect