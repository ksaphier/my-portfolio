import { academicBackground } from "../data/Data.json";

const { courses } = academicBackground;

function AcademicBackground() {
  return (
    <div className="mt-4">
      <h3>Cursos y Certificaciones</h3>
      {courses.map((c, index) => (
        <p key={index}>
          <a href={c.url} target="_blank" rel="noopener noreferrer">
            {c.name}
          </a>{" "}
          ({c.from})
        </p>
      ))}
    </div>
  );
}

export default AcademicBackground;
