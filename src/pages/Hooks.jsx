import React, { useEffect,useState } from 'react';
import PasswordField from '../components/PasswordField';

const Hooks = () => {

  const [count, setCount] = useState(0)
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log('El componente se ha montado')
  }, []);


  useEffect(() => {
    console.log('El contador se ha actualizado')
      if(count != 0){
        setHidden(true);
      }else{
        setHidden(false)
      }
  }, [count]);

  return (
    <>
    
      <section>
        <div className='container'>
          <div className="row">
            <div className="col-12">
              <h1>useState</h1>
              <p>Contador: {count}</p>
              <button onClick={() => setCount(count => count + 1)} className="btn btn-primary m-2">+</button>
              <button onClick={() => setCount(count => count - 1)} className="btn btn-primary">-</button>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <h2>useEffect</h2>
                <p>Contador: {count}</p>
                <button onClick={() => setCount(count => count + 1)} className="btn btn-primary m-2">+</button>
                <button onClick={() => setCount(count => count - 1)} className="btn btn-primary m-2">-</button>

                {hidden ? <button onClick={() => setCount(0)} className="btn btn-primary">reset</button> : null}
                
                <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>useId</h3>
              <h2>Choose password</h2>
              <PasswordField />
              <h2>Confirm password</h2>
              <PasswordField />
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Hooks