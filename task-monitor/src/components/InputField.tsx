import "./styles.css"
interface Props{
    todo: String,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

//const InputField: React.FC<Props> = ({ todo, setTodo}) => {
const InputField = ({ todo, setTodo}: Props) => {
  return (
    <form className='input'>
    <input type='input' 
        onChange={(e) => setTodo(e.target.value)} placeholder='Enter a task' className='input__box'/>
    <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField