import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';

function App() {
  const [formValue, setFormValue] = useState({
    title: '',
    zona: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log('новые часы', formValue.title, formValue.zona);
    setFormValue({
      ...formValue,
      title: '',
      zona: '',
    });
  }

  const changeInput = (event) => {
    // Обрабатываем изменение в поле input
    const {name, value} = event.target;

    if ((name === 'zona') && (Number(value))) {
      setFormValue({
        ...formValue,
        [name]: value.trim(),
      });
    }

    if (name === 'title') {
      setFormValue({
        ...formValue,
        [name]: value,
      });
    }
  }

  return (
    <div className="conteiner">

      <div className="conteiner__form">
        <Form title={formValue.title} zona={formValue.zona} submit={handleSubmit} change={changeInput} ></Form>
      </div>
      

      <div className="conteiner__count">
        Часы
      </div>

    </div>
  )
}

export default App
