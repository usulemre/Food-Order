// import classes from "./CartFrom.module.css";
import { useRef, useState } from "react";
const CartForm = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postaCodeRef = useRef();
  const cityRef = useRef();
  const [touchedIsValid, setTouchedIsValid] = useState({
    name: true,
    street: true,
    postaCode: true,
    city: true,
  });

  const isValid = (value) => value.trim() === "";
  const ValidLength = (value) => value.trim().length !== 5;
  const addFormHandler = (event) => {
    event.preventDefault();

    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const postaCodeValue = postaCodeRef.current.value;
    const cityValue = cityRef.current.value;

    const nameİsValid = !isValid(nameValue);
    const streetİsValid = !isValid(streetValue);
    const postaCodİsValid = !isValid(postaCodeValue);
    const cityİsValid = !ValidLength(cityValue);

    setTouchedIsValid({
      name: nameİsValid,
      street: streetİsValid,
      postaCode: postaCodİsValid,
      city: cityİsValid,
    });

    const formValid =
      nameİsValid && streetİsValid && postaCodİsValid && cityİsValid;

    if (!formValid) {
      return;
    }

    //submit
  };
  return (
    <form onSubmit={addFormHandler}>
      <div className="">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
        {!touchedIsValid.name && <p>Name Boş Bırakılamaz!...</p>}
      </div>
      <div className="">
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetRef} />
      </div>
      <div className="">
        <label htmlFor="postal">Posta Code</label>
        <input id="postal" type="text" ref={postaCodeRef} />
      </div>
      <div className="">
        <label htmlFor="city">City</label>
        <input id="classes" type="text" ref={cityRef} />
      </div>
      <button type="button" onClick={props.onClose}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default CartForm;
