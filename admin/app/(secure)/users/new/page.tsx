import React, { useState } from "react";

export default function NewUser() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodos = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };
  <main>
    <div>
      <h1>crete new user</h1>
      <input type="text" value={text} onChange={changeText} />
      <button onClick={addTodos}>追加</button>
    </div>
  </main>;
}
