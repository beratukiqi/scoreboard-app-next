import style from "../styles/components/HeaderMenu.module.scss";

function HeaderMenu({ renderContent }) {
    return (
        <nav className={style.HeaderMenu}>
            {renderContent && renderContent()}
        </nav>
    );
}

export default HeaderMenu;
