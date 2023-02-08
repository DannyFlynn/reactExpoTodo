import { StyleSheet, View, Button } from 'react-native';

function ClearTodos({ clearTodos }) {
    return (
        <View style={styles.clearContainer}>
            <Button title='Clear All'
                onPress={clearTodos}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    clearContainer: {
        width: '100%',
        marginTop: 25,
    }

})

export default ClearTodos