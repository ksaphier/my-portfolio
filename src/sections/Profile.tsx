import { contactInformation } from "../data/Data.json";
import { IoMailOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";

const { name, title, contact } = contactInformation;
const { email, phone, location, github, linkedin } = contact;

function Profile() {
  const liClasses =
    "flex-1 text-rose-600 hover:text-gray-100 hover:bg-rose-500 hover:shadow-sm py-2 px-4 rounded-xl flex mx-auto justify-center items-center";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(phone);
    alert("Phone number copied to clipboard!");
  };

  const handleDownload = () => {
    const downloadButton = document.getElementById("downloadButton");
    if (downloadButton) {
      downloadButton.style.display = "none";

      window.print();

      setTimeout(() => {
        downloadButton.style.display = "flex";
      }, 2000);
    }
  };

  return (
    <div className="text-center shadow-sm mx-auto mt-0 py-4 px-8">
      <h1 className="text-gray-800 gradient-text">{name}</h1>
      <h3 className="text-gray-600 gradient-text">{title}</h3>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <a className={liClasses} onClick={copyEmailToClipboard}>
          <IoMailOutline className="text-2xl mr-2" />
          {email}
        </a>
        <a className={liClasses} onClick={copyPhoneToClipboard}>
          <IoPhonePortraitOutline className="text-2xl mr-2" />
          {phone}
        </a>
        <a
          className={liClasses}
          href="https://maps.app.goo.gl/LfZye7yLYnoi24uF6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLocationOutline className="text-2xl mr-2" />
          {location}
        </a>
        <a
          className={liClasses}
          href="https://github.com/ksaphier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-2xl mr-2" />
          {github}
        </a>
        <a
          className={liClasses}
          href="https://linkedin.com/in/kevin-saphier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin className="text-2xl mr-2" />
          {linkedin}
        </a>
        <a id="downloadButton" className={liClasses} onClick={handleDownload}>
          <IoDownloadOutline className="text-2xl mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Profile;
