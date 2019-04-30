
export  interface IAprobador{

    setNext(aprobador: IAprobador): void;
    getNext(): IAprobador;
    solicitudPrestamo(monto: number): number;


}