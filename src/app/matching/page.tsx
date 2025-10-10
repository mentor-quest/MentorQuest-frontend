import React from "react";

export default function Matching() {
  // Exemplo de lista de mentores
  const mentors = [
    {
      name: "João Mentor",
      area: "Gestão de Projetos",
      skills: ["Scrum", "Kanban"],
      linkedin: "https://linkedin.com/in/joaomentor",
    },
    {
      name: "Ana Mentora",
      area: "Data Science",
      skills: ["Python", "Machine Learning"],
      linkedin: "https://linkedin.com/in/anamentora",
    },
  ];

  return (
    <main className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-2xl font-bold">Buscar Mentores</h1>
      <div className="space-y-4">
        {mentors.map((mentor, idx) => (
          <div key={idx} className="rounded-lg bg-white p-6 shadow">
            <p>
              <strong>Nome:</strong> {mentor.name}
            </p>
            <p>
              <strong>Área:</strong> {mentor.area}
            </p>
            <p>
              <strong>Habilidades:</strong> {mentor.skills.join(", ")}
            </p>
            <a
              href={mentor.linkedin}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <button className="ml-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              Solicitar Mentoria
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
