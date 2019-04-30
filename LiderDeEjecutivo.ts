import { IAprobador } from "./IAprobador";

export class LiderDeEjecutivo implements IAprobador {
    
    
    private next: IAprobador;

    public getNext(): IAprobador{

            return this.next;

    }

    public solicitudPrestamo(monto: number): number{

        if ((monto > 10000) && (monto <=50000)){
            console.log("el monto llegó al Lider de Ejecutivo");
            return 2;
        
        } 

        return this.next.solicitudPrestamo(monto);

        

    }

    public setNext(aprobador: IAprobador): void{

        this.next = aprobador;

    }

}