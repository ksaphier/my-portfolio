import AcademicBackground from "../sections/AcademicBackground";
import ProfessionalExperience from "../sections/ProfessionalExperience";
import ProfessionalProfile from "../sections/ProfessionalProfile";
import Profile from "../sections/Profile";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <div className="hidden md:flex flex-row px-4">
        <div className="w-1/3">
          <Skills />
        </div>
        <div className="w-2/3">
          <ProfessionalProfile />
          <AcademicBackground />
          <ProfessionalExperience />
        </div>
      </div>
      <div className="md:hidden px-4">
        <ProfessionalProfile />
        <AcademicBackground />
        <Skills />
        <ProfessionalExperience />
      </div>
    </>
  );
}
