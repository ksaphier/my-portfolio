import { contactInformation } from "../data/ProfileContact.json";

const { name, title, contact } = contactInformation;
const { email, phone, location } = contact;

function Profile() {
  return (
    <div className="text-center my-4">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <ul>
        <li>Email: {email}</li>
        <li>Teléfono: {phone}</li>
        <li>Ubicación: {location}</li>
      </ul>
    </div>
  );
}

export default Profile;
