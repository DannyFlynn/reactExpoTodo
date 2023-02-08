import { TextInput, View, Button } from 'react-native';

function AddTodo({ addTodo, newTodo, handleChangeText }) {

    return (
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput placeholder='Add Todo...?'
                style={{ width: '90%', fontWeight: 'bold', fontSize: 16, borderWidth: 2, borderColor: 'black', padding: 5 }}
                value={newTodo}
                onChangeText={(text) => handleChangeText(text)} />
            <Button title='Add'
                style={{ marginLeft: 0 }}
                onPress={() => addTodo(newTodo)}
            />
        </View>
    )
}


export default AddTodo