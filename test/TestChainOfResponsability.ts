import { expect } from 'chai';

import { Banco } from '../Banco';

describe('Chain Of Responsability', () => {
 
    it('Aprobación del Crédito: Ejecutivo', () => {
        
        let banco = new Banco();

        expect(banco.solicitudPrestamo(5000)).to.equal(1);


    }); 
});