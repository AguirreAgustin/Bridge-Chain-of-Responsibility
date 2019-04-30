import { IMotor } from "./Implementor";

export abstract class Vehiculo{

    protected motor: IMotor;
 
    constructor(motor: IMotor){
        this.setMotor(motor);
    }

    private setMotor(motor: IMotor){
        this.motor = motor;
    }
    public getMotor(): IMotor{
        return this.motor;
    }
 
    public Acelerar(combustible: number): String {
        
        return this.motor.InyectarCombustible(combustible) + "" + this.motor.ConsumirCombustible();
    }
 
    public Frenar(): String{
        return "El vehículo está frenando.";
    }
 
    
    abstract MostrarCaracteristicas(): String;

}