export const MaterialsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>
            <b>Название:</b> {item.titel}
          </p>
          <p>
            <b>Ссылки:</b> {item.link}
          </p>
          <hr />
        </li>
      ))}
    </ul>
  );
};
