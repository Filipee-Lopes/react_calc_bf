import { ReactNode } from 'react';
import styles from './AreaInfo.module.css';
import leftArrow from '../../assets/leftarrow.png';

 
export type Props = {
    children?: ReactNode,
    fn: ()=> void,
} 

export const AreaInfo = ({children, fn}: Props )=>{
    return (
        <div className={styles.main}>
            <div className={styles.containerAreaInfo}>
                <h1></h1>
                {children}   
                <div onClick={fn} className={styles.leftArrowArea}>
                <img src={leftArrow} alt="" width={50}/>
                </div>
            </div>
        </div>
    )
}