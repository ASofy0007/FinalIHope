import React from "react";
import "./control-panel.css";

function ControlPanel(props) {
  const { gameIniciou } = props;

  return (
    <section id="controlPanel">
      <form className="formulario">
        <button type="button" className="btInicio">
          {" "}
          {gameIniciou ? "Parar Jogo" : "Iniciar Jogo"}{" "}
        </button>

        <div className="nivel">
          <fieldset className="escolhaN">
            <label htmlFor="niveis"> Nivel:</label>
            <select id="niveis" defaultValue="0" disabled={gameIniciou}>
              <option defaultValue value="0">
                {" "}
                Selecione...
              </option>
              <option value="1"> Facil</option>
              <option value="2"> Medio</option>
              <option value="3"> Dificil</option>
            </select>
          </fieldset>
        </div>
      </form>
      <div className="gInfo">
        <dl>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">0</dd>
        </dl>
        <dl>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>
      </div>

      <button className="bTop">TOP 10</button>

      <label htmlFor="newWord"> Adicione uma palavra:</label>
      <input type="text" id="newWord" size="20" placeholder="Digite..." />
    </section>
  );
}
export default ControlPanel;
