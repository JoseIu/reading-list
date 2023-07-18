const SelectOption = () => {
  const GENDERS = ['all', 'fantasía', 'ciencia ficción', 'zombies', 'terror'];

  return GENDERS.map((gender, i) => (
    <option key={i} value={gender}>
      {gender}
    </option>
  ));
};

export default SelectOption;
