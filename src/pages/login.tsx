import React from "react";
import Stepper from "../components/stepper/stepper";
import Step from "../components/stepper/step";
import { applyLayout } from "../shared/hocs/apply-layout";
import Layout from "../components/layout/layout";
import { pageTitle } from "../shared/hocs/page-title";

@applyLayout(Layout)
@pageTitle(() => "Login")
export default class extends React.Component {
  
  render() {
    return (
      <Stepper>
        <Step
          title="Step 1"
          icon="https://image.flaticon.com/icons/svg/1246/1246343.svg"
        >
         <form>
         FORMULARIO 1
         <br />
         <label>Nombres y Apellidos: (Solo lectura)</label>
        <br />
        <input type="text" name="nya" id="nya"/>
        <br /><br />
        <label >Email: (Campo Obligatorio)</label>
        <br />
        <input type="text" name="email" id="email" required />
        <br /><br />
        <label >Edad: (Ejemplo)</label>
        <br/>
        <input type="text" name="edad" id="edad" placeholder="Ejemplo: 23 años" />
        <br /><br />
          </form>
        </Step>
        <Step
          title="Step 2"
          icon="https://image.flaticon.com/icons/svg/1246/1246321.svg"
        >
          <form>FORMULARIO 2
          <br />
         <label>Nombres y Apellidos: (Solo lectura)</label>
        <br />
        <input type="text" name="nya" id="nya"/>
        <br /><br />
        <label >Email: (Campo Obligatorio)</label>
        <br />
        <input type="text" name="email" id="email" required />
        <br /><br />
        <label >Edad: (Ejemplo)</label>
        <br/>
        <input type="text" name="edad" id="edad" placeholder="Ejemplo: 23 años" />
        <br /><br />
          </form>
        </Step>
        <Step
          title="Step 3"
          icon="https://image.flaticon.com/icons/svg/1246/1246335.svg"
        >
          <form>FORMULARIO 3
          <br />
         <label>Nombres y Apellidos: (Solo lectura)</label>
        <br />
        <input type="text" name="nya" id="nya"/>
        <br /><br />
        <label >Email: (Campo Obligatorio)</label>
        <br />
        <input type="text" name="email" id="email" required />
        <br /><br />
        <label >Edad: (Ejemplo)</label>
        <br/>
        <input type="text" name="edad" id="edad" placeholder="Ejemplo: 23 años" />
        <br /><br />
          </form>
        </Step>
      </Stepper>
    );
  }
}
