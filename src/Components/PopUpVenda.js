import React, { useEffect } from "react";
import api from "../Services/api";
import styles from '../Styles/PopUpVenda.module.css'

export default class PopUpVenda extends React.Component {

    render() {

        const {clientes, concessionarias} = this.props

         async function Vender() {
            const cliente = document.getElementById("cliente").value
            const concessionaria = document.getElementById("concessionaria").value

            let alocacao = (await api.get(`api/alocacao/${localStorage.getItem("idAlocacao")}`)).data
            console.log(alocacao);

            alocacao.quantidade = alocacao.quantidade - 1

            api.put(`api/alocacao/${localStorage.getItem("idAlocacao")}`, alocacao).then(response => {
                alert("Venda realizada com sucesso")
            })
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
                                <select className={styles.select} id={"cliente"} required > {clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.text}>Concessionaria : </p>
                                <select className={styles.select} id={"concessionaria"} required>
                                    {concessionarias.map((c) => <option key={c.id} value={c.id}>{c.concessionaria}</option>)}
                                </select>
                            </div>
                        </span>
                        <button onClick={Vender} className={styles.btn}>Vender</button>
                    </div>
                </div>
            </div>
        );
    }
}

function FecharVenda() {
    const popUp = document.getElementById("containerVenda")
    popUp.style.display = "none"

    localStorage.removeItem("idAlocacao")
}

export function AbrirPopUpVenda(id) {
    const popUp = document.getElementById("containerVenda")
    popUp.style.display = "flex"

    localStorage.setItem("idAlocacao", id)
}

