import {Consumo} from '../models/consumo.model';

export class ListService {

  getConsumo(): Consumo[] {
    return [
      new Consumo('local_bar', 'Salada de frutas 250g', 'RS5.22', '18/Mar'),
      new Consumo('local_bar', 'Tigela de Açai', 'RS9.90', '14/Mar'),
      new Consumo('local_bar', 'Refeição Completa', 'RS20.00', '05/Mar'),
      new Consumo('local_bar', 'Ruffles Grande', 'RS7.90', '01/Mar'),
      new Consumo('local_bar', 'Sanduiche Natural', 'RS6.00', '25/Fev'),
      new Consumo('local_bar', 'Pão de Queijo', 'RS2.50', '21/Fev'),
      new Consumo('local_bar', 'Coca-Cola 350ml', 'RS3.50', '16/Fev'),
      new Consumo('local_bar', 'Agua 500ml', 'RS3.00', '25/Jan'),
    ];
  }

}
