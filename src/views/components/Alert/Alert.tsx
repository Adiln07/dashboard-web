import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductStore } from "@/store/productStore";

const Alert = () => {
  const popAlert = useProductStore((state) => state.popAlert);

  console.log("isi pop Alert", popAlert);

  return (
    <div
      className={`${popAlert.isVisible ? "opacity-100" : "hidden"}  fixed  m-auto left-1/2 top-10 z-[2000] w-full -translate-x-1/2 transform px-20 transition-opacity duration-500`}
    >
      <div
        className={`${popAlert.status ? "bg-[#D9E9E1] border-[#C0DBCE]" : "bg-[#F5D8D6] border-[#EEBDBA]"}  border-2  rounded-lg `}
      >
        <div className="flex  items-center my-2 gap-2 pl-3">
          <FontAwesomeIcon
            icon={popAlert.status ? faCheckCircle : faXmarkCircle}
            className={`${popAlert.status ? "text-[#43936C]" : "text-[#CB3A31]"} text-2xl`}
          />
          <p
            className={`${popAlert.status ? "text-[#43936C]" : "text-[#CB3A31]"} text-xl font-semibold `}
          >
            {popAlert.message}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
