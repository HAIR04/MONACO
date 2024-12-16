// src/components/ContactInfo.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <div className="w-[80%] hidden mx-auto font-semibold bg-yellow-500 h-10 xl:flex items-center justify-around mb-5 clip-path-diagonal">
      <p className="flex items-center">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-black" />
        Địa chỉ : Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
      </p>
      <p className="flex items-center">
        <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" />
        Liên Hệ : 098.656.2839
      </p>
    </div>
  );
};

export default ContactInfo;
