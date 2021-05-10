import PropTypes from 'prop-types';
const Button = ({ type = 'button', text = 'Button', cbOnClick }) => {
  const handleClick = () => {
    cbOnClick();
  };
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  cbOnClick: PropTypes.func,
};
export default Button;
