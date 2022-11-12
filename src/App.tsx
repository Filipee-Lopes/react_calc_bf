
import { useState } from 'react';
import styles from './App.module.css';
import powered from './assets/powered.png';


function App() {
  
  const [checked, setChecked] = useState(false);

  const handleChecked = (e : React.MouseEvent<HTMLElement>)=>{
    if(e.currentTarget.getAttribute('id') === 'genero_feminino'){
      setChecked(true)
    }else{
      setChecked(false)
    }
    
  }



  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div>
          <img src={powered} alt="" width={50} />
        </div>
      </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule seu BF %</h1>
            <p>
              O método aqui utilizado para calcular o BF (“body fat” ou percentual de gordura corporal em português) 
              foi desenvolvido pela Marinha dos EUA para medir a gordura corporal de seus integrantes, 
              ou seja, é um método usado na prática e bastante difundido. Ele é baseado apenas em medidas corporais, portanto, 
              fácil de se fazer em casa.

            </p>
            <form >
              
              <div className={styles.genderInput}>
                <label htmlFor="genero"></label>
                <input type='radio' onClick={handleChecked} id='genero_masculino' value='Homem' name='genero'/>Homem
                <input type='radio' onClick={handleChecked}  id='genero_feminino' value='Mulher' name='genero'/>Mulher
              </div>

              <input 
                type="number"
                placeholder='Digite sua idade.'
              />
              <input 
                type="number"
                placeholder='Digite sua altura em (cm) Ex. 180.'
              />
              <input 
                type="number"
                placeholder='Digite a cicunferência do pescoço em (cm) Ex. 48.'
              />
             <input 
                type="number"
                placeholder='Digite a circunferência da cintura em (cm) Ex. 75.'
             />
             {checked &&
              
              <input 
                type="number"
                placeholder='Digite a circunferencia do quadril em (cm) Ex. 80.'
              />
              
              }

              <button className={styles.buttonCalc}>Calcular</button>
            </form>
          </div>
          <div className={styles.rightSide}>...</div>
        </div>
    </div>
  )
}

export default App
