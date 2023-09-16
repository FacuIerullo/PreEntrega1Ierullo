import { Link } from "react-router-dom"
import { context } from "./Context"
import { useContext } from "react"


function Checkout () {

  const { clearCart } = useContext(context)

 return(
    <>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationTooltip01" required />
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="validationTooltip02" required />
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="validationTooltip03" required />
    <div class="invalid-tooltip">
      Por favor introduzca su ciudad
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">Provincia</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Elegir</option>
      <option>Buenos Aires</option>
      <option>Ciudad Autónoma de Buenos Aires</option>
      <option>Catamarca</option>
      <option>Chaco</option>
      <option>Chubut</option>
      <option>Córdoba</option>
      <option>Corrientes</option>
      <option>Entre Ríos</option>
      <option>Formosa</option>
      <option>Jujuy</option>
      <option>La Pampa</option>
      <option>La Rioja</option>
      <option>Mendoza</option>
      <option>Misiones</option>
      <option>Neuquén</option>
      <option>Río Negro</option>
      <option>Salta</option>
      <option>San Juan</option>
      <option>San Luis</option>
      <option>Santa Cruz</option>
      <option>Santa Fe</option>
      <option>Santiago del Estero</option>
      <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
      <option>Tucumán</option>
    </select>
    <div class="invalid-tooltip">
      Porfavor elija su Provincia
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationTooltip05" required />
    <div class="invalid-tooltip">
      Por favor introduzca en email valido
    </div>
  </div>
  <div class="col-12">
    <Link onClick={clearCart} to={"/compraconfirmada"} class="btn btn-dark" type="submit">Enviar</Link>
  </div>
</form>
    </>
 )   
}

export default Checkout