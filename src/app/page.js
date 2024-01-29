// import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Our_Services from "./components/Our_Services";
import OurProcess from "./components/OurProcess";
import OurStory from "./components/OurStory";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./page.css";


export default function Home() {
  return (
    <main >
     <div className='App_body'>
     <Header />
         <Our_Services/>
         <OurProcess/>
         <OurStory/>
         <ContactUs/>

      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="App">
//      <Navbar/>
//      <div className='App_body'>
//      <Header />
//          <Our_Services/>
//          <OurProcess/>
//          <OurStory/>
//          <ContactUs/>
//          <Footer/>
//          </div>
//     </main>
//   );
// }
