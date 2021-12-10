import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';
export default class persona extends Component{


  constructor(props){
        super(props);
        this.state ={id_profesor:'', id_departamento:''};

    }

    //direccion ip:172.16.6.8

    insertarProfesor = ()=>{
      //consumir API
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/insertarProfesor.php',
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
        },

        body: JSON.stringify(
          {
           profesor_id:this.state.id_profesor,
           departamento_id:this.state.id_departamento,
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
    actualizarProfesor = ()=>{
      fetch('ttp://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/editarProfesor.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            profesor_id:this.state.id_profesor,
            departamento_id:this.state.id_departamento,
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
    eliminarProfesor = ()=>{
      
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/eliminarProfesor.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            profesor_id:this.state.id_profesor,
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
    listarProfesor = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/listartodosProfesores.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            profesor_id:this.state.id_profesor,
            departamento_id:this.state.id_departamento,
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
            id_profesor: responseJson[0]['id_profesor'],
            id_departamento: responseJson[0]['id_departamento'] 
            }
        )   
      }
      )
      
      
    }
    listarProfesorId = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/listarProfesorid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
           profesor_id:this.state.id_profesor,
           departamento_id:this.state.id_departamento,
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              id_profesor: responseJson[0]['id_profesor'],
              id_departamento: responseJson[0]['id_departamento'] 
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
 
              <View style = {MisEstilos.Maincontainer}>
              <Text style ={{fontSize:20, textAlign: 'center', marginBottom: 7}}>Registro de profesor</Text>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el profesor" onChangeText={id_profesor => this.setState({id_profesor:id_profesor})} underlineColorAndroid='transparent' value={this.state.id_profesor}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el departamento" onChangeText={id_departamento => this.setState({id_departamento:id_departamento})} underlineColorAndroid='transparent' value={this.state.id_departamento}/>
            
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.insertarProfesor}><Text style={{textAlign:'center'}}>agregar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.actualizarProfesor}><Text style={{textAlign:'center'}}>editar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.eliminarProfesor}><Text style={{textAlign:'center'}}>eliminar</Text></TouchableOpacity>

                
           </View> 
        );
      }
}
const MisEstilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '50%',
    backgroundColor: '#00BCD4' 

  },
  TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
});