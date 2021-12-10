import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';
export default class persona extends Component{


  constructor(props){
        super(props);
        this.state ={TextInput_id:'',
        TextInput_nombre: '',
        TextInput_creditos: '',
        TextInput_tipo: '',
        TextInput_curso: '',
        TextInput_cuatrimestre:'',
        TextInput_id_profesor:'',
        TextInput_id_grado:'',

      };

    }

    //direccion ip:172.16.6.8

    insertarAsignatura = ()=>{
      //consumir API
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/insertarAsignatura.php',
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
        },

        body: JSON.stringify(
          {
            nombre: this.state.TextInput_nombre,
            id: this.state.TextInput_id,
            creditos: this.state.TextInput_creditos,
            tipo: this.state.TextInput_tipo,
            curso: this.state.TextInput_curso,
            cuatrimestre: this.state.TextInput_cuatrimestre,
            id_profesor: this.state.TextInput_id_profesor,
            id_curso: this.state.TextInput_id_grado,
            
          }
        )
      }
      ).then((response)=> response.json())
      .then((responseJson)=> 
      {
        alert(responseJson);

      }).catch((error)=>
      {
        console.error(error);
      }
      );




    }
    actualizarAsignatura = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/editarAsignatura.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            nombre: this.state.TextInput_nombre,
            id: this.state.TextInput_id,
            creditos: this.state.TextInput_creditos,
            tipo: this.state.TextInput_tipo,
            curso: this.state.TextInput_curso,
            cuatrimestre: this.state.TextInput_cuatrimestre,
            id_profesor: this.state.TextInput_id_profesor,
            id_curso: this.state.TextInput_id_grado,
            
          }
        )
      }

      ).then((response)=> response.json())
      .then((responseJson)=>
      {
        alert('registro Actualizado');
      }
      ).catch((error)=>
      {
        console.error(error);
      }
      )
      
    }
    eliminarAsignatura = ()=>{
      
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/eliminarAsignatura.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id: this.state.TextInput_id,
          }
        )
      }

      ).then((response)=> response.json())
      .then((responseJson)=>
      {
        alert('registro eliminado');
      }
      ).catch((error)=>
      {
        console.error(error);
      }
      )
      
      
    }
    listarAsignatura = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/ListarTodasAsignaturas.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            nombre: this.state.TextInput_nombre,
            id: this.state.TextInput_id,
            creditos: this.state.TextInput_creditos,
            tipo: this.state.TextInput_tipo,
            curso: this.state.TextInput_curso,
            cuatrimestre: this.state.TextInput_cuatrimestre,
            id_profesor: this.state.TextInput_id_profesor,
            id_curso: this.state.TextInput_id_grado,

          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              TextInput_id: responseJson[0]['id'],
              TextInput_nombre: responseJson[0]['nombre'],
              TextInput_creditos: responseJson[0]['creditos'],
              TextInput_tipo: responseJson[0]['tipo'],
              TextInput_curso: responseJson[0]['curso'],
              TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
              TextInput_id_profesor: responseJson[0]['id_profesor'],
              TextInput_id_grado: responseJson[0]['id_grado'],


            }
        )   
      }
      )
      
      
    }
    listarAsignaturaId = ()=>{
      fetch('ttp://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/ListarAsignaturaid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            nombre: this.state.TextInput_nombre,
            id: this.state.TextInput_id,
            creditos: this.state.TextInput_creditos,
            tipo: this.state.TextInput_tipo,
            curso: this.state.TextInput_curso,
            cuatrimestre: this.state.TextInput_cuatrimestre,
            id_profesor: this.state.TextInput_id_profesor,
            id_curso: this.state.TextInput_id_grado,
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
                TextInput_id: responseJson[0]['id'],
                TextInput_nombre: responseJson[0]['nombre'],
                TextInput_creditos: responseJson[0]['creditos'],
                TextInput_tipo: responseJson[0]['tipo'],
                TextInput_curso: responseJson[0]['curso'],
                TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
                TextInput_id_profesor: responseJson[0]['id_profesor'],
                TextInput_id_grado: responseJson[0]['id_grado'],
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
 
           <View style = {MisEstilos.Maincontainer}>
              <Text style ={{fontSize:20, textAlign: 'center', marginBottom: 7}}>Registro de Asignaturas</Text>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id" onChangeText={id => this.setState({TextInput_id:id})} underlineColorAndroid='transparent' value={this.state.TextInput_id}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el nombre" onChangeText={nombre => this.setState({TextInput_nombre:nombre})} underlineColorAndroid='transparent' value={this.state.TextInput_nombre}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el creditos" onChangeText={creditos => this.setState({TextInput_creditos:creditos})} underlineColorAndroid='transparent' value={this.state.TextInput_creditos}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el tipo" onChangeText={tipo => this.setState({TextInput_tipo:tipo})} underlineColorAndroid='transparent' value={this.state.TextInput_tipo}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el curso" onChangeText={curso => this.setState({TextInput_curso:curso})} underlineColorAndroid='transparent' value={this.state.TextInput_curso}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el cruatrimestre" onChangeText={cuatrimestre => this.setState({TextInput_cuatrimestre:cuatrimestre})} underlineColorAndroid='transparent' value={this.state.TextInput_id_profesor}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id profesor" onChangeText={id_profesor => this.setState({TextInput_id_profesor:id_profesor})} underlineColorAndroid='transparent' value={this.state.TextInput_telefono}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id grado" onChangeText={id_grado => this.setState({TextInput_id_grado:id_grado})} underlineColorAndroid='transparent' value={this.state.TextInput_id_grado}/>
                    
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.insertarAsignatura}><Text style={{textAlign:'center'}}>agregar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.actualizarAsignatura}><Text style={{textAlign:'center'}}>editarPersona</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.eliminarAsignatura}><Text style={{textAlign:'center'}}>eliminarPersona</Text></TouchableOpacity>

              


           </View> 
        );
      }
}

const MisEstilos = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  TextoInput:{
    textAlign: 'center',
    width: '50%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,

  },
  EstiloBoton:{

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4' 

  },
  TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  RowViewContainer:{
    fontSize:20,
    paddingRight:10,
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10
  }
});