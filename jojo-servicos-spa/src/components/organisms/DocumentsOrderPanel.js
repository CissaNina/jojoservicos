import React, { Component } from 'react';
import firebase from '../../services/firebase';

import OrderPanel from '../molecules/OrderPanel/OrderPanel'

class Business extends Component {
  constructor(props){
    super(props);
    this.state = {
      atendimentosPendentes: [ ],
      atendimentosFinalizados: [ ]
    };
    this.database = firebase.database();
    this.handlerOnChange = this.handlerOnChange.bind(this);
  }

  handlerOnChange(key, status){
    this.database.ref('atendimentos/' + key)
      .update({'/pedidos/status': status});
  }

  componentDidMount(){
    this.database.ref('atendimentos')
      .orderByChild('pedidos/tema')
      .equalTo("agendar documentos")
      .on('value', (snapshot) => {

      let dados = snapshot.val() || { };
			let arrayDeDados = Object.keys(dados);
			
      let snapshotArray = arrayDeDados.length > 0 && arrayDeDados.map((keyItem)=>{
				
				return {
          key: keyItem,
          status: dados[keyItem].pedidos.status || '---',
          nome: dados[keyItem].cliente.nome || '---',
          email: dados[keyItem].cliente.email || '---',
          whatsapp: dados[keyItem].cliente.whatsapp || '---',
          categoria: dados[keyItem].pedidos.categoria || '---',
          tipo: dados[keyItem].pedidos.tipo || '---',
          motivo: dados[keyItem].pedidos.motivo || '---'
				};
				
      });

      let arrayAtendPendentes = snapshotArray.length > 0 
        && snapshotArray.filter((item) => {
          return item['status'] === 'Pendente';
      });

      let arrayAtendFinalizados = snapshotArray.length > 0 
        && snapshotArray.filter((item) => {
        return item['status'] === 'Finalizado';
      });

      this.setState({
        atendimentosPendentes: arrayAtendPendentes,
        atendimentosFinalizados: arrayAtendFinalizados
      });     
 
    });
  }

  render(){
    const labelsHeader = {status:'Status ▼', nome:'Cliente ▼', whatsapp:'Whatsapp', 
    email:'E-mail', categoria:'Categoria ▼', tipo:'Tipo', motivo:'Motivo'};
		const { atendimentosPendentes, atendimentosFinalizados } = this.state;
		const { handlerOnChange } = this;
    return (
			<OrderPanel 
        backgroundColor={'rgb(51, 88, 164)'}
				labelsHeader={ labelsHeader }
				atendimentosPendentes={ atendimentosPendentes }
				atendimentosFinalizados={ atendimentosFinalizados }
				handlerOnChange={ handlerOnChange }
			/>
    )
  }}
  
export default Business;