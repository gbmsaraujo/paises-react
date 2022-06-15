import React from 'react';

const TextInput = ({
  id,
  labelDescription,
  inputType,
  inputValue,
  autoFocus = false,
  onInputChange = null,
}) => {
  function handleEvent({ currentTarget }) {
    if (onInputChange) {
      onInputChange(currentTarget.value);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-gray-700 mb-5" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        type={inputType}
        placeholder="Entre com seu Nome"
        className="border-solid border-1 p-2 text-xl"
        id={id}
        value={inputValue}
        onChange={handleEvent}
      />
    </div>
  );
};

export default TextInput;
