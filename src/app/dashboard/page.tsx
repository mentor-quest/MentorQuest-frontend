"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TrilhaForm from "@/components/TrilhaForm";

export default function Dashboard() {
  // Estado para trilhas criadas pelo mentor
  const [trilhas, setTrilhas] = useState([]);
  // Estado para tarefas criadas pelo mentor
  const [tarefas, setTarefas] = useState([
    // Inicialmente vazio ou com exemplo
  ]);
  const [novaTarefa, setNovaTarefa] = useState({
    tecnologia: "React",
    nivel: 1,
    descricao: "",
  });
  const [inscritos, setInscritos] = useState([]);

  // Função para criar tarefa
  const handleCriarTarefa = (e) => {
    e.preventDefault();
    if (!novaTarefa.descricao.trim()) return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa({ tecnologia: "React", nivel: 1, descricao: "" });
  };

  // Função para inscrever mentorado
  const handleInscrever = (idx) => {
    setInscritos([...inscritos, idx]);
  };
  // Exemplo de dados do usuário (substitua por dados reais do contexto de autenticação)
  const user = {
    name: "João Mentor",
    role: "Mentor",
    linkedin: "https://linkedin.com/in/joaomentor",
    area: "Gestão de Projetos",
    experience: "5 anos",
    skills: ["Scrum", "Kanban", "Liderança"],
  };

  // Exemplo de atividades e solicitações
  const atividades = [
    {
      descricao: "Planejar Sprint",
      prazo: "15/10/2025",
      status: "Em andamento",
    },
    {
      descricao: "Revisão de Kanban",
      prazo: "20/10/2025",
      status: "Concluída",
    },
  ];
  const solicitacoes = [
    { mentorado: "Maria Mentorada", objetivo: "Aprender Scrum" },
    { mentorado: "Carlos Mentorado", objetivo: "Melhorar liderança" },
  ];
  const feedbacks = [
    {
      mentorado: "Maria Mentorada",
      atividade: "Landing Page",
      feedback: "Ótima entrega, só ajustar responsividade.",
    },
    {
      mentorado: "Carlos Mentorado",
      atividade: "Projeto Kanban",
      feedback: "Faltou detalhar etapas.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 px-4">
      <section className="w-full max-w-3xl py-12">
        {/* TrilhaForm component */}
        <TrilhaForm trilhas={trilhas} setTrilhas={setTrilhas} />
        {/* Formulário para mentor criar tarefas */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-blue-700">
            Criar Nova Tarefa
          </h2>
          <form
            className="flex flex-col items-center gap-4 md:flex-row"
            onSubmit={handleCriarTarefa}
          >
            <select
              className="rounded border px-2 py-1"
              value={novaTarefa.tecnologia}
              onChange={(e) =>
                setNovaTarefa({ ...novaTarefa, tecnologia: e.target.value })
              }
            >
              <option value="">Selecione uma trilha</option>
              {trilhas.length > 0
                ? trilhas.map((trilha, idx) => (
                    <option key={idx} value={trilha.nome}>
                      {trilha.nome}
                    </option>
                  ))
                : [
                    <option key="React" value="React">
                      React
                    </option>,
                    <option key="Vue" value="Vue">
                      Vue
                    </option>,
                    <option key="Node" value="Node">
                      Node
                    </option>,
                  ]}
            </select>
            <select
              className="rounded border px-2 py-1"
              value={novaTarefa.nivel}
              onChange={(e) =>
                setNovaTarefa({ ...novaTarefa, nivel: Number(e.target.value) })
              }
            >
              <option value={1}>Nível 1</option>
              <option value={2}>Nível 2</option>
              <option value={3}>Nível 3</option>
            </select>
            <input
              className="flex-1 rounded border px-2 py-1"
              type="text"
              placeholder="Descrição da tarefa"
              value={novaTarefa.descricao}
              onChange={(e) =>
                setNovaTarefa({ ...novaTarefa, descricao: e.target.value })
              }
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ minWidth: 120 }}
            >
              Criar
            </Button>
          </form>
        </div>
        {/* Tarefas disponíveis agrupadas por trilha */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            Tarefas Disponíveis
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {trilhas.length > 0
              ? trilhas.map((trilha, tIdx) => (
                  <div key={tIdx} className="rounded-lg bg-white p-4 shadow">
                    <h3 className="mb-2 text-lg font-bold text-blue-600">
                      {trilha.nome}
                    </h3>
                    <ul>
                      {tarefas.filter((t) => t.tecnologia === trilha.nome)
                        .length > 0 ? (
                        tarefas
                          .filter((t) => t.tecnologia === trilha.nome)
                          .map((t, idx) => (
                            <li key={idx} className="mb-3">
                              <span className="font-semibold">
                                Nível {t.nivel}:
                              </span>{" "}
                              {t.descricao}
                              <Button
                                variant="contained"
                                color={
                                  inscritos.includes(idx)
                                    ? "success"
                                    : "primary"
                                }
                                size="small"
                                disabled={inscritos.includes(idx)}
                                onClick={() => handleInscrever(idx)}
                                sx={{ ml: 1, minWidth: 100 }}
                              >
                                {inscritos.includes(idx)
                                  ? "Inscrito"
                                  : "Inscrever-se"}
                              </Button>
                            </li>
                          ))
                      ) : (
                        <li className="text-gray-400">
                          Nenhuma tarefa cadastrada nesta trilha.
                        </li>
                      )}
                    </ul>
                  </div>
                ))
              : ["React", "Vue", "Node"].map((tec, tIdx) => (
                  <div key={tIdx} className="rounded-lg bg-white p-4 shadow">
                    <h3
                      className={`mb-2 text-lg font-bold ${tec === "React" ? "text-blue-600" : tec === "Vue" ? "text-green-600" : "text-indigo-600"}`}
                    >
                      {tec}
                    </h3>
                    <ul>
                      {tarefas.filter((t) => t.tecnologia === tec).length >
                      0 ? (
                        tarefas
                          .filter((t) => t.tecnologia === tec)
                          .map((t, idx) => (
                            <li key={idx} className="mb-3">
                              <span className="font-semibold">
                                Nível {t.nivel}:
                              </span>{" "}
                              {t.descricao}
                              <Button
                                variant="contained"
                                color={
                                  inscritos.includes(idx)
                                    ? "success"
                                    : "primary"
                                }
                                size="small"
                                disabled={inscritos.includes(idx)}
                                onClick={() => handleInscrever(idx)}
                                sx={{ ml: 1, minWidth: 100 }}
                              >
                                {inscritos.includes(idx)
                                  ? "Inscrito"
                                  : "Inscrever-se"}
                              </Button>
                            </li>
                          ))
                      ) : (
                        <li className="text-gray-400">
                          Nenhuma tarefa cadastrada nesta trilha.
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
          </div>
        </div>
        {/* Guia de etapas do fluxo de uso */}
        <div className="mb-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
            Como Funciona o MentorQuest
          </h2>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </div>
              <span className="font-semibold">Cadastro</span>
              <span className="text-center text-xs text-gray-600">
                Qualquer pessoa pode ser mentor ou mentorado! Basta se inscrever
                e vincular seu LinkedIn.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
                2
              </div>
              <span className="font-semibold">Conexão</span>
              <span className="text-center text-xs text-gray-600">
                Encontre um mentor e envie/aceite solicitações.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                3
              </div>
              <span className="font-semibold">Atividades</span>
              <span className="text-center text-xs text-gray-600">
                Mentor cria e atribui atividades, mentorado completa e submete.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                4
              </div>
              <span className="font-semibold">Avaliação</span>
              <span className="text-center text-xs text-gray-600">
                Mentor revisa, dá feedback e aprova ou solicita ajustes.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
                5
              </div>
              <span className="font-semibold">Certificação</span>
              <span className="text-center text-xs text-gray-600">
                Mentorado recebe certificado e compartilha no LinkedIn.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-xl font-bold text-white">
                6
              </div>
              <span className="font-semibold">Networking</span>
              <span className="text-center text-xs text-gray-600">
                Participe de fóruns e eventos para fortalecer conexões.
              </span>
            </div>
          </div>
        </div>
        <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">
          Bem-vindo, {user.name}!
        </h1>
        <p className="mb-6 text-center text-lg text-gray-700">
          Você está logado como{" "}
          <span className="font-semibold text-green-600">{user.role}</span>.
        </p>
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a
            href="/profile"
            className="rounded-lg bg-gray-100 px-4 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Perfil
          </a>
          <a
            href="/matching"
            className="rounded-lg bg-gray-100 px-4 py-3 text-center font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            Matching
          </a>
          <a
            href="/atividades/criar"
            className="rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Criar Atividade
          </a>
          <a
            href="/atividades/avaliar"
            className="rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700"
          >
            Avaliar Atividade
          </a>
          <a
            href="/certificados"
            className="rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
          >
            Certificados
          </a>
          <a
            href="/networking"
            className="rounded-lg bg-purple-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-purple-700"
          >
            Networking
          </a>
          <div className="mt-8 rounded-lg bg-blue-50 p-6 shadow">
            <h2 className="mb-2 text-xl font-bold text-blue-700">
              Integração com LinkedIn
            </h2>
            <ul className="ml-6 list-disc text-gray-700">
              <li>Login opcional via LinkedIn para facilitar o cadastro.</li>
              <li>
                Compartilhe certificados e conquistas diretamente no seu perfil
                do LinkedIn.
              </li>
              <li>
                Notificações automáticas para sua rede sobre progressos e
                certificações.
              </li>
            </ul>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-block font-semibold text-blue-600 underline"
            >
              Conectar com LinkedIn
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-bold text-blue-600">
              Suas Atividades
            </h2>
            <ul className="text-gray-700">
              {atividades.map((a, idx) => (
                <li key={idx} className="mb-2">
                  <strong>{a.descricao}</strong> - Prazo: {a.prazo}{" "}
                  <span className="ml-2 rounded bg-gray-100 px-2 py-1 text-xs">
                    {a.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 text-xl font-bold text-purple-600">
              Solicitações de Mentoria
            </h2>
            <ul className="text-gray-700">
              {solicitacoes.map((s, idx) => (
                <li key={idx} className="mb-2">
                  <strong>{s.mentorado}</strong>: {s.objetivo}
                  <button className="ml-4 rounded bg-green-600 px-2 py-1 text-white hover:bg-green-700">
                    Aceitar
                  </button>
                  <button className="ml-2 rounded bg-red-600 px-2 py-1 text-white hover:bg-red-700">
                    Recusar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-lg bg-gray-50 p-6 shadow">
          <h2 className="mb-2 text-xl font-bold text-indigo-600">
            Feedbacks Recentes
          </h2>
          <ul className="text-gray-700">
            {feedbacks.map((f, idx) => (
              <li key={idx} className="mb-2">
                <strong>{f.mentorado}</strong> ({f.atividade}): {f.feedback}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold text-gray-800">Seu Perfil</h2>
          <p className="mb-2 text-gray-700">Nome: {user.name}</p>
          <p className="mb-2 text-gray-700">Função: {user.role}</p>
          <p className="mb-2 text-gray-700">Área: {user.area}</p>
          <p className="mb-2 text-gray-700">Experiência: {user.experience}</p>
          <p className="mb-2 text-gray-700">
            Habilidades: {user.skills.join(", ")}
          </p>
          <a
            href={user.linkedin}
            target="_blank"
            rel="noopener"
            className="font-semibold text-blue-600 underline"
          >
            Ver LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
