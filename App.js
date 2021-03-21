import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from 'react-native';

import Task from './components/Task'

export default function App() {

	const [task,setTask] = useState();
	const [taskItems,setTaskItems] = useState([]);
	
	const handleAddTask = ()=>{
		Keyboard.dismiss(); //Hace que el teclado vuelva para abajo (se cierre)
		console.log(task)
		if(task !== null){
			setTaskItems([...taskItems,task]);
			setTask(null); //Vacia el teclado 
		}
	};

	const handleCompleteTask = (index)=>{
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index,1);
		setTaskItems(itemsCopy);
	}

  	return (
    	<View style={styles.container}>
			<View style = {styles.taskWrapper}>
				<Text style = {styles.sectionTitle}>Lista de Tareas</Text>
				<View style = {styles.divider}></View>
				<ScrollView style = {styles.items} bounces={false} keyboardShouldPersistTaps={'never'}>
					{
						taskItems.map((item,index)=>{
							return(
								<TouchableOpacity key={index} onPress={() => handleCompleteTask(index)}>
									<Task text={item}></Task>
								</TouchableOpacity>
							)
						})
					}
				</ScrollView>
			</View>

			<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? "padding" : "margin"}
			style = {styles.writeTaskWrapper}>
				<TextInput style={styles.input} placeholder={'Escriba una tarea'} value = {task} onChangeText={text  => setTask(text)}></TextInput>
				<TouchableOpacity style ={styles.buttonHolder} onPress={handleAddTask}>
					<Text style = {styles.buttonText}>+</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
      		
    	</View>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#83c5be',
  	},
	taskWrapper:{
		paddingTop:'20%',
		paddingHorizontal:'5%'
	},
	sectionTitle:{
		fontSize:24,
		fontWeight:'bold'
	},
	divider:{
		width:'100%',
		borderBottomWidth:2,
		borderColor:'black',
		marginTop:6
	},
	items:{
		marginTop:'5%',
		height:'75%'
	},
	writeTaskWrapper:{
		position:'absolute',
		bottom:'8%',
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-evenly',
		alignItems:'center',
	},
	input:{
		padding:15,
		backgroundColor: 'white',
		width: '60%',
		borderColor:'grey',
		borderWidth: 2,
		borderRadius:10
	},
	buttonHolder:{
		width:'20%',
		backgroundColor: '#006d77',
		borderRadius:100,
		alignItems:'center',
		justifyContent:'center'
	},
	buttonText:{
		fontSize:40,
		color:'white'
	}
});
