import './style.scss';
function Link({text, style, icon}) {


    return (
        <>
            <a href='#' className={`link ${style === 'light' ? 'link--light' : null}`}>
                {icon && <img src={icon} alt="#"/>}
                {text}
            </a>
        </>
    )
}

export default Link