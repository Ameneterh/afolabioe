import React from "react";
import heroImage from "/publications_header.jpg";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Button } from "flowbite-react";
import { GrDocumentPdf } from "react-icons/gr";
import Divider from "../components/Divider";

export default function About() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <div
          className="w-full h-[400px] bg-cover bg-no-repeat flex flex-col items-center justify-center px-4 md:px-20 text-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <p className="text-4xl font-extrabold text-white">PUBLICATIONS</p>
        </div>
        <div className="flex flex-col gap-6 max-w-6xl md:mx-auto bg-white md:mt-[-50px] md:rounded-t-2xl p-4 md:p-10">
          <div className="w-full flex items-center justify-center gap-8">
            <Button>ResearchGate Profile</Button>
            <Button>Google Scholar Profile</Button>
          </div>

          <div className="w-full flex flex-col gap-4 dark:text-slate-700">
            <p>
              <img
                src="/omicron.png"
                alt="research paper image"
                className="w-40 float-left m-3"
              />
              Omotuyi, I.O., Oyinloye, B.E., Fatumo, S., Femi-Oyewo, M.N., and
              Bogoro, S.E., Afolabi O.E. (2021),
              <i>
                "Omicron spike glycoprotein receptor binding domain exhibits
                super-binding ability with ACE2 but not convalescent monoclonal
                antibody”
              </i>{" "}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S001048252200018X"
                target="_blank"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                <b>
                  <i>Computers in Biology and Medicine</i>
                </b>
              </a>
            </p>
            <p>
              Oyekanmi Nash; Julianah O. Abiola; Adebowale Alade; Elizabeth O.
              Afolabi; Mustapha A. Popoola; Segun Fatumo (2021),
              <i>
                "DVRKIA Blockage and Ki67/CYclin D gene upregulation underlie
                sphenocentrum Jollyanum furanoditer penes stimulated pancreatic
                regeneration in diabetic model.”
              </i>{" "}
              <a
                href=""
                target="_blank"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                <b>
                  <i>Journal of Phytomedicine</i>
                </b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
