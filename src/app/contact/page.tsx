import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Fale com o MentorQuest"
        description="Entre em contato para tirar dúvidas, sugerir melhorias ou saber mais sobre como o MentorQuest pode impulsionar sua carreira e ampliar seu networking profissional."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
