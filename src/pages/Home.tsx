import AcademicBackground from "../sections/AcademicBackground";
import ProfessionalExperience from "../sections/ProfessionalExperience";
import ProfessionalProfile from "../sections/ProfessionalProfile";
import Profile from "../sections/Profile";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <ProfessionalProfile />
      <AcademicBackground />
      <Skills />
      <ProfessionalExperience />
    </>
  );
}
