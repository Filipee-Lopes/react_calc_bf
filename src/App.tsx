
import React, { useState } from 'react';
import styles from './App.module.css';
import powered from './assets/powered.png';
import {AreaInfo} from './components/AreaInfo/';
import downImage from './assets/down.png';
import upImage from './assets/up.png';




function App() {
  
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [neck, setNeck] = useState<number>(0);
  const [waist, setWaist] = useState<number>(0);
  const [hip, setHip] = useState<number>(0);
  const [toShow, setToShow] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [frase, setFrase] = useState<string>('');

  const handleChecked = (e : React.MouseEvent<HTMLElement>)=>{
    if(e.currentTarget.getAttribute('id') === 'genero_feminino'){
      setChecked(true)
    }else{
      setChecked(false)
    }
    
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setAge(parseInt(e.target.value))
  }

  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setHeight(parseInt(e.target.value))
  }

  const handleNeck = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setNeck(parseInt(e.target.value))
  }

  const handleWaist = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setWaist(parseInt(e.target.value))
  }

  const handleHip = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setHip(parseInt(e.target.value))
  }

  

  const handleCalculate= (e: React.MouseEvent<HTMLElement>)=>{
    e.preventDefault(); 
    if(checked && age && waist && hip && neck && height){
     const result = 495 / ( 1.29579 - 0.35004 * Math.log10( waist + hip - neck ) + 0.22100 * Math.log10( height ) ) - 450;
  
    if(age >= 18 && age <= 21 && result >= 0 && result <= 33){
      return(
          console.log(result),
          setToShow(upImage),
          setResult(result),
          setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
      )
    } else if(age >= 22 && age <= 29 && result >= 0 && result <= 34){ 
      return(
        console.log(result),
        setToShow(upImage),
        setResult(result),
        setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
      )
    }else if(age >= 30 && age <= 39 && result >= 0 && result <=35){
      return(
        console.log(result),
        setToShow(upImage),
        setResult(result),
        setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
      )
    }else if(age >= 40 && result >= 0 && result  <= 36){
      return(
        console.log(result),
        setToShow(upImage),
        setResult(result),
        setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
      )
    }else{
      return(
        console.log(result),
        setToShow(downImage),
        setResult(result),
        setFrase('Seu percentual de gordura está fora do padrão da Marinha americana!')
      )
    }    

    }else if(age && waist && neck && height){
      const result = 495 / ( 1.0324 - 0.19077 * Math.log10( waist - neck ) + 0.15456 * Math.log10( height ) ) - 450
      
      if(age >= 18 && age <= 21 && result >= 0 && result <= 22){
        return(
            console.log(result),
            setToShow(upImage),
            setResult(result),
            setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
        )
      } else if(age >= 22 && age <= 29 && result >= 0 && result <= 23){ 
        return(
          console.log(result),
          setToShow(upImage),
          setResult(result),
          setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
        )
      }else if(age >= 30 && age <= 39 && result >= 0 && result <= 24){
        return(
          console.log(result),
          setToShow(upImage),
          setResult(result),
          setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
        )
      }else if(age >= 40 && result >= 0 && result  <= 26){
        return(
          console.log(result),
          setToShow(upImage),
          setResult(result),
          setFrase('Seu percentual de gordura está dentro do padrão da Marinha americana!')
        )
      }else{
        return(
          console.log(result),
          setToShow(downImage),
          setResult(result),
          setFrase('Seu percentual de gordura está fora do padrão da Marinha americana!')
        )
      }    
    }else{
      alert('Preencha todos os campos')
    }
  } 

  const handleBackButton = ()=>{
      {toShow &&
      
        setToShow(''),
        setResult(0),
        setFrase('')
      
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
                onChange={handleAge}
                value={age > 0 ? age :  ''}
              />
              <input 
                type="number"
                placeholder='Digite sua altura em (cm) Ex. 180.'
                onChange={handleHeight}
                value={height > 0 ? height : ''}
              />
              <input 
                type="number"
                placeholder='Digite a cicunferência do pescoço em (cm) Ex. 48.'
                onChange={handleNeck}
                value={neck > 0 ? neck : ''}
              />
             <input 
                type="number"
                placeholder='Digite a circunferência da cintura em (cm) Ex. 75.'
                onChange={handleWaist}
                value={waist > 0 ? waist : ''}
             />
             {checked &&
              
              <input 
                type="number"
                placeholder='Digite a circunferencia do quadril em (cm) Ex. 80.'
                onChange={handleHip}
                value={hip > 0 ? hip : ''}
              />
              
              }

              <button onClick={handleCalculate} className={styles.buttonCalc}>Calcular</button>
            </form>
          </div>
          <div className={styles.rightSide}>
          
              {toShow &&
              <AreaInfo fn={handleBackButton}>
                <>
                 <img src={toShow} alt="" width={80} />
                 <h2>{result.toFixed(2)}%</h2>
                 <p>{frase}</p>
                </>
              </AreaInfo>
              }

          
          </div>
        </div>
    </div>
  )
}

export default App
