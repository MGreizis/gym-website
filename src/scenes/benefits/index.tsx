import HeaderText from "@/shared/HeaderText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities",
    description:
      "Occaecat proident pariatur do ex cupidatat elit amet cupidatat et adipisicing.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "100's of Diverse Classes",
    description:
      "Ad mollit aliquip officia sit nisi ex nulla do esse ullamco esse ea.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Expert and Pro Trainers",
    description:
      "Esse veniam sit labore in qui ut enim adipisicing laborum laborum aute cillum.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>MORE THAN JUST A GYM</HeaderText>
          <p className="py-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic + Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            alt="benefits graphic"
            src={BenefitsGraphic}
          />

          <div>
            <div className="relative">
              <div
                className="before:absolute before:-left-20 before:-top-20
                before:z-[-1] before:content-abstractwaves"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeaderText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Est nisi culpa enim aute laboris id. Cillum sit cillum minim
                excepteur proident commodo nulla esse. Magna amet amet deserunt
                aliqua est velit dolore Lorem aute in irure do. Irure nostrud
                veniam sint quis laborum id adipisicing. Sint pariatur velit
                aliquip pariatur in quis esse est dolore enim tempor aute. Amet
                et enim sunt veniam Lorem.
              </p>
              <p className="mb-5">
                Ad aliqua adipisicing Lorem esse proident in eu adipisicing
                fugiat proident sunt velit. Id eiusmod ipsum officia commodo
                dolor eiusmod minim irure eu aliqua reprehenderit deserunt anim
                aliqua. Consectetur et minim minim voluptate eu in consequat
                excepteur excepteur.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div
                className="before:absolute before:-bottom-20 before:right-40 
                before:z-[-1] before:content-sparkles"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
