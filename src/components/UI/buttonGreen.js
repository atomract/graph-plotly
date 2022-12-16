const ButtonGreen = ({text, btnColor, txtColor}) => {
    return (
        <button className={`rounded ${btnColor} ${txtColor ? txtColor : 'text-black'} p-1 ml-3`}>{text}</button>
    )
}

export default ButtonGreen;