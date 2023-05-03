import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub,BsLinkedin, BsPerson ,BsFillTelephoneFill} from 'react-icons/bs';
  import { AiFillGithub ,AiOutlineLinkedin} from "react-icons/ai";
  import {HiLocationMarker} from "react-icons/hi"
  import {SiGmail} from "react-icons/si"
  import emailjs from "@emailjs/browser"
  import Swal from 'sweetalert2'
  import styles from "../css/contact.module.css"
  export const Contact = () => {
  
    const handleOnSubmit = (e) => {
        e.preventDefault()
       
        emailjs.sendForm('service_e4ebcul', 'template_750oqk8', e.target, '-S3ZRSAYOPIn9YU6D').then(
          (result) => {
            console.log(result.text)
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            })
          },
          (error) => {
            console.log(error.text)
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          },
        )
        e.target.reset()
      }
    return (
        <div id='contact' className={styles.mainContactContainer}>
     
        <div className={styles.contactContainer}>
        <div className={styles.con1}>
          <h2 className={styles.contactHeading}>Contact</h2>
          <h3>Fill Up the below form to contact</h3>

          <div className={styles.c1}>
            <h4><BsFillTelephoneFill /> 9767292436</h4>
            <h4><SiGmail /> nilamkhose2001@gmail.com</h4>
            <h4><HiLocationMarker /> Ahmednagar,Maharashtra</h4>
          </div>
            <div className={styles.social}>
            <a href="https://github.com/nilamkhose2001" target="_blank">
                      <AiFillGithub />
                     </a>
                     <a  href="https://www.linkedin.com/in/nilam-khose-008553220/" target="_blank">
                      <AiOutlineLinkedin />
                     </a>
            </div>
        </div>
               
                          
                    <div className={styles.con2}>
                        <form onSubmit={handleOnSubmit} className={styles.conForm}>
                        <label>Name</label>
                        <br />
                   
                        <input type="text" name="your_name" placeholder=''/>
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="text" name="your_email" />
                        <br />
                        <label>Message</label>
                        <br />
                        
                        <textarea type="text" name="your_message" />
                        <br />
                        <br />
                        <input className={styles.sub} type="submit" value="Send Message" />
                        </form>
                        
                        </div>
                        </div>
                        <p className={styles.copyRight}>&#169; 2022 | Designed by Nilam Khose</p>
      </div>
    );
  }
