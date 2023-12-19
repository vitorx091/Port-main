import { useEffect,useState } from "react";
import "./Presention.css"


const Presention = (props) => {
    const MachineDescribe = ({ texto }) => {
        const [textoAtual, setTextoAtual] = useState('');
        const [posicao, setPosicao] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (posicao < texto.length) {
              setTextoAtual((prevTexto) => prevTexto + texto.charAt(posicao));
              setPosicao((prevPosicao) => prevPosicao + 1);
            } else {
              clearInterval(interval);
            }
          }, 100); // Ajuste a velocidade da animação conforme necessário
      
          return () => {
            clearInterval(interval);
          };
        }, [texto, posicao]);
      
        return <div>{textoAtual}</div>;
      }
    return (
        <div className="content" id="section1" >
            <div className="apresentação"  >
                <div className="prazer"><MachineDescribe texto={props.machinedescribe}/></div>
                <p>{props.P}</p>
            </div>
        </div>
    )
}

export default Presention;