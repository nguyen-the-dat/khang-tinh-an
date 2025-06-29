import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoveTop = () => {
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed px-4 py-2 bottom-8 right-10 z-50 bg-white shadow-lg rounded-br-xl flex items-center gap-4 text-[#315537] hover:bg-[#315537] hover:text-white hover:duration-500 hover:ease-in-out hover:cursor-pointer"
        title="Về đầu trang"
      >
        <FontAwesomeIcon icon={faArrowUp} size="sm" />
        <span className="font-semibold">Về đầu trang</span>
      </button>
    );
  };
  export default MoveTop