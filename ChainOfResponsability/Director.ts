import { IAprobador } from "./IAprobador";

export class Director implements IAprobador {
    
    
    private next: IAprobador;

    public getNext(): IAprobador{
        
            return this.next;

    }

    public solicitudPrestamo(monto: number): number{

        if (monto > 100000){
            console.log("el monto llegó al Director");
            return 4;
        
        } 

    }

    public setNext(aprobador: IAprobador): void{

    }

}