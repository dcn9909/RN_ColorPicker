/**
 * Color Picker App
 * https://github.com/dcn9909
 * @dcn9909
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  Slider,
  TextInput,
  View
} from 'react-native';


class ColorControl extends Component{

    constructor(props){
        super(props);
        this.state = props;
    }


    render(){
        return(
            <View style={styles.colorControl}>
                <Text>{this.props.title}</Text>
                <Slider onValueChange= { (val) => {
                        this.props.onValueChanged(val);
                    }} 
                        step={1}  minimumValue={0} maximumValue={255}
                        value={ this.props.value } style={styles.slider}
                />
                <View>
                    <TextInput underlineColorAndroid="transparent" value={`${this.props.value}`} style={styles.textInput}/>
                </View>
            </View>
        );
    };
}


export default class ColorPicker extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            red: 100,
            green : 150,
            blue : 200
        };
    }

    renderHeader = () => {
        return(
            <View style={styles.header}>
                <Text style={styles.headerText} >Color Picker</Text>
            </View>
        );
    };

  render() {
    return (
      <View style={styles.container}>

        { this.renderHeader() }
        
        <View style={styles.body}>
            <View style={{width: 300, height: 350, }}>
                <View style={{flex:1}}>

                    <ColorControl title="R" value={this.state.red} onValueChanged={(val)=>{
                        const currentColor = this.state;
                        const newColor = {...currentColor, red:val}; 
                        this.setState(newColor);
                    }}/>
                    <ColorControl title="G" value={this.state.green} onValueChanged={(val)=>{
                        const currentColor = this.state;
                        const newColor = {...currentColor, green:val}; 
                        this.setState(newColor);
                    }}/>
                    <ColorControl title="B" value={this.state.blue} onValueChanged={(val)=>{
                        const currentColor = this.state;
                        const newColor = {...currentColor, blue:val}; 
                        this.setState(newColor);
                    }}/>
                    
                    
                </View>
                <View style={{ flex:1, backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}></View>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header:{
    flex:1,
    backgroundColor:'#ECEFF1',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'gray',
    shadowOffset: { width:0, height:2 },
    shadowOpacity:0.3,
    elevation: 3,
  },
  headerText:{
    fontSize:18,
    ...Platform.select({
        ios:{
            marginTop: 15,
        },
        android:{
            marginTop:0,
        }
    }),
  },
  body:{
    flex:10,
    alignItems:'center',
    justifyContent:'center',
  },
  textInput:{ 
    width:45, 
    height: 30, 
    textAlign:'center',
    borderColor: 'gray',
    borderRadius: 5, 
    borderWidth: 1, 
    ...Platform.select({
        ios:{
            paddingBottom: 0,
        },
        android:{
            paddingBottom:5,
        }
    }),
  },
  colorControl:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    slider:{ 
        width:200, 
        marginLeft: 5, 
        marginRight: 5 
    },
    
});