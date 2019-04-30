import { expect } from 'chai';

import { Banco } from '../Banco';

describe('Chain Of Responsability', () => {
 
    it('Aprobación del Crédito: Ejecutivo', () => {
        
        let banco = new Banco();

        expect(banco.solicitudPrestamo(5000)).to.equal(1);


    }); 
});
describe('Chain Of Responsability', () => {
 
    it('Aprobación del Crédito: Lider de Ejecutivo', () => {
        
        let banco = new Banco();

        expect(banco.solicitudPrestamo(25000)).to.equal(2);


    }); 
});
describe('Chain Of Responsability', () => {
 
    it('Aprobación del Crédito: Gerente', () => {
        
        let banco = new Banco();

        expect(banco.solicitudPrestamo(75000)).to.equal(3);


    }); 
});
describe('Chain Of Responsability', () => {
 
    it('Aprobación del Crédito: Director', () => {
        
        let banco = new Banco();

        expect(banco.solicitudPrestamo(150000)).to.equal(4);


    }); 
});