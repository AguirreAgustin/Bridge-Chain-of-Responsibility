import { IMotor } from "./Implementor";

export class  Gasoil implements IMotor{
    InyectarCombustible(cantidad: number): String{

        return "Inyectando " + cantidad.toString() + " ml. de Gasoil.";

    }
    ConsumirCombustible():String{

        return "Realizada la explosión del Gasoil.";

    }
}