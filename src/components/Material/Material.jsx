import { Component } from 'react';

const EditMaterialModal = ({ onClosed, onEdit }) => {
  return (
    <div>
      <h2>Редактировать Модальное окно</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClosed();
        }}
      >
        Вот типерь точно редактировать
      </button>
      <button type="button" onClick={onClosed}>
        Закрыть
      </button>
    </div>
  );
};

export class Material extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };
  closedModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isOpenModal } = this.state;
    return (
      <div>
        <p>
          <b>Название:</b> {item.tittle}
        </p>
        <p>
          <b>Ссылки:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Удалить
        </button>
        <button type="button" onClick={this.openModal}>
          Редактировать
        </button>
        {isOpenModal && (
          <EditMaterialModal
            onClosed={this.closedModal}
            onEdit={() => onUpdate({ id: item.id, tittle: Date.now() })}
          />
        )}
      </div>
    );
  }
}
// onClick={() => onUpdate({ id: item.id, tittle: Date.now() })}
