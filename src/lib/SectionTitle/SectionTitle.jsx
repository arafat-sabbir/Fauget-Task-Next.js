import { HiOutlineMinus } from "react-icons/hi2";
const SectionTitle = ({ name }) => {
    return (
        <div>
            <p>{name} <HiOutlineMinus className="" /> </p>
        </div>
    );
};

export default SectionTitle;