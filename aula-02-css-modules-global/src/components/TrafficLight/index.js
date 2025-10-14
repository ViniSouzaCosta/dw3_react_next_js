// Importando o módulo de CSS do componente
import styles from "@/components/TrafficLight/TrafficLight.module.css";
// Importando o useState
import { useState } from "react";

const TrafficLight = () => {
  // Criando o estado para cor
  const [color, setColor] = useState("gray");
  return (
    <>
      <div className={styles.container}>
        <h3 style={{ marginTop: "30px" }}>Semáforo da FATEC:</h3>
        <br />
        <div className={`${styles.light} ${color == "red" ? styles.red : styles.gray}`}></div>
        <div className={`${styles.light} ${color == "yellow" ? styles.yellow : styles.gray}`}></div>
        <div className={`${styles.light} ${color == "green" ? styles.green : styles.gray}`}></div>
      <br />
      <div>
      <button className="button" onClick={() => setColor("red")}>Pare!</button>
      <button className="button" onClick={() => setColor("yellow")}>Atenção!</button>
      <button className="button" onClick={() => setColor("green")}>Prossiga</button>
      </div>
      </div>
    </>
  );
};
export default TrafficLight;
