import classes from "./CartForm.module.css";
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
    const postaCodİsValid = !ValidLength(postaCodeValue);
    const cityİsValid = !isValid(cityValue);

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

    props.onConfirm({
      name:nameValue,
      street:streetValue,
      postaCode:postaCodeValue,
      city:cityValue
    })
  };

  const namedIsValid = `${classes.control} ${
    touchedIsValid.name ? "" : classes.invalid
  }`;
  const streetdIsValid = `${classes.control} ${
    touchedIsValid.street ? "" : classes.invalid
  }`;
  const postadIsValid = `${classes.control} ${
    touchedIsValid.postaCode ? "" : classes.invalid
  }`;
  const citydIsValid = `${classes.control} ${
    touchedIsValid.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.from} onSubmit={addFormHandler}>
      <div className={classes.flex}>
        <div>
          <div className={namedIsValid}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" ref={nameRef} />
            {!touchedIsValid.name && (
              <p className="text-error">Name Boş Bırakılamaz!...</p>
            )}
          </div>
          <div className={streetdIsValid}>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" ref={streetRef} />
            {!touchedIsValid.street && (
              <p className="text-error">Street Boş Bırakılamaz!...</p>
            )}
          </div>
        </div>
        <div>
          <div className={postadIsValid}>
            <label htmlFor="postal">Posta Code</label>
            <input id="postal" type="text" ref={postaCodeRef} />
            {!touchedIsValid.postaCode && (
              <p className="text-error">Posta Code Boş Bırakılamaz!...</p>
            )}
          </div>
          <div className={citydIsValid}>
            <label htmlFor="city">City</label>
            <input id="classes" type="text" ref={cityRef} />
            {!touchedIsValid.city && (
              <p className="text-error">City Boş Bırakılamaz!...</p>
            )}
          </div>
        </div>
      </div>
      <div className={classes.action}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default CartForm;
