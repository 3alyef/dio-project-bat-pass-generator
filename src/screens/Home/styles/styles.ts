import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        backgroundColor: "grey",
        paddingTop: 20,
        paddingBottom: 10,
        marginBottom: 60,
        borderColor: "white",
        flexDirection:'column',
        borderWidth:2
    },
    inputContainer:{
        width:'80%',
        flexDirection:'column',
        alignItems:'center',
    }
});

export default styles;