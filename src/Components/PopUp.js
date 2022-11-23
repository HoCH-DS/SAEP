import React from "react";
import api from "../Services/api";
import styles from '../Styles/PopUp.module.css'
import PopUpVenda from "./PopUpVenda";

export default class PopUp extends React.Component {
    render() {

        function getVeiculos() {
            api.get('').then(     

            )
        }

        return (
            <div className={styles.conteiner} style={{display: "none"}} id='container'>
            <div className={styles.form__base} id='base'>
                <span className={styles.close} onClick={Fechar} >x</span>
                <div className={styles.titles}>

                    <h1 className={styles.title}>Area 10</h1>
                </div>
                <div className={styles.formContainer}>
                    <span className={styles.linha}>
                        <p>Modelo :</p>
                        <p>Preço :</p>
                        <button onClick={AbrirPopUpVenda} className={styles.btn}>Vender</button>
                    </span>
                </div>
            </div>
            <PopUpVenda />
        </div>
        );
    }
}

function Fechar() {
    const popUp = document.getElementById("container")
    popUp.style.display = "none"
}

export function AbrirPopUpVenda() {
    const popUp = document.getElementById("containerVenda")
    popUp.style.display = "flex"
} 