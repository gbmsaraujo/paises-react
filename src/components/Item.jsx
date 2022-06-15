const Item = ({ children: value = ' Valor', label = 'Nome:' }) => {
  return (
    <span>
      <strong className=" text-xl">{label}</strong>{' '}
      <span className=" text-xl">{value}</span>
    </span>
  );
};

export default Item;
