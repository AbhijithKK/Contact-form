import './InputBox.css'

const InputBox = ({style,type,name,value,checked ,onchangeFnc}) => {
  return (
    <div style={{
      display:"flex"
    }}>
     <input onChange={onchangeFnc} type={type} name={name} value={value} checked={checked} style={style} ></input>
    </div>
  )
}

export default InputBox
