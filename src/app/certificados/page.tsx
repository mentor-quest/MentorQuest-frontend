import React from "react";

export default function Certificados() {
  // Exemplo de certificado
  const certificado = {
    nome: "Maria Mentorada",
    atividade: "Desenvolvimento Web",
    data: "10/10/2025",
    status: "Apto",
    pdf: "/certificados/maria-mentorada.pdf",
  };

  return (
    <main className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-2xl font-bold">Certificados</h1>
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <p>
          <strong>Nome:</strong> {certificado.nome}
        </p>
        <p>
          <strong>Atividade:</strong> {certificado.atividade}
        </p>
        <p>
          <strong>Data:</strong> {certificado.data}
        </p>
        <p>
          <strong>Status:</strong> {certificado.status}
        </p>
        <a
          href={certificado.pdf}
          download
          className="mr-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Baixar PDF
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
          className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Compartilhar no LinkedIn
        </a>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <p>
          Certificados são emitidos automaticamente quando todas as atividades
          são concluídas com 100% de aptidão.
        </p>
      </div>
    </main>
  );
}
