import React from "react";
import api from "../Services/api";
import styles from '../Styles/PopUpVenda.module.css'

export default class PopUpVenda extends React.Component {
    render() {

        function getCliente() {
            api.get('').then(

            )
        }

        function getConcessionaria() {
            api.get('').then(

            )
        }

        return (
            <div className={styles.conteiner} id='containerVenda'>
                <div className={styles.form__base} id='base'>
                    <span className={styles.close} onClick={FecharVenda}>x</span>
                    <div className={styles.titles}>
                        <h1 className={styles.title}>Area 10</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <span className={styles.linha}>
                            <div className={styles.info}>
                                <p className={styles.text}>Cliente :</p> 
                                <select className={styles.select} required ></select>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.text}>Concessionaria : </p> 
                                <select className={styles.select} required ></select>
                            </div>
                        </span>
                        <button className={styles.btn}>Vender</button>
                    </div>
                </div>
            </div>
        );
    }
}

function FecharVenda() {  
    const popUp = document.getElementById("containerVenda")
    popUp.style.display = "none"
}
    

