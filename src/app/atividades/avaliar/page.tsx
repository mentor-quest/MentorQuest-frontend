import React from "react";

export default function AvaliarAtividade() {
  // Exemplo de atividade concluída
  const atividade = {
    descricao: "Projeto de Landing Page",
    mentorado: "Maria Mentorada",
    entrega: "https://github.com/mariamentorada/landingpage",
    status: "Concluída",
  };

  return (
    <main className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-2xl font-bold">Avaliar Atividade</h1>
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <p>
          <strong>Mentorado:</strong> {atividade.mentorado}
        </p>
        <p>
          <strong>Descrição:</strong> {atividade.descricao}
        </p>
        <p>
          <strong>Entrega:</strong>{" "}
          <a
            href={atividade.entrega}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener"
          >
            Ver entrega
          </a>
        </p>
        <p>
          <strong>Status:</strong> {atividade.status}
        </p>
      </div>
      <form className="space-y-4 rounded-lg bg-gray-50 p-6">
        <div>
          <label className="mb-1 block font-semibold">Feedback</label>
          <textarea
            className="w-full rounded border px-3 py-2"
            placeholder="Forneça feedback detalhado"
          />
        </div>
        <div>
          <label className="mb-1 block font-semibold">Ajustes/Reenvio</label>
          <input type="checkbox" /> Solicitar ajustes ou reenvio
        </div>
        <button
          type="submit"
          className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700"
        >
          Enviar Avaliação
        </button>
      </form>
    </main>
  );
}
