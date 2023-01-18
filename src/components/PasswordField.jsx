

import React, { useId } from 'react'

const PasswordField = () => {

 const passwordHintId = useId();


  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
          className="form-control"
        />
      </label>
      <p id={passwordHintId}>
        El password debe ser de 18 letras y contener caracteres especiales
      </p>
    </>

  )
}

export default PasswordField
