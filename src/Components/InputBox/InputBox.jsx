import './InputBox.css'

const InputBox = ({style,type,name,value,checked ,onchangeFnc,className}) => {
  return (
    <div style={{
      display:"flex"
    }}>
     <input className={className} onChange={onchangeFnc} type={type} name={name} value={value} checked={checked} style={style} ></input>
    </div>
  )
}

export default InputBox
