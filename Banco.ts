import { Ejecutivo } from "./Ejecutivo";
import { LiderDeEjecutivo } from "./LiderDeEjecutivo";
import { Gerente } from "./Gerente";
import { Director } from "./Director";
import { IAprobador } from "./IAprobador";

export class Banco implements IAprobador {
    
    
    private next: IAprobador;

    public getNext(): IAprobador{

            return this.next;

    }

    public solicitudPrestamo(monto: number): number{

        let ejecutivo = new Ejecutivo();
        let liderDeEjecutivo = new LiderDeEjecutivo();
        let gerente = new Gerente();
        let director = new Director();
        
        this.setNext(ejecutivo);
        ejecutivo.setNext(liderDeEjecutivo);
        liderDeEjecutivo.setNext(gerente);
        gerente.setNext(director);

        return this.next.solicitudPrestamo(monto);

    }

    public setNext(aprobador: IAprobador): void{
        this.next = aprobador;
    }

}