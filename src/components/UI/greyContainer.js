
const GreyContainer = ({ children, classNames, bgColor}) => {
    return (
        <div className={`shadow-gray-400 p-2 ${bgColor ? bgColor : 'bg-gray-200' } rounded-xl shadow border mb-2 ${classNames}`}>{children}</div>
    )
}

export default GreyContainer;