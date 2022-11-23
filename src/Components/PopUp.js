import React from "react";
import styles from '../Styles/PopUp.module.css'

export default class PopUp extends React.Component {
    render() {
        return (
            <div className={styles.conteiner} id='containerMedida'>
                <div className={styles.form__base} id='base'>
                    <span className={styles.close} onClick={Fechar} >x</span>

                    <div className={styles.titles}>
                        <h1 className={styles.title}>Area 10</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <span className={styles.linha}>
                            <p>Modelo :</p>
                            <p>Preço :</p>
                            <button className={styles.btn}>Vender</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

function Fechar() {
    const base = document.getElementById("base");
    const containerMedida = document.getElementById("containerMedida");
    const popUpMedidas = document.getElementById("popUpMedidas");

    base.style.display = "none"
    containerMedida.style.display = "none"
    popUpMedidas.style.zIndex = "-1"

    localStorage.removeItem('idMedida')
    document.getElementById('nomeMedida').value = ''
    document.getElementById('sigla').value = ''

    const btn = document.getElementById('b')

    btn.style.opacity = '1'
    btn.style.cursor = 'pointer'
    btn.style.pointerEvents = 'auto'

    const btnAlterar = document.getElementById('btnAlterar')
    const btnExcluir = document.getElementById('btnExcluir')

    btnAlterar.style.opacity = '0.5'
    btnAlterar.style.cursor = 'not-allowed'
    btnAlterar.style.pointerEvents = 'none'

    btnExcluir.style.opacity = '0.5'
    btnExcluir.style.cursor = 'not-allowed'
    btnExcluir.style.pointerEvents = 'none'

}

