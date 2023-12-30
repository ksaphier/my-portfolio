import { contactInformation } from "../data/ProfileContact.json";
import { IoMailOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const { name, title, contact } = contactInformation;
const { email, phone, location } = contact;

function Profile() {
  return (
    <div className="text-center shadow-sm mx-auto mb-4 mt-0 py-4 px-8">
      <h1 className="text-gray-800">{name}</h1>
      <h3 className="text-gray-600">{title}</h3>
      <ul className="md:flex">
        <li className="text-rose-600 hover:text-gray-100 hover:bg-rose-500 hover:shadow-sm w-fit mx-auto py-2 px-4 rounded-xl flex">
          <IoMailOutline className="text-2xl mr-2" />
          {email}
        </li>
        <li className="text-rose-600 hover:text-gray-100 hover:bg-rose-500 hover:shadow-sm w-fit mx-auto py-2 px-4 rounded-xl flex">
          <IoPhonePortraitOutline className="text-2xl mr-2" />
          {phone}
        </li>
        <li className="text-rose-600 hover:text-gray-100 hover:bg-rose-500 hover:shadow-sm w-fit mx-auto py-2 px-4 rounded-xl flex">
          <IoLocationOutline className="text-2xl mr-2" />
          {location}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
