function Header({ title, subTitle }) {
    return (
        <header>
            <h1>{title}</h1>
            {subTitle && <p>{subTitle}</p>}
        </header>
    );
}

export default Header;
