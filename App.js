import { useState, React } from 'react';
import './App.css'
import { Mailer } from './mailer';
import { MdContactMail } from 'react-icons/md'
import { SlPeople } from 'react-icons/sl';
import { About } from './about';
import { SlClose } from 'react-icons/sl'

export default function App() {
    
    const [Open, setOpen] = useState(false);
    const [OpContForm, setContForm] = useState(false);
    const [showButt, setShowButton] = useState(true);
    const [showCont, setContactShow] = useState(true);

    const toggleButton = () => {
      setOpen(!Open);
      setShowButton(!showButt);
    }
    
    const toggleContac = () => {
      setContForm(!OpContForm);
      setContactShow(!showCont);
    }

    return (
      <>
      <div className="Placards">
      <h1 style={{textAlign: "center"}}>Placards 1-0-1</h1>
      <h2 style={{textAlign: "center"}} className="Article">El placard para vos está acá</h2>
    
    <ul style={{listStyleType:'none', display:'flex', padding:'8px'}}>
    {showButt && <button onClick={toggleButton}>Sobre nosotros
   <li><SlPeople/></li>
    </button>}
      {Open && <div className='About'><About/>
      <SlClose onClick={toggleButton}/> </div>}
      {showCont && <button onClick={toggleContac}>Comunicate con nosotros
     <li><MdContactMail/></li>
     </button>}
      {OpContForm && <div className='Contac' style={{}}><Mailer/>
      <SlClose onClick={toggleContac} /> </div>}
    
    </ul>
    <hr></hr>
   </div>
   </>
    );
}