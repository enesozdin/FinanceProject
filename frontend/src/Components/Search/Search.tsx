import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => console.log(e)} />
    </div>
  );
};

export default Search;
