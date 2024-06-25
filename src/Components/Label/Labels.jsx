import './Labels.css'

const Labels = ({Name}) => {
  return (
    <div>
     <label>{Name} <span>*</span></label>
    </div>
  )
}

export default Labels
