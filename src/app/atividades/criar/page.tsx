import React from "react";

export default function CriarAtividade() {
  return (
    <main className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-2xl font-bold">Criar Atividade</h1>
      <form className="space-y-4 rounded-lg bg-white p-6 shadow">
        <div>
          <label className="mb-1 block font-semibold">Descrição</label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2"
            placeholder="Descreva a atividade"
          />
        </div>
        <div>
          <label className="mb-1 block font-semibold">Prazo</label>
          <input type="date" className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block font-semibold">
            Critérios de Avaliação
          </label>
          <textarea
            className="w-full rounded border px-3 py-2"
            placeholder="Ex: Entrega, qualidade, criatividade"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Criar
        </button>
      </form>
      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <p>
          Atividades devem refletir habilidades práticas que o mentorado precisa
          dominar.
        </p>
      </div>
    </main>
  );
}
