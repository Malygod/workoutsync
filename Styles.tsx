import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    // btn style

    button: {
        fontSize: 25,
        marginBottom: 20,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'cyan',
        paddingHorizontal: 15,
        borderRadius: 7,
        height: 30,
        marginVertical: 0,
        width: '55%',
    },

    // btn body

    buttonText: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },

    //container

    container: {
        backgroundColor: 'black',
        flexGrow: 1,
        padding: 10,
    },
    titleStyle: {
        fontSize: 25,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'black',
        backgroundColor: 'yellow',
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 25,
    },
    formContainer: {
        marginBottom: 20,
    },
    inputText: {
        maxWidth: '90%',
        minWidth: '80%',
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 20,
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: 1500,
        justifyContent: 'center',
        color: 'black',
    },
    columnHeader: {
        flex: 1,
        padding: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    columnData: {
        flex: 1,
        padding: 10,
        alignSelf: 'center',
        color: 'white'
    },

    //Login view
    loginView: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        backgroundColor: 'black',
    },

    loginBackground: {
        flex: 1,
        height: '100%',
        marginBottom: 0,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: 'black',
    },

    loginIcon: {
        height: '100%',
        width: '100%',
        marginBottom: 0,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: 'black',
    },

    //Logo img
    backgroundLogin: {
        height: 250,
        width: 250,
        top: '5%',
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: 'black',
    },

    socialIcons: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: '75%',
        marginTop: 20,
    },

    iconsStyle: {
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical: 7,
        paddingHorizontal: 9,
    },

    //Login background image
    imgBackground: {
        flex: 1,
    },

    //Login title
    loginTitle: {
        color: 'white',
        width: '100%',
        marginTop: '81%',
        marginBottom: '5%',
        borderColor: 'whitesmoke',
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        alignSelf: 'center',
        fontSize: 42,
        lineHeight: 70,
        paddingVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c9',
    },

    //Login input name
    inputSmall: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 14,
        marginTop: '5%',
        left: '13%',
        letterSpacing: 0.1,
        fontWeight: '500',
    },

    //Login input text field
    loginInput: {
        color: 'white',
        width: '75%',
        height: 38,
        marginTop: '1%',
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderBottomColor: 'whitesmoke',
        alignSelf: 'center',
        alignItems: 'center'
    },

    //Login button
    loginBtn: {
        width: '75%',
        height: 38,
        marginVertical: 15,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderCurve: 'circular',
        borderRadius: 5,
    },

    btnTitle: {
        color: 'white',
        fontSize: 16,
        marginTop: 7,
        fontWeight: '400',
        alignSelf: 'center',
    },

    //create user
    createBtn2: {
        width: '75%',
        height: 38,
        marginVertical: 15,
        backgroundColor: 'whitesmoke',
        alignSelf: 'center',
        borderCurve: 'circular',
        borderRadius: 5,
    },

    btnTitle2: {
        color: 'black',
        fontSize: 16,
        marginTop: 7,
        fontWeight: '500',
        alignSelf: 'center',
    },

    //Login text
    loginText: {
        marginTop: '5%',
        alignSelf: 'center',
        color: 'whitesmoke'
    },

    //SeleccionView
    viewStyle: {
        flex: 1,
        backgroundColor: 'black',
    },

    //Seleccion Title
    seleccionTitle: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 1,
        alignSelf: 'center',
        marginTop: '20%',
        color: 'white',
    },

    //Arrow
    arrowDown: {
        alignSelf: 'center',
        top: '20%',
        fontSize: 0,
        borderTopColor: 'grey', borderWidth: 20,
        width: 20,
    },

    //Select btn
    createBtn3: {
        width: '75%',
        height: 80,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'darkgrey',
    },

    btnTitle3: {
        color: 'white',
        marginVertical: '7%',
        fontSize: 25,
        textAlignVertical: 'center',
        fontWeight: '800',
        alignSelf: 'center',
    },

    //Line
    splitter: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 0,
        borderBottomColor: 'grey', borderWidth: 1,
        width: 35,
    },


    //Logo select
    logoSelectStyle: {
        height: 175,
        width: 175,
        position: 'relative',
        marginTop: '10%',
        marginBottom: '10%',
        padding: 0,
        alignSelf: 'center',
    },

    //Register title
    registerTitle: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 1,
        alignSelf: 'center',
        marginTop: '15%',
        marginBottom: '10%',
        color: 'white',
    },


    registerSmall: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 14,
        marginTop: '5%',
        left: '13%',
        letterSpacing: 0.1,
        fontWeight: '500',
    },

    //Register input
    registerInput: {
        color: 'white',
        width: '75%',
        height: 38,
        marginTop: '1%',
        backgroundColor: 'black',
        borderWidth: 0.7,
        borderRadius: 0,
        borderBottomColor: 'whitesmoke',
        alignSelf: 'center',
        alignItems: 'center'
    },

    //Image selection
    imageSelect: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        borderRadius: 100,
        marginBottom: 20,
        padding: 20,
    },

    //Selected image
    imageSelectSelected: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        borderRadius: 100,
        marginBottom: 20,
        padding: 0,
    },

    //Camera icon
    cameraIcon: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        flex: 1,
    },

    //Selected image style
    imageStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        flex: 1,
    },

    //Register btn
    createUser: {
        width: '75%',
        height: 38,
        marginTop: 40,
        backgroundColor: 'whitesmoke',
        alignSelf: 'center',
        borderCurve: 'circular',
        borderRadius: 5,
    },

    //Register btn text
    createText: {
        color: 'black',
        fontSize: 16,
        marginTop: 8,
        fontWeight: '500',
        alignSelf: 'center',
    },


    sliderContainer: {
        flex: 1,
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'stretch',
        maxHeight: '5%',
        width: '75%',
        color: 'white',
    },

    sliderTrackStyle: {
        backgroundColor: 'white',
        height: 2,
    },

    touchableDatePicker: {
        width: 150,
        height: 70,
        marginVertical: '15%',
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },

    selectBirthDay: {
        height: 70,
        width: 70,
        alignSelf: 'center',
        marginTop: 0,
    },

    //Register btn
    createUser2: {
        width: '75%',
        height: 38,
        marginTop: 0,
        backgroundColor: 'whitesmoke',
        alignSelf: 'center',
        borderCurve: 'circular',
        borderRadius: 5,
    },

    //Register btn text
    createText2: {
        color: 'black',
        fontSize: 16,
        marginTop: 8,
        fontWeight: '500',
        alignSelf: 'center',
    },

    //Perfil de usuario

    dataView: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative',
    },

    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: '3%',
        marginHorizontal: 20,
    },

    imgSearch: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
    },

    centeredView: {
        height: '30%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: '150%',
        backgroundColor: 'black',
        borderTopWidth: 1.5,
        borderTopColor: 'whitesmoke',
    },

    modalView: {
        height: '30%',
        width: '90%',
        marginTop: '-30%',
        backgroundColor: "black",
        alignItems: "center",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    openButton: {
        borderRadius: 0,
        padding: 0,
    },

    modalText: {
        textAlign: "center",
        color: 'white',
        marginTop: '6%',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
    },

    imgTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '84%',
        marginTop: 0,
    },

    followCounterView: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    followText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
    },

    followCount: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },

    imageDePerfil: {
        width: 125,
        height: 125,
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: 'white',
    },

    usernameView: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: 'white',
        paddingBottom: '3%',
    },

    usernameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: '3%',
        alignSelf: 'center',
    },

    userDescription: {
        width: '89%',
        alignSelf: 'center',
    },

    descriptionText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginTop: '3%',
    },

    publicView: {
        flex: 1,
        marginTop: '3%',
        borderTopWidth: 1.5,
        borderTopColor: 'white',
        position: 'relative',
    },

    publicImg: {
        height: 500,
        width: '100%',
        borderRadius: 0,
    },

    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'black',
    },

    //Selecion de deporte

    viewStyle2: {
        width: '100%',
        height: '69%',
    },

    ViewContent: {
        backgroundColor: 'black',
        width: '100%',
        height: '31%',
    },

    sportTitle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '500',
        marginTop: '-10%',
        elevation: 5, // Aumenta la elevación
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 }, // Aumenta la altura de la sombra
        shadowOpacity: 0.8, // Aumenta la opacidad de la sombra
        shadowRadius: 4, // Añade un radio de sombra
    },

    sportDescText: {
        width: '95%',
        alignSelf: 'center',
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '400',
        marginTop: '5%',
    },

    workoutButton: {
        width: '75%',
        height: 38,
        marginTop: '15%',
        backgroundColor: 'black',
        alignSelf: 'center',
        borderCurve: 'circular',

    },

    workoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'darkgrey',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    //Formulario de servicio

});

export default styles;