import React,{useState} from 'react'
import styles from './ContactScreen.module.css'


const ContactScreen = () => {

    
  const [name,setName] = useState("");
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")


  function submitform(e){
    e.preventDefault();
    fetch("http://localhost:8000/submitform",{
      method: 'POST',
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name:name,
        email:email,
        message:message
      })
    }).then(response=>response.json()).then(data => {
      console.log(`Success`,data);
    }).catch((error) => {
      console.log("ERROR: "+error)
    })
    setName("")
    setEmail("")
    setMessage("")
    console.log(name);
  }


    return (
        <section className={styles.contactScreen}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className={`${styles.contact} text-center my-3`}>Contact me
                        </h1>
                    </div>
                    <div className="col-md-12 mt-2 mb-4 ">
                        <p className={`${styles.contactAbout} col-md-6 `}>If you have an application you are interested in developing, a feature that you need built or a project that needs coding, I’d love to help with it.
                        </p>
                    </div>
                    <div className="col-md-12">
                        <form className={`${styles.form} text-center`}>
                            <input className={styles.inputName}  type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" /><br />
                            <input className={styles.inputMsg} placeholder="Email" value={email}  id="PhoneNumber" onChange={(e)=>setEmail(e.target.value)} /> <br />
                            <textarea className={styles.textarea}  id="Message" value={message} onChange={(e)=>setMessage(e.target.value)} rows="4" cols="25" placeholder="write your message here" >

                            </textarea><br />
                            <button className={styles.ContactBtn}  onClick={submitform} type="submit" >Get in Touch</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactScreen
