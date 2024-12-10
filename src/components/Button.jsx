import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";
import { BsTranslate } from "react-icons/bs";

const Button = () => {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(translateText())}
            className="bg-zinc-700 text-center px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3 disabled:brightness-50"
        >
            <h3 className="flex align-items-center justify-center text-emerald-400 ">Translate <BsTranslate className="ml-2" size={20} /></h3>
        </div>
    );
};

export default Button;