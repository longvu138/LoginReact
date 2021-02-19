import {Dimensions, StyleSheet} from 'react-native'
const {width: MaxWidthS} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:300,
        height:150,
        resizeMode: 'contain',
        marginBottom:10
    },
    TextLogin:{
        fontSize:30,
        fontWeight:'800',
        color:'red',
        marginBottom:15
        

    },
    TextInput:{
        height:40,
        width:MaxWidthS-50,
        paddingHorizontal:40,
        fontSize:18,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: 7,
        marginBottom: 20,
        borderBottomWidth:2,
        borderBottomColor:'gray'

    },
    InputIcon:{
      position:'absolute',
      top:6,
      left:10,  
    
    },
    btnLogin:{
        height:50,
        width:100,
        backgroundColor: '#000',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white'
    },
    btnLoginText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    ViewSignForget:{
        marginTop:20,
        alignItems:'center'
    },
    ViewSignUp:{
        fontSize:18,
        color:'blue',
        fontWeight:'600',
        marginTop:10
    },
    ViewForget:{
        fontSize:18,
        color:'blue',
        fontWeight:'600',
    }

})
export default styles;