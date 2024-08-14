export const Form = (props) => {
  const {title, zona, submit, change} = props;

  return (
    <form className="block__form" onSubmit={submit}>
      <label className="form__label">
        <span className="form__label__title">Название</span>
        <input type="text" className="input__label" name="title" value={title} onChange={change} required />
      </label>

      <label className="form__label">
        <span className="form__label__title">Временная зона</span>
        <input type="text" className="input__label" name="zona" value={zona} onChange={change} required />
      </label> 

      <button type="submit" className="form__btn">Добавить</button>
    </form>
  )
}
