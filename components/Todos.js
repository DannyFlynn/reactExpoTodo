import { StyleSheet, Keyboard, Text, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import AddTodo from './AddTodo';
import ClearTodos from './ClearTodos';


function Todos() {


    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState("");

    const handleChangeText = (text) => {
        setNewTodo(text)
    }

    //add todo to list
    const addTodo = (message) => {
        Keyboard.dismiss();
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            todo: message,
            done: false,
        }
        setTodos(prev => [newTodo, ...prev]);
        setNewTodo("")
    }

    //delete a todo from list
    const deleteTodo = (id) => {

        setTodos(todos.filter(todo => todo.id !== id))
    }

    //tick todo 
    const tickTodo = (id) => {

        setTodos(todos.map(todo => {

            if (todo.id === id) {
                return { ...todo, done: true }
            } else {
                return { ...todo }
            }
        }))

    }

    //clear all todos
    const clearTodos = () => {

        setTodos([])
    }

    return (
        <View style={styles.todocontainer}>
            <AddTodo addTodo={addTodo} newTodo={newTodo} handleChangeText={handleChangeText} />
            <FlatList
                data={todos}
                renderItem={({ item }) =>
                    <View style={styles.todo}>
                        <Text style={item.done === false ? [styles.todomessage, { fontWeight: 'bold', fontSize: 16 }] : [styles.todomessageDone, { fontWeight: 'bold', fontSize: 16 }]} >
                            {item.todo}</Text>
                        <View style={{
                            width: '25%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',

                        }} >
                            <Button title='X'
                                style={styles.todobtn}
                                onPress={() => deleteTodo(item.id)}
                                color='tomato' />
                            <Button title={'\u2714'}
                                style={styles.todobtn}
                                onPress={() => tickTodo(item.id)}
                            />
                        </View>
                    </View>
                }
                keyExtractor={item => item.id}
            />
            {todos.length > 3 ? <ClearTodos clearTodos={clearTodos} /> : false}
        </View>
    )
}

const styles = StyleSheet.create({
    todocontainer: {
        width: '95%',
        margin: 100,
    },
    todomessage: {
        width: '75%',
    },
    todomessageDone: {
        width: '75%',
        textDecorationLine: 'line-through',
        color: '#5cb85c'
    },
    todo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        border: 'none',
        borderBottomColor: 'rgb(66,139,202)',
        borderBottomWidth: 3,
        padding: 5,

    },
})

export default Todos