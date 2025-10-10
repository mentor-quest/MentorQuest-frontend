import React from "react";

export default function Profile() {
  // Exemplo de dados do perfil
  const user = {
    name: "Maria Mentorada",
    role: "Mentorada",
    area: "Desenvolvimento Web",
    experience: "2 anos",
    linkedin: "https://linkedin.com/in/mariamentorada",
    skills: ["React", "JavaScript", "CSS"],
  };

  return (
    <main className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-2xl font-bold">Perfil</h1>
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <p>
          <strong>Nome:</strong> {user.name}
        </p>
        <p>
          <strong>Função:</strong> {user.role}
        </p>
        <p>
          <strong>Área de Especialização:</strong> {user.area}
        </p>
        <p>
          <strong>Experiência:</strong> {user.experience}
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href={user.linkedin}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener"
          >
            Ver perfil
          </a>
        </p>
        <p>
          <strong>Habilidades:</strong> {user.skills.join(", ")}
        </p>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <p>
          Mentores podem destacar habilidades e conquistas para atrair
          mentorados.
        </p>
      </div>
    </main>
  );
}
