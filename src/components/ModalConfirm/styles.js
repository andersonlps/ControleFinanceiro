import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    modal: {
        width: '90%',
        flex: 1,
        justifyContent: 'flex-end',
        margin: 0
    },

    modalMain: {
        height: 200,
        padding: 30,
        width: '111%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0B800',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // marginBottom: 49
    },

    textoModal: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 15
    },

    viewTouchableOpacity: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10
    }
});