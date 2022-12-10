
import React, {  useState,useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Box, Button, Flex, Hide, IconButton, Image, Input, Link, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import bg from "./img/bg1.gif"
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
const Contact = () => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_n0iwy9m', 'template_68x8x5v', values, 'Y4tJDYFr57fRjw8o3')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
         
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }
 
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <>
    <SimpleGrid columns={[1,1,1,2]}  mb={1} gap={4} className={styles.contact_form} id="contact">
      {/* left side copy and paste from work section */}
         <Hide below="md" >
        <Box   >
            <Image src={bg} borderTopRightRadius="10px"  borderBottomRightRadius="10px" alt="bg" />

        </Box>
        </Hide>
     
      {/* right side form */}
      <Box  width="80%" m="auto" >
      {status && renderAlert()}
        <form  onSubmit={handleSubmit} >
          
           
                    <Text fontSize={"xl"} color={'#f4e16a'} fontWeight="600">Let's Colaborate</Text>
                <br/>
             
              

          <Input value={values.fullName} classname={styles.user}  required={"required"}   onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Employer or Company name"/>
          <br/>
          <br/>
             <Input value={values.email} classname={styles.user}  required={"required"}   onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="abc@email.com"/>
            <br/>
            <br/>
          <Textarea value={values.message}  classname={styles.user}  required={"required"}  onChange={handleChange} label="Your message here" name="message" placeholder="Your message please"/>
            <br/>
            <br/>
          <Button type="submit"   _focus={{outline:"none"}}  value="Send" className={styles.button}>Send Email</Button>
         
          <Box
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></Box>
        </form>
      </Box>
    </SimpleGrid>

<SimpleGrid columns={[1,1,2,4]} width={"90%"} height="40px" margin={"auto"} marginTop={4} mb={["45%","35%","15%","2%"]}>


      <Flex alignItems={"center"} gap="20px"  mt={4} >
         <IconButton size='sm' colorScheme='gray' color="black" _focus={{outline:"none"}} icon={<FaPhone />}/>
         <Link href="tel:7002403482">
         <Text textDecoration={"underline"}   >+91 7002403482</Text>
         
         </Link>
         
      </Flex>
     

      <Flex alignItems={"center"} gap="20px"  mt={4} >
       
         
         <IconButton size='sm' colorScheme='gray' _focus={{outline:"none"}} icon={<EmailIcon color='black ' />}/>
         
         <Link href='mailto:pravhatray@gmail.com'>
         <Text textDecoration={"underline"}   >pravhatray@gmail.com</Text>
         </Link>
      
        
      </Flex>

      <Flex alignItems={"center"} gap="20px"  mt={4} >
       
        <IconButton size='sm' colorScheme='gray' color="black" _focus={{outline:"none"}} icon={<FaGithub />}/>
         
          <Link href='https://github.com/pravhatray' isExternal >
         <Text textDecoration={"underline"}   >Github Profile</Text>
        </Link>
         
      </Flex>


      <Flex alignItems={"center"} gap="20px"  mt={4} >
        
        <IconButton size='sm' colorScheme='gray' color="black" _focus={{outline:"none"}} icon={<FaLinkedin />}/>
       
       <Link href="https://www.linkedin.com/in/pravhat-ray-842851236/" isExternal >
         <Text textDecoration={"underline"}   >LinkedIn Profile</Text>
        </Link>
         
      </Flex>
      

    


      </SimpleGrid>
      <Box mt={5} pb={3}>
  <Text fontSize={"large"} color={'#f4e16a'} textAlign={"center"}>Designed⌨💻⌨and Built by Pravhat Ray © 2022</Text>
</Box>
</>
  );
};
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message send successfully</p>
  </div>
)
export default Contact;
