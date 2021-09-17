import React, { Component ,useState} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "./App.css";

const config ={
  width: "400px",
  height: "500px",
  floating: true,
};
// all available theme props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'calibri',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


class Bot extends Component {

  render() {
    
    return (
      
        <ThemeProvider theme={theme}>
       
        <ChatBot className="chat"
          steps={[

            {
              id:'intro', 
              message:'Welcome To IntelliInsights!!!! How can i help you??     ', 
              trigger:'intro-user',
            },
            {
              id:'intro-user', 
              options:[
              {value:'y', label:'Job Query', trigger:'job-response'},
              {value:'n', label:'Any other query', trigger:'other-query'},
              ] 
            },
            {
              id:'job-response', 
              message:'Visit our Careers page or send resume on careers@intelliinsights.com', 
              end:true,
            },
            {
              id:'other-query', 
              message:'Send your message on sales@intelliinsights.com !!!! Our team will contact you ....', 
              end:true,
            },
          ]}
          {...config}
          />
        </ThemeProvider>
     
        );
      }

    }

export default Bot;



