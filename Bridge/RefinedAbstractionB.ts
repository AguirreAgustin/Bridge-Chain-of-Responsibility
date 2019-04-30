import { Vehiculo } from "./Abstraction";
import { IMotor } from "./Implementor";

export class Auto  extends  Vehiculo{
    private cantidadPuertas: number;
    
    constructor(motor: IMotor, cantidadPuertas: number) {
        
        super(motor);
       
        this.setCantidadPuertas(cantidadPuertas);
        
    }

    private setCantidadPuertas(cantidadPuertas: number){
        this.cantidadPuertas = cantidadPuertas;
    }
    public getCantidadPuertas(): number{
        return this.cantidadPuertas;
    }
    

    
    public MostrarCaracteristicas(): String{
        return "Vehiculo de tipo Auto con " + this.cantidadPuertas.toString() + " puertas."
    }
}