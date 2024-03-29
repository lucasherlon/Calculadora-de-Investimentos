
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Calculadora de investimentos</h1>

      <section>
        <h2>Juros sobre investimento</h2>
        <label>Valor investido</label>
        <input type="number" placeholder="Valor investido"/>
        <button>Calcular</button>
        <h2>Juros sobre investimento</h2>
        <h2>Juros sobre investimento</h2>

          <p>Calcula o valor de uma aplicação financeira gerado a partir dos juros compostos</p>
      </section>

      <section>
        <h2>Redesconto</h2>
        <label>Valor investido</label>
        <input type="number" placeholder="Valor investido"/>
        <button>Calcular</button>
      </section>

      <section>
        <h2>Depreciação</h2>
        <label>Valor investido</label>
        <input type="number" placeholder="Valor investido"/>
        <button>Calcular</button>
      </section>

    </>

  )
}
