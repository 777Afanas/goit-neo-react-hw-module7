import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.location}>           
     <ClipLoader
        color="#4fa94d"
        loading={true}         
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;