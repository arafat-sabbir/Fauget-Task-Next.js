import { HiOutlineMinus } from "react-icons/hi2";
const SectionTitle = ({ name }) => {
    return (
        <div>
            <p className="flex">{name}<div class="border-b-2 border-red-500"></div></p>
        </div>
    );
};

export default SectionTitle;