import React, { useEffect, useState } from 'react'
import PopUp from '../Components/PopUp';
import PopUpVenda from '../Components/PopUpVenda';
import api from '../Services/api';
import styles from '../Styles/Patio.module.css'

export default function PatioAutomoveis() {

    const [alocacoes, setAlocacoes] = useState([])

    useEffect(() => {

    },[])

    return (
        <div className={styles.container}>
            <PopUp setAlocacoes={alocacoes} />
            <div onClick={() => Abrir("1")} className={`${styles.local1} area`}>1</div>

            <div onClick={() => Abrir("2")} className={`${styles.local2} area`}>2</div>

            <div onClick={() => Abrir("3")} className={`${styles.local3} area`}>3</div>

            <div onClick={() => Abrir("4")} className={`${styles.local4} area`}>4</div>

            <div onClick={() => Abrir("5")} className={`${styles.local5} area`}>5</div>

            <div onClick={() => Abrir("6")} className={`${styles.local6} area`}>6</div>

            <div onClick={() => Abrir("7")} className={`${styles.local7} area`}>7</div>

            <div onClick={() => Abrir("8")} className={`${styles.local8} area`}>8</div>

            <div onClick={() => Abrir("9")} className={`${styles.local9} area`}>9</div>

            <div onClick={() => Abrir("10")} className={`${styles.local10} area`}>10</div>

            <div onClick={() => Abrir("11")} className={`${styles.local11} area`}>11</div>

        </div>
    );

    function Abrir(area) {
        const popUp = document.getElementById("container")
        popUp.style.display = "flex"
    
        api.get(`api/alocacao/list/${area}`).then(response => {
            setAlocacoes(response.data)
        })
    }
}

