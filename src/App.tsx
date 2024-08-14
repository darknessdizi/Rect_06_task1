import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';

function App() {
  const [formValue, setFormValue] = useState({
    title: '',
    zone: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log('новые часы', formValue.title, formValue.zone);
    setFormValue({
      ...formValue,
      title: '',
      zone: '',
    });
  }

  const changeInput = (event) => {
    console.log(event.target.value);
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="conteiner">

      <div className="conteiner__form">
        <Form title={formValue.title} zone={formValue.zone} submit={handleSubmit} change={changeInput} ></Form>
      </div>
      

      <div className="conteiner__count">
        Часы
      </div>

    </div>
  )
}

export default App
