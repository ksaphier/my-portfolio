import AcademicBackground from "../sections/AcademicBackground";
import ProfessionalExperience from "../sections/ProfessionalExperience";
import ProfessionalProfile from "../sections/ProfessionalProfile";
import Profile from "../sections/Profile";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <div className="md:flex flex-row px-4">
        <div className="md:w-2/3 md:order-2">
          <ProfessionalProfile />
          <AcademicBackground />
          <ProfessionalExperience />
        </div>
        <div className="md:w-1/3 md:order-1">
          <Skills />
        </div>
      </div>
    </>
  );
}
