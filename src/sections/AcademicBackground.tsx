import { academicBackground } from "../data/AcademicBackground.json";

const { degree, institution, year } = academicBackground;

function AcademicBackground() {
  return (
    <div className="text-center my-4">
      <h1>Formación Académica</h1>
      <p>
        Titulado en {degree}, {institution}, ({year}).
      </p>
    </div>
  );
}

export default AcademicBackground;
