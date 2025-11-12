import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MentorQuest - Login | Acesse sua Conta de Mentoria Profissional",
  description:
    "Faça login para acessar trilhas, atividades, networking e certificações profissionais no MentorQuest.",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:bg-dark mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  Acesse sua conta
                </h3>
                <p className="text-body-color mb-11 text-center text-base font-medium">
                  Faça login para acessar trilhas, atividades, networking e
                  certificações profissionais.
                </p>
                <button className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary mb-6 flex w-full items-center justify-center rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:hover:shadow-none">
                  <span className="mr-3">{/* SVG Google */}</span>
                  Entrar com Google
                </button>

                <button className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary mb-6 flex w-full items-center justify-center rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:hover:shadow-none">
                  <span className="mr-3">{/* SVG Github */}</span>
                  Entrar com Github
                </button>
                <div className="mb-8 flex items-center justify-center">
                  <span className="bg-body-color/50 hidden h-[1px] w-full max-w-[70px] sm:block"></span>
                  <p className="text-body-color w-full px-5 text-center text-base font-medium">
                    Ou, acesse com seu e-mail
                  </p>
                  <span className="bg-body-color/50 hidden h-[1px] w-full max-w-[70px] sm:block"></span>
                </div>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Seu e-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Digite seu e-mail"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="text-dark mb-3 block text-sm dark:text-white"
                    >
                      Sua senha
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Digite sua senha"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <label
                        htmlFor="checkboxLabel"
                        className="text-body-color flex cursor-pointer items-center text-sm font-medium select-none"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                          />
                          <div className="box border-body-color/20 mr-4 flex h-5 w-5 items-center justify-center rounded-sm border dark:border-white/10">
                            <span className="opacity-0">
                              {/* SVG checkmark */}
                            </span>
                          </div>
                        </div>
                        Manter conectado
                      </label>
                    </div>
                    <div>
                      <a
                        href="#0"
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300">
                      Entrar
                    </button>
                  </div>
                </form>
                <p className="text-body-color text-center text-base font-medium">
                  Ainda não tem conta?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          {/* SVG background permanece igual */}
        </div>
      </section>
    </>
  );
};

export default SigninPage;
