import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o MentorQuest | Mentoria Profissional e Networking no LinkedIn",
  description:
    "Conheça o MentorQuest: plataforma de mentoria online que conecta mentores e mentorados, promove desenvolvimento profissional, networking qualificado e certificação reconhecida no LinkedIn.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre o MentorQuest"
        description="O MentorQuest conecta mentores e mentorados para desenvolvimento profissional mútuo, networking qualificado e certificação reconhecida. Descubra como a plataforma potencializa sua carreira e visibilidade no LinkedIn."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
