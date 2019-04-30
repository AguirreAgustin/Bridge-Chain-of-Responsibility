import { IMotor } from "./Implementor";

export class  Diesel implements IMotor{
    
    InyectarCombustible(cantidad: number): String{

        return "Inyectando " + cantidad.toString() + " ml. de Diesel.";

    }
    ConsumirCombustible():String{

        return "Realizada la explosión del Diesel.";

    }
}