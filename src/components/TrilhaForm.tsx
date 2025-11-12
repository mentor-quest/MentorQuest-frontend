import React, { useState } from "react";

export default function TrilhaForm({ trilhas, setTrilhas }) {
  const [novaTrilha, setNovaTrilha] = useState({
    nome: "",
    descricao: "",
    area: "",
  });

  const handleCriarTrilha = (e) => {
    e.preventDefault();
    if (!novaTrilha.nome.trim() || !novaTrilha.descricao.trim()) return;
    setTrilhas([...trilhas, novaTrilha]);
    setNovaTrilha({ nome: "", descricao: "", area: "" });
  };

  return (
    <>
      {/* Formulário para mentor criar trilha personalizada */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-purple-700">
          Criar Nova Trilha
        </h2>
        <form
          className="flex flex-col items-center gap-4 md:flex-row"
          onSubmit={handleCriarTrilha}
        >
          <input
            className="rounded border px-2 py-1"
            type="text"
            placeholder="Nome da trilha (ex: React, DevOps, Backend, Frontend, Mobile, etc.)"
            value={novaTrilha.nome}
            onChange={(e) =>
              setNovaTrilha({ ...novaTrilha, nome: e.target.value })
            }
          />
          <input
            className="flex-1 rounded border px-2 py-1"
            type="text"
            placeholder="Descrição da trilha"
            value={novaTrilha.descricao}
            onChange={(e) =>
              setNovaTrilha({ ...novaTrilha, descricao: e.target.value })
            }
          />
          <input
            className="rounded border px-2 py-1"
            type="text"
            placeholder="Área de interesse (opcional)"
            value={novaTrilha.area}
            onChange={(e) =>
              setNovaTrilha({ ...novaTrilha, area: e.target.value })
            }
          />
          <button
            type="submit"
            className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Criar Trilha
          </button>
        </form>
      </div>
      {/* Trilhas criadas */}
      {trilhas.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-purple-700">
            Trilhas Personalizadas
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {trilhas.map((trilha, idx) => (
              <div key={idx} className="rounded-lg bg-white p-4 shadow">
                <h3 className="mb-2 text-lg font-bold text-purple-600">
                  {trilha.nome}
                </h3>
                <p className="mb-1 text-gray-700">{trilha.descricao}</p>
                {trilha.area && (
                  <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">
                    Área: {trilha.area}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
