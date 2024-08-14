export const Form = () => {
  return (
    <div className="block__form">
      <label className="form__label">
        <span>Название</span>
        <input type="text" className="input__label" />
      </label>

      <label className="form__label">
        <span>Временная зона</span>
        <input type="text" className="input__label" />
      </label>

      <button type="button" className="form__btn">Добавить</button>
    </div>
  )
}
