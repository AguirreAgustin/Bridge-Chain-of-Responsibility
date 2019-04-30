import { Vehiculo } from "./Abstraction";
import { IMotor } from "./Implementor";

export class Camioneta  extends  Vehiculo{
    
    private capacidadMaletero: number;
    
    constructor(motor: IMotor, capacidadMaletero: number) {
        super(motor);
        
        this.setCapacidadMaletero(capacidadMaletero);
        
    }

    private setCapacidadMaletero(capacidadMaletero: number){
        this.capacidadMaletero = capacidadMaletero;
    }
    public getCapacidadMaletero(): number{
        return this.capacidadMaletero;
    }
    

    
    public MostrarCaracteristicas(): String{
        return "Vehiculo de tipo Camioneta con un maletero con una capacidad de " + this.capacidadMaletero.toString() + " litros."
    }

}