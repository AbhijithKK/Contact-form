import './Labels.css'

const Labels = ({Name,ContainerStyles}) => {
  return (
    <div style={ContainerStyles}>
     <label>{Name}
      <span>&nbsp;*</span>
    </label>
    </div>
  )
}

export default Labels
