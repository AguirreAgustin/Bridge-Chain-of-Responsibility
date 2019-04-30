import { IAprobador } from "./IAprobador";

export class Gerente implements IAprobador {
    
    
    private next: IAprobador;

    public getNext(): IAprobador{

            return this.next;

    }

    public solicitudPrestamo(monto: number): number{

        if ((monto > 50000) && (monto <=100000)){
            console.log("el monto llegó al Gerente");
            return 3;
        
        }

        return this.next.solicitudPrestamo(monto);

        

    }

    public setNext(aprobador: IAprobador): void{

        this.next = aprobador;

    }

}