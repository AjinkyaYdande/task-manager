const Button = ({ ...props }) => {
    console.log(props, "btn props");

    let { label, className = "btn" } = props;

    const onBtnClick = (e) => {
        console.log(e);
    }

    return (
        <>
            <button
                className={className}
                // onClick={(e) => onBtnClick(e)}
            >
                {label}
            </button>
        </>
    )
}

export default Button;