import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    inputText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#6e6e6e"
    },
    timeContainer: {
        width: 100,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 15,
        borderColor: '#b3b3b3',
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 15
    }
})

export default styles;