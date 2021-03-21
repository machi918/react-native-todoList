import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    item:{
        backgroundColor : '#edf6f9',
        marginTop: '5%',
        padding: 15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    contentLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap'
    },
    square:{
        width:20,
        height:20,
        backgroundColor:'#006d77',
        borderRadius:5,
        opacity:0.8,
        marginRight: 10
    },
    circular:{
        width:20,
        height:20,
        borderColor:'#006d77',
        borderWidth:2,
        borderRadius:10,
        opacity:0.8
    },
    itemText:{
        maxWidth:'80%'
    }

});

export default styles;