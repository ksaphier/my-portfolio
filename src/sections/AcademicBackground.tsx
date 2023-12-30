import { academicBackground } from "../data/AcademicBackground.json";

const { degree, institution, year } = academicBackground;

function AcademicBackground() {
  return (
    <div className="text-center my-10 px-8">
      <h2>Formación Académica</h2>
      <p>
        Titulado en {degree}, {institution}, ({year}).
      </p>
    </div>
  );
}

export default AcademicBackground;