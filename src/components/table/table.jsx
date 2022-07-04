import React from 'react';
import "./styles.css";

export default function table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de <b>18,5</b></td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre <b>18,5</b> e <b>24,9</b></td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre <b>25</b> e <b>29,9</b></td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre <b>30</b> e <b>34,9</b></td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre <b>35 e 39,9</b></td>
                </tr>
                <tr>
                    <td>Obesidade Grau III ou Morbida</td>
                    <td>Maior que <b>40</b></td>
                </tr>
            </tbody>
        </table>
    );
}