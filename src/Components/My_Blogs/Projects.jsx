import React, { useEffect } from 'react'
import styles from "./Pro.module.css"
import {FaGithub,FaLink} from "react-icons/fa"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text,SimpleGrid, Box, Flex, Button, IconButton, color, Link } from "@chakra-ui/react"
import outlook3 from "./outlook_img/outlook3.png"
import outlook1 from "./outlook_img/outlook1.png"
import outlook2 from "./outlook_img/outlook2.png"
import unsplash1 from "./unspash_img/unsplash1.png"
import unsplash2 from "./unspash_img/unsplash2.png"
import unsplash3 from "./unspash_img/unsplash3.png"
import pharm1 from "./pharm_img/pharm1.png"
import pharm2 from "./pharm_img/pharm2.png"
import pharm3 from "./pharm_img/pharm3.png"
import ever1 from "./everhour_img/ever1.png"
import ever2 from "./everhour_img/ever2.png"
import ever3 from "./everhour_img/ever3.png"
import ever4 from "./everhour_img/ever4.png"

import Aos from 'aos';
import 'aos/dist/aos.css'; 
export const Projects = () => {

useEffect(()=>{
  Aos.init();
},[])

  return (
    <>
     <Text mt={20} fontSize={'xx-large'} fontWeight='semibold' color={'#f4e16a'} textAlign='center'>MY PROJECTS</Text>
     
     
     <SimpleGrid name='projects'
       h="auto"
        w={["97%","95%","90%","90%"]}
      
         m="auto"
         p={3}
          columns={[1,1,2]} 
          mt={"20px"} 
          borderRadius="7px" 
           boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' >
      <Box data-aos="fade-up"
       data-aos-duration="1500">

<Box w="95%"   p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={ever1} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={ever2} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={ever3} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={ever4} alt="outlook1" />
              </div>
            </Carousel>
            <div className={styles.text} >
              <Text mt={2}
              textDecoration="underline"
                fontSize="xx-large"
               textAlign={"center"}
                color={'#f4e16a'}
                fontWeight='semibold'
                font>
               Everhour.com
              </Text>
            </div>
            </Box>
            </Box> 

<Box data-aos="fade-up"
 data-aos-duration="1500">

            <Box p={3}>
          <Text  letterSpacing={1.5} fontSize={"x-large"} color="#f4e16a">About Project</Text>
          <div>
            <Text  fontSize={"large"}  >Everhour is a time management system with a strong focus on integration. If you're managing all your tasks in a specialized system, such as Asana, Trello, Basecamp, where there is no native time tracking functionality (or it's limited), you'll need to use a third-party service</Text>
          </div>
          <Text fontSize={"x-large"} color="#f4e16a">Tech-Stack</Text>
          <Text fontSize={"large"}    >Mongo DB | Express | Redux | React JS | React-Router-Dom | Chakra UI | React-Icons</Text>
          <Text fontSize={"x-large"} color="#f4e16a">Role</Text>
          <Text fontSize={"large"}    >It was an group project , I was responsible for building the dashboard page , project section, calender section, responsivness of the dashboard page. </Text>
            
            <Flex gap={'30px'} mt={2}  >
              <Link href='https://github.com/pravhatray/determined-wax-1018' isExternal={true} _hover={{textDecorationLine:"none"}}>
                  <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton   _focus={{outline:"none"}}   color='white'  colorScheme='#67dcfa'  size='md'  icon={<FaGithub/>} />
              <Button   _focus={{outline:"none"}}  color='white'  pl={"0px"} colorScheme='#67dcfa' > Source Code  </Button>
            </Flex>
              </Link>
           <Link href="https://the-great-pravhatray-site.netlify.app/" isExternal _hover={{textDecorationLine:"none"}}>
            <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton    _focus={{outline:"none"}}  color='white'  colorScheme='#67dcfa'  size='md'  icon={<FaLink/>} />
              <Button   _focus={{outline:"none"}}  color='white' pl={"0px"} colorScheme='#67dcfa'  > Live </Button>
            </Flex>
           </Link>
           
            </Flex>
           
            </Box >
            </Box>
      </SimpleGrid>
     
     
     
     
     
     
     
     
     
     
      <SimpleGrid name='projects'
       h="auto"
        w={["97%","95%","90%","90%"]}
      
         m="auto"
         p={3}
          columns={[1,1,2]} 
          mt={"40px"} 
          borderRadius="7px" 
           boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' >
      <Box data-aos="fade-up"
       data-aos-duration="1500">

<Box w="95%"   p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={outlook3} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={outlook2} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={outlook1} alt="outlook1" />
              </div>
            </Carousel>
            <div className={styles.text} >
              <Text mt={2}
              textDecoration="underline"
                fontSize="xx-large"
               textAlign={"center"}
                color={'#f4e16a'}
                fontWeight='semibold'
                font>
                Outlook India.com
              </Text>
            </div>
            </Box>
            </Box> 

<Box data-aos="fade-up"
 data-aos-duration="1500">

            <Box p={3}>
          <Text  letterSpacing={1.5} fontSize={"x-large"} color="#f4e16a">About Project</Text>
          <div>
            <Text  fontSize={"large"}  >Outlook Publishing (India) Pvt. Ltd. started operations in 1995 as a division of Hathway Investments Private Limited, with the launch of ‘Outlook’, a current affairs news magazine. In 2003, the division was demerged into a separate entity Outlook Publishing (India) Pvt. Ltd.</Text>
          </div>
          <Text fontSize={"x-large"} color="#f4e16a">Tech-Stack</Text>
          <Text fontSize={"large"}    >React JS | React-Router-Dom |JSON-Server | Chakra UI | React-Icons</Text>
          <Text fontSize={"x-large"} color="#f4e16a">Role</Text>
          <Text fontSize={"large"}    >It was an individual project , whole website was built by me. </Text>
            
            <Flex gap={'30px'} mt={2}  >
              <Link href='https://github.com/pravhatray/outlook_India' isExternal={true} _hover={{textDecorationLine:"none"}}>
                  <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton   _focus={{outline:"none"}}   color='white'   colorScheme='#67dcfa'  size='md'  icon={<FaGithub/>} />
              <Button   _focus={{outline:"none"}}  color='white'   pl={"0px"} colorScheme='#67dcfa' > Source Code  </Button>
            </Flex>
              </Link>
           <Link href="https://indialookout.vercel.app/?q=" isExternal _hover={{textDecorationLine:"none"}}>
            <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton    _focus={{outline:"none"}}  color='white'  colorScheme='#67dcfa'  size='md'  icon={<FaLink/>} />
              <Button   _focus={{outline:"none"}}  color='white'  pl={"0px"} colorScheme='#67dcfa'  > Live </Button>
            </Flex>
           </Link>
           
            </Flex>
           
            </Box >
            </Box>
      </SimpleGrid>

      <SimpleGrid  h="auto"
 p={3}  w={["97%","95%","90%","90%"]} m="auto" columns={[1,1,2]} mt={9} borderRadius="7px"   boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' >
       
      <div data-aos="fade-up"
       data-aos-duration="1500">  
<Box w="95%"  p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={unsplash1} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={unsplash2} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={unsplash3} alt="outlook1" />
              </div>
            </Carousel>
            <div className={styles.text} >
              <Text mt={2}
              textDecoration="underline"
                fontSize="xx-large"
               textAlign={"center"}
                color={'#f4e16a'}
                fontWeight='semibold'
                font>
                Unsplash.com
              </Text>
            </div>
            </Box>
</div>
            <div data-aos="fade-up"
             data-aos-duration="1500">
            <Box p={3}>
          <Text  letterSpacing={1.5} fontSize={"x-large"} color="#f4e16a">About Project</Text>
          <div>
            <Text  fontSize={"large"}  >Unsplash is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity around the world. So sign up for free, or don’t. Either way, you’ve got access to over 3 million photos under the Unsplash license—which makes them free to download.</Text>
          </div>
          <Text fontSize={"x-large"} color="#f4e16a">Tech-Stack</Text>
          <Text fontSize={"large"}    >HTML | CSS | Javascript | JSON-Server</Text>
          <Text fontSize={"x-large"} color="#f4e16a">Role</Text>
          <Text fontSize={"large"}    >It was an group project for 6 members, and I had built home page which shows different categories of Hd images</Text>
            
            <Flex gap={'30px'} mt={2}  >

              <Link href="https://github.com/amitchouhan948/Unsplash-Project_U3" isExternal _hover={{textDecorationLine:"none"}}>
                   <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton    _focus={{outline:"none"}}     color='white'   colorScheme='#67dcfa'  size='md'  icon={<FaGithub/>} />
              <Button   _focus={{outline:"none"}}    color='white'   pl={"0px"} colorScheme='#67dcfa' > Source Code  </Button>
            </Flex>
              </Link>
          <Link href="https://shimmering-donut-1d044b.netlify.app/" isExternal _hover={{textDecorationLine:"none"}}>
           <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton    _focus={{outline:"none"}}     color='white'  colorScheme='#67dcfa'  size='md'  icon={<FaLink/>} />
              <Button    _focus={{outline:"none"}}   color='white'  pl={"0px"} colorScheme='#67dcfa'  > Live</Button>
            </Flex>
          </Link>
           
            </Flex>
           
            </Box >
            </div>
      </SimpleGrid>

      <SimpleGrid  h="auto"
 p={3} w={["97%","95%","90%","90%"]} m="auto" columns={[1,1,2]} mt={9} borderRadius="7px"   boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' >
      <div data-aos="fade-up"
       data-aos-duration="1500">

<Box w="95%"  p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={pharm1} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={pharm2} alt="outlook1" />
              </div>
              <div>
                <img style={{ borderRadius: "7px", height: "300px"}} src={pharm3} alt="outlook1" />
              </div>
            </Carousel>
            <div className={styles.text} >
              <Text mt={2}
              textDecoration="underline"
                fontSize="xx-large"
               textAlign={"center"}
                color={'#f4e16a'}
                fontWeight='semibold'
                font>
               Pharm Easy.com
              </Text>
            </div>
            </Box>
</div>
            <div data-aos="fade-up"
             data-aos-duration="1500">            
            <Box p={3}>
          <Text  letterSpacing={1.5} fontSize={"x-large"} color="#f4e16a">About Project</Text>
          <div>
            <Text  fontSize={"large"}  >PharmEasy is a consumer healthcare “super app”.PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.</Text>
          </div>
          <Text fontSize={"x-large"} color="#f4e16a">Tech-Stack</Text>
          <Text fontSize={"large"}    >HTML | CSS | Javascript</Text>
          <Text fontSize={"x-large"} color="#f4e16a">Role</Text>
          <Text fontSize={"large"}    >It was an group project for 6 members, and I had built home page along with the login and signup authentication page. </Text>
            
            <Flex gap={'30px'} mt={2}  >

              <Link href="https://github.com/vinaykumar2n/project_pharmeasy" isExternal _hover={{textDecorationLine:"none"}}>
                  <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton   _focus={{outline:"none"}}    color='white'   colorScheme='#67dcfa'  size='md'  icon={<FaGithub/>} />
              <Button   _focus={{outline:"none"}}   color='white'   pl={"0px"} colorScheme='#67dcfa' > Source Code  </Button>
            </Flex>
              </Link>
           <Link href="https://bejewelled-fenglisu-95e50b.netlify.app/sagar%20and%20pravhat/navbarforhome" isExternal _hover={{textDecorationLine:"none"}}>
           <Flex bg={"#67dcfa"} borderRadius={4}>
            <IconButton   _focus={{outline:"none"}}    color='white'  colorScheme='#67dcfa'  size='md'  icon={<FaLink/>} />
              <Button  _focus={{outline:"none"}}    color='white'  pl={"0px"} colorScheme='#67dcfa'  > Live</Button>
            </Flex>
           </Link> 
           
            </Flex>
           
            </Box >
</div>
      </SimpleGrid> 


    </>
  )
}
