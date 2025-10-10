import React from "react";

export default function Networking() {
  // Exemplo de eventos/fórum
  const eventos = [
    {
      titulo: "Webinar: Como ser um Mentor de Sucesso",
      data: "15/10/2025",
      link: "#",
    },
    {
      titulo: "Fórum: Dúvidas sobre Certificação",
      data: "20/10/2025",
      link: "#",
    },
  ];

  return (
    <main className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-2xl font-bold">Networking</h1>
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-2 text-lg font-semibold">Eventos Online</h2>
        <ul>
          {eventos.map((evento, idx) => (
            <li key={idx} className="mb-2">
              <strong>{evento.titulo}</strong> - {evento.data}
              <a href={evento.link} className="ml-2 text-blue-600 underline">
                Participar
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <p>
          Participe de fóruns e webinars para ampliar seu networking dentro da
          plataforma e no LinkedIn.
        </p>
      </div>
    </main>
  );
}
