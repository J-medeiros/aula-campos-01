import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome enviado: ${nome} `);
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
      >
        <input
          type="text"
          placeholder="Informe o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default App;
