import { expect } from 'chai';

import { IMotor } from '../Bridge/Implementor';
import { Camioneta } from '../Bridge/RefinedAbstractionA';
import { Auto } from '../Bridge/RefinedAbstractionB';
import { Diesel } from '../Bridge/ImplementorConcretoA';
import { Gasoil } from '../Bridge/ImplementorConcretoB';

describe('Bridge', () => {
 
    it('Test Camioneta Diesel', () => {
        
       let motor = new Diesel();
       let camioneta = new Camioneta(motor,4);

       expect(camioneta.Acelerar(10)).to.equal("Inyectando 10 ml. de Diesel.Realizada la explosión del Diesel.");


    }); 
});
