import style from "../styles/components/ContentContainer.module.scss";
import ArrowIcon from "./icons/ArrowIcon";

function ContentContainer({ title, renderContent }) {
    return (
        <section className={style.ContentContainer}>
            <header className={style.ContentContainer__header}>
                <h2>{title}</h2>
                <ArrowIcon />
            </header>
            {renderContent && renderContent()}
        </section>
    );
}

export default ContentContainer;
