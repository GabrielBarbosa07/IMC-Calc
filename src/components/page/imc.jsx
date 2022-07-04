import React, { useState } from "react";
import Table from "../table/table";
import "./styles.css";

export default function IMC() {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState('')

    //funçao condicional para os inputs vazios
    const inputsCondition = () => {
        if (weight <= 0) {
            alert("Insira um peso válido")
            return
        } else if (height <= 0) {
            alert("Insira uma altura válida")
            return
        }
    }

    //funçao que calcula o IMC e seta para o state do resultado
    const calculateImc = () => {
        inputsCondition()
        const imc = weight / (height * height)
        const formattedImc = imc.toFixed(2)
        setResult(formattedImc)
    }

    //funçao para resetar os inputs
    const reset = () => {
        setWeight(0)
        setHeight(0)
        setResult("")
    }

    //funçao condicional para a renderizaçao do resultado
    const conditionRender = () => {
        if (result && weight > 0 && height > 0) {
            return <div className="res">
                <h4>Seu <b>IMC</b> é: </h4>
                <p><b>{result}</b></p>
            </div>
        }
    }

    //renderização dos componentes
    return (
        <div className="container">
            <h1 className="fw-bold mb-5">Calcuradora IMC</h1>
            <div className="content p-3 border-radius">
                <input className="form-control in" type="number"
                    placeholder="Peso (kg)                                                    Ex: 92.6"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input className="form-control my-1 in" type="number"
                    placeholder="Altura (m)                                                   Ex: 1.65"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <button className="btn btn-lg w-50 my-2" onClick={reset}>Resetar</button>
                <button className="btn btn-lg w-50 btn-primary" onClick={calculateImc}>Calcular</button>

                {conditionRender()}
                <Table />
            </div>
        </div>
    );
}