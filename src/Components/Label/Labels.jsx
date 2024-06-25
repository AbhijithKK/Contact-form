import './Labels.css'

const Labels = ({Name,ContainerStyles,Required}) => {
  return (
    <div style={ContainerStyles}>
     <label>{Name}
     {Required&&
      <span>&nbsp;*</span>
    }
    <span>&nbsp;</span>
    </label>
    </div>
  )
}

export default Labels
