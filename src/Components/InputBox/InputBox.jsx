import './InputBox.css'

const InputBox = ({style,type,name,value,checked}) => {
  return (
    <div>
     <input type={type} name={name} value={value} checked={checked} style={style} ></input>
    </div>
  )
}

export default InputBox
