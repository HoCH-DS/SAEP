import React from "react";
import { Abrir } from "../Pages/PatioAutomoveis";
import api from "../Services/api";
import styles from '../Styles/PopUp.module.css'
import PopUpVenda, { AbrirPopUpVenda } from "./PopUpVenda";

export default class PopUp extends React.Component {
    render() {

        const {setAlocacoes} = this.props

        return (
            <div className={styles.conteiner} style={{ display: "none" }} id='container'>
                <div className={styles.form__base} id='base'>
                    <span className={styles.close} onClick={Fechar} >x</span>
                    <div className={styles.titles}>

                        <h1 className={styles.title}>Area 10</h1>
                    </div>
                    <div className={styles.formContainer}>
                        {setAlocacoes.map((a, key) =>
                            <span className={styles.linha} key={key}>
                                <p>Modelo : {a.automovel.modelo}</p>
                                <p>Preço : R$ {a.automovel.preco}</p>
                                <button onClick={() => AbrirPopUpVenda(a.id)} className={styles.btn}>Vender</button>
                            </span>
                        )}
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