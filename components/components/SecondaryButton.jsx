import style from "../styles/components/SecondaryButton.module.scss";
import AddButtonIcon from "./icons/AddButtonIcon";

function SecondaryButton({ title, action }) {
    const handleClick = () => {
        action && action();
    };

    return (
        <>
            <button className={style.SecondaryButton} onClick={handleClick}>
                <p>{title}</p>
                <AddButtonIcon />
            </button>
        </>
    );
}

export default SecondaryButton;
