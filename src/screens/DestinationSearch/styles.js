import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        height: 50,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 60,
        marginRight: 15
    },
    locationText: {

    },
    seperator: {
        backgroundColor: '#dddddd',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 115,
    },
    square: {
        width: 6,
        height: 6,
        backgroundColor: 'black',
        position: 'absolute',
        top: 85,
        left: 10,
    },
    line: {
        width: 1,
        height: 49,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 33,
        left: 12.5,
    },
    circle: {
        width: 6,
        height: 6,
        backgroundColor: 'black',
        position: 'absolute',
        top: 25,
        left: 10,
        borderRadius: 50,
    }
})

export default styles;