import React from 'react'
import PopUp from '../Components/PopUp';
import PopUpVenda from '../Components/PopUpVenda';
import api from '../Services/api';
import styles from '../Styles/Patio.module.css'

export default function PatioAutomoveis() {

    function getAlocacao(){
        api.get(`api/alocacao/`).then(
            response => {
                const alocacao = response.data
                console.log(alocacao);
            }
        )
    }
    
    return (
        <div className={styles.container}>
            <PopUp />
            <div onClick={() => Abrir("1")} className={styles.local1}>1</div>

            <div onClick={() => Abrir("2")} className={styles.local2}>2</div>

            <div onClick={() => Abrir("3")} className={styles.local3}>3</div>

            <div onClick={() => Abrir("4")} className={styles.local4}>4</div>

            <div onClick={() => Abrir("5")} className={styles.local5}>5</div>

            <div onClick={() => Abrir("6")} className={styles.local6}>6</div>

            <div onClick={() => Abrir("7")} className={styles.local7}>7</div>

            <div onClick={() => Abrir("8")} className={styles.local8}>8</div>

            <div onClick={() => Abrir("9")} className={styles.local9}>9</div>

            <div onClick={() => Abrir("10")} className={styles.local10}>10</div>

            <div onClick={() => Abrir("11")} className={styles.local11}>11</div>

        </div>
    );
}

export function Abrir() {
    const popUp = document.getElementById("container")
    popUp.style.display = "flex"
}