import { Material } from '../Material/Material';

export const MaterialsList = ({ items, ...prefProps }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Material item={item} {...prefProps} />
          {/* <p>
            <b>Название:</b> {item.tittle}
          </p>
          <p>
            <b>Ссылки:</b> {item.link}
          </p>
          <button type="button" onClick={() => onDelete(item.id)}>
            Удалить
          </button>
          <buttons
            type="button"
            onClick={() => onUpdate({ id: item.id, tittle: Date.now() })}
          >
            Редактировать
          </buttons> */}
          <hr />
        </li>
      ))}
    </ul>
  );
};
