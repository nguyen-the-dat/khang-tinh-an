import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div className="montserrat-font relative">
      <div className="relative w-full overflow-hidden">
        <img
          src="/desktop.jpg"
          alt="photo"
          className="w-full h-full object-cover object-center mt-16 md:mt-20"
        />
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-[#112201ab] z-10"></div>

        {/* Icon và text overlay */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white z-20">
          <FontAwesomeIcon
            icon={faArrowDownLong}
            size="1x"
            className="animate-bounce"
          />
          <div className="font-medium text-sm">
            Kéo xuống để khám phá thêm
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
