import { contactInformation } from "../data/ProfileContact.json";

const { name, title, contact } = contactInformation;
const { email, phone, location } = contact;

function Profile() {
  return (
    <div className="text-center bg-gray-800 rounded-b-3xl m-4 mt-0 p-4 shadow-lg">
      <h1 className="text-gray-100">{name}</h1>
      <h3 className="text-gray-200">{title}</h3>
      <ul>
        <li className="text-gray-200 hover:bg-rose-500 w-fit mx-auto py-2 px-4 rounded-xl">
          {email}
        </li>
        <li className="text-gray-200 hover:bg-rose-500 w-fit mx-auto py-2 px-4 rounded-xl">
          {phone}
        </li>
        <li className="text-gray-200 hover:bg-rose-500 w-fit mx-auto py-2 px-4 rounded-xl">
          {location}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
