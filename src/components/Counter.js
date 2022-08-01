
const Counter = (props) => {
    return (
        <div className='count'>
        <button onClick={props.soustraction}>-</button>
        <p>{props.number}</p>
        <button onClick={props.addition}>+</button>
        </div>
    )
}
export default Counter