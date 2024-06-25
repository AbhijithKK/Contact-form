import './InputBox.css'

const InputBox = ({style,type,radioGroup}) => {
  return (
    <div>
     <input type={type} radioGroup={radioGroup} style={style} ></input>
    </div>
  )
}

export default InputBox
