import { academicBackground } from "../data/Data.json";
// import CursosCertificaciones from "./CursosCertificaciones";

const { degree, institution, year } = academicBackground;

function AcademicBackground() {
  return (
    <div className="text-center my-10 px-8">
      <h2 className="gradient-text">Formación Académica</h2>
      <p>
        Titulado en {degree}, {institution}, ({year}).
      </p>
      {/* <CursosCertificaciones /> */}
    </div>
  );
}

export default AcademicBackground;
