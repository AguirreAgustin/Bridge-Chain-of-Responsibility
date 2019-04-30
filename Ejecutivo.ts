import { IAprobador } from "./IAprobador";

export class Ejecutivo implements IAprobador {
    
    
    private next: IAprobador;

    public getNext(): IAprobador{

            return this.next;

    }

    public solicitudPrestamo(monto: number): number{

        if (monto <= 10000){
            console.log("el monto llegó al Ejecutivo")
            return 1;
        
        } 

        return  this.next.solicitudPrestamo(monto);

        

    }

    public setNext(aprobador: IAprobador): void{

        this.next = aprobador;

    }

}