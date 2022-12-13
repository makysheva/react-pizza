import '../../scss/components/_modal.scss'

export const ModalCheck = () => {
  return (
    <div className="modal">
        <div className="inner">
            <img className="image" src="img/check.svg" alt="check" />
            <div className="text">Ваша заявка получена!</div>
        </div>
    </div>
  )
}
