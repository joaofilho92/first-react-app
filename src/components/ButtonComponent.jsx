const ButtonComponent = props => (
    <button style={{ backgroundColor: props.bgColor, fontSize: props.textSize + "px" }}>{props.buttonText}</button>
  );
  
  export default ButtonComponent;