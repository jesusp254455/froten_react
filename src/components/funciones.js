import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export function mostrar_alerta(mensaje,icono,foco){
        focus(foco);
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:mensaje,
            icon:icono
        })

}

function focus(foco){
    if(foco != ''){
        document.getElementById(foco).focus();
    }
}