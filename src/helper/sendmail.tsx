import emailjs from 'emailjs-com';
import supabaseClient from './supabase';
export async function sendemail(name:string,email:string,message:string){
    const {data:emails}=await supabaseClient.from("emails").select().single();
    console.log(emails.email);
    for (let sendemail in emails.email){
      console.log("send email is " + sendemail);
        var templateParams = {
            to_name:"test",
            to_email:String(emails.email[sendemail]),
            from_name: name,
            message: message,
          };
          
          emailjs.send('service_xo2gxzc', 'template_uq91n5i',templateParams,"6p_vRcEV1ZPVC8gBS").then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
          
    }
    
    

}