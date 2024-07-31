import React from "react";
import heroImage from "/AboutUsHero.png";
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
          <span className="dark:text-white">about</span>
          <p className="text-4xl font-extrabold text-gray-900">
            AFOLABI, Oluwatoyin Elizabeth
          </p>
          <span className="text-slate-900">
            (B. Pharm, M. Clinical Pharm & Admin, MPSN, MCIPSMN, MIFPSM)
          </span>
        </div>

        <div className="flex flex-col gap-6 max-w-6xl md:mx-auto bg-white md:mt-[-50px] md:rounded-t-2xl p-4 md:p-10 dark:text-slate-800">
          {/* Hospital Practice Section */}
          <div className="flex flex-col gap-4 text-md md:text-lg text-justify">
            <h1 className="text-xl md:text-4xl font-extrabold">
              Hospital Practice
            </h1>
            <div>
              <img
                src="/afolabi_office.jpg"
                alt=""
                className="w-full md:max-w-80 block md:float-left mb-3 md:m-3 rounded-2xl"
              />
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
            </div>
          </div>

          <Divider />

          {/* Research Section */}
          <div className="flex flex-col gap-4 text-md md:text-lg text-justify">
            <h1 className="text-xl md:text-4xl font-extrabold">Research</h1>
            <div>
              <img
                src="/afolabi_with_virucidine.jpg"
                alt=""
                className="w-full md:max-w-80 block md:float-right mb-3 md:m-3 rounded-2xl"
              />
              <p className="">
                <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
                is a registered and accomplished Clinical Pharmacist, currently
                serves as the Deputy Director, Pharmaceutical services at the
                Afe BABALOLA Multisystem Hospital, Ado Ekiti.
              </p>
              <p>
                Oluwatoyin in her versatility has co -authored a publication
                titled{" "}
                <i>
                  "Omicron spike glycoprotein receptor binding domain exhibits
                  super-binding ability with ACE2 but not convalescent
                  monoclonal antibody”
                </i>{" "}
                published in the journal{" "}
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S001048252200018X"
                  target="_blank"
                >
                  <b>
                    <i>Computers in Biology and Medicine</i>
                  </b>
                </a>
                . <br />
                <i>
                  Co - authors: Omotuyi, I.O., Oyinloye, B.E., Fatumo, S.,
                  Femi-Oyewo, M.N., and Bogoro, S.E.
                </i>
              </p>
            </div>
          </div>

          <Divider />
          {/* Teaching Section */}
          <div className="flex flex-col gap-4 text-md md:text-lg text-justify">
            <h1 className="text-xl md:text-4xl font-extrabold">Teaching</h1>
            <p className="">
              As a lecturer in the Department of Clinical Pharmacy and Pharmacy
              Administration (PCA), my goal of teaching is to train, motivate
              and create opportunities for students so they can embrance and
              develop successful and satisfying careers in the pharmaceutical
              sciences in general and clinical pharmacy practice in particular.
              I work hard to provide my students with the skills, resources, and
              guidance to help them do incredible things and build strong
              careers. To achieve these, I:
            </p>

            <p>
              <img
                src="/afolabi_store.jpg"
                alt=""
                className="w-full md:max-w-96 block md:float-right mb-3 md:m-3 rounded-2xl"
              />
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">
                    Create a Condusive Atmosphere:
                  </span>{" "}
                  I formulate my courses and assignments to encourage questions
                  and interactions. I make every attempt to be open and
                  available to my students as much as possible. I build systems
                  to encourage students to ask me their most challenging
                  questions.
                </li>
                <li>
                  <span className="font-bold">Formulate Resources:</span> My
                  students need and deserve the best resources available to
                  learn efficiently, to practice what is taught, and to apply
                  the information they have learned. I have developed course
                  materials for nearly all of my university courses, in which
                  students can access assignments, notes, test questions and
                  more. I am also in the process of developing online courses on
                  a variety of topics, accessible to students around the world
                  through a YouTube channel with videos explaining and
                  demonstrating a variety of topics in my research fields.
                </li>
                <li>
                  <span className="font-bold">Mentorship Programmes:</span> I
                  strive to not only help students master the academic materials
                  presented in my courses but also to motivate and create
                  opportunities for them. I continually help my university
                  students find internships and job opportunities through my
                  professional networks and continue to help and advise them
                  throughout their careers.
                </li>
              </ul>
            </p>
          </div>

          <Divider />
          {/* Industrial Park Section */}
          <div className="flex flex-col gap-4 text-md md:text-lg text-justify">
            <h1 className="text-xl md:text-4xl font-extrabold">
              Industrial Park
            </h1>
            <div>
              <img
                src="/afolabi_with_virucidine.jpg"
                alt=""
                className="w-full md:max-w-80 block md:float-right mb-3 md:m-3 rounded-2xl"
              />
              <p className="mb-3">
                During the COVID-19 rage, the world was at a difficult moment,
                there was need for sanitizing formulations. This created a huge
                demand for Hand Sanitizers, Sanitizer Sprays, Liquid Handwash
                and the like. This huge surge in demand overwhelmed the
                in-country production capacity for such items. However,
                importation was not possible with movement restriction. I took
                this as a challenge resulting in what has now become{" "}
                <b>
                  AB Pharmaceuticals, Veterinary Medicine and Agro Processing
                  Limited.
                </b>
              </p>
              <p className="mb-3">
                Worthy of note and attention is the quintessenal move during I
                led a team of vibrant pharmacists to successfully produce and
                register a hand sanitizer, under AB Pharmaceucals (ABUAD Hand
                Sanitizer).
              </p>
              <p className="mb-3">
                With the repository of knowledge acquired in Pharmacognosy under
                the tutelage of the erudite Professor of Pharmacognosy at the
                Obafemi Awolowo University, Ife, Prof Abayomi Sofowora, I took a
                giant production leap in formulating and developing the well
                researched plant components into a well packaged, stable and
                acceptable novel product in a dosage form affirmed and confirmed
                by the Nigeria Institute of Medical Research, NIMR, as a
                solution for Covid 19 menace while it was also listed by NAFDAC
                as an immune booster cum anoxidant. Through rigorous and
                unwavering zeal, I was able to successfully apply for and
                receive listing for ABUAD Herbal Virucidine Liquid 100mL as a
                product safe for human consumption and use; the product carries
                the NAFDAC Registration Number A7-100180L.
              </p>
              <p className="mb-3">
                In addition to Virucidine, AB Pharmaceuticals, though in infancy
                we have been able to apply for and in the process of listing two
                other products that have been diligently researched into;{" "}
                <b>AB-Mal Herbal Capsules 250mg</b> for use in management of
                feverish conditions, and{" "}
                <b>Natucadin Herbal Supplement Capsules 250mg</b> with the
                potential to stall and reverse aging.
              </p>
            </div>
          </div>

          <Divider />
          {/* Biography Section */}
          <div className="flex flex-col gap-4 text-sm md:text-lg text-justify">
            <h1 className="text-xl md:text-4xl font-extrabold">Biography</h1>
            <div className="flex gap-1 items-center">
              <GrDocumentPdf className="mr-2 h-5 w-5" />
              <a href="/PHARM AFOLABI OE - RESUME.pdf">
                View{" "}
                <span className="font-bold text-blue-600 hover:underline underline-offset-2">
                  Curriculum Vitae
                </span>
              </a>
            </div>

            <p className="">
              <span className="font-bold uppercase">Oluwatoyin Afolabi</span> is
              a registered and accomplished Clinical Pharmacist, currently
              serves as the Deputy Director, Pharmaceutical services at the Afe
              BABALOLA Multisystem Hospital, Ado Ekiti.
            </p>

            <p>
              Oluwatoyin as an enigmatic, pragmatic and proactive professional,
              after her employment into ABUAD, literally created a robust
              pharmaceutical care operational system from scratch to an enviable
              status with her position as the pioneer University Chief
              Pharmacist and later the pioneer Chief pharmacist for the
              Multisystem hospital.
            </p>

            <p>
              With her robust background experience in pharmaceutical sales and
              marketing, Oluwatoyin Afolabi was able to coordinate an effective
              paperless online sales platform for the pharmacy operational
              system in the AMSH, a unique feat in modern day commerce achieved
              with active collaboration of the ICT department.
            </p>

            <p>
              Oluwatoyin's strive for excellence and proactive ness led to the
              establishment of a robust hospital production line for ABUAD
              brands of Methylated spirit, antiseptics/ disinfectant AFLON,
              Liquid soap, household bleach ABUADIK etc.
            </p>

            <p>
              Worthy of note and attention is Oluwatoyin 's quintessential move
              during the COVID 19 rage, when she led a team of vibrant
              pharmacists to successfully produce NAFDAC registered hand
              sanitizer under AB Pharmaceuticals. With her repository of
              knowledge acquired in Pharmacognosy under the tutelage of the
              erudite Professor of Pharmacognosy at the Obafemi Awolowo
              University, Ife, Prof Abayomi Sofowora , Oluwatoyin took a giant
              production leap in formulating and developing the well researched
              active ingredients of VIRUCIDINE into a well packaged , stable and
              acceptable novel product in a dosage form affirmed and confirmed
              by NIMR as a solution for Covid 19 menace while it was also listed
              by NAFDAC as an immune booster cum antioxidant.
            </p>

            <p>
              To accomplish all of the above, educationally, Oluwatoyin first
              bagged a Bachelor of Pharmacy degree from OAU, IFE, an MSc in
              Clinical Pharmacy and Pharmacy administration from University of
              Ibadan. With additional Award of Consultant in Clinical Pharmacy
              in view from the West African Postgraduate College of Pharmacy,
              she is set to add another professional cap to her educational
              stable.
            </p>
          </div>

          <Divider />
          {/* Awards/Recognition Section */}
          <div className="flex flex-col gap-4 text-md md:text-lg text-justify">
            <h1 className="text-xl md:text-4xl font-extrabold">
              Awards and Recognition
            </h1>
            <p className="">
              <span className="font-bold uppercase">Oluwatoyin Afolabi</span>{" "}
              has received the following awards and recognitions:
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
