import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';
export default class persona extends Component{


  constructor(props){
        super(props);
        this.state ={TextInput_id:'', TextInput_nombre:''};

    }

    //direccion ip:172.16.6.8

    insertarCurso = ()=>{
      //consumir API
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/insertarCurso.php',
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
        },

        body: JSON.stringify(
          {
           id:this.state.TextInput_id,
           nombre:this.state.TextInput_nombre,
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
    actualizarCursos = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/editarCursos.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id:this.state.TextInput_id,
            nombre:this.state.TextInput_nombre,
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
    eliminarCurso = ()=>{
      
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/eliminarCursos.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id:this.state.TextInput_id,
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
    listarCurso = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/listarTodosCursos.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id:this.state.TextInput_id,
            nombre:this.state.TextInput_nombre,
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              TextInput_id: responseJson[0]['id'],
              TextInput_nombre: responseJson[0]['nombre'] 
            }
        )   
      }
      )
      
      
    }
    listarCursoId = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/listarCursoid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id:this.state.TextInput_id,
            nombre:this.state.TextInput_nombre
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              TextInput_id: responseJson[0]['id'],
              TextInput_nombre: responseJson[0]['nombre'] 
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
 
              <View style = {MisEstilos.Maincontainer}>
              <Text style ={{fontSize:20, textAlign: 'center', marginBottom: 7}}>Registro de curso</Text>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id" onChangeText={id => this.setState({TextInput_id:id})} underlineColorAndroid='transparent' value={this.state.TextInput_id}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el nombre" onChangeText={nombre => this.setState({TextInput_nombre:nombre})} underlineColorAndroid='transparent' value={this.state.TextInput_nombre}/>
            
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.insertarCurso}><Text style={{textAlign:'center'}}>agregar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.actualizarCursos}><Text style={{textAlign:'center'}}>editar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.eliminarCurso}><Text style={{textAlign:'center'}}>eliminar</Text></TouchableOpacity>

                
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