import { Link } from "react-router-dom"
import "./style.css"

export default function CardServico(props: any) {

    return (
        <div className="servico">
            <div className="topo_servico">
            <Link to={"visualizarservico" + props.id }>{ props.nome}</Link>
                <span>{props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.techs.map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                }
            </div>
        </div>
    )
}