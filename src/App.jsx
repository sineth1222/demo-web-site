import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
//import Test from "./Test";
//import Navbar from "./components/navbar/Navbar";
//import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section className="h1">
      <Navbar/>
      <h1>EXTREME PANAROMIC</h1>
      <h2>LANDSCAPS</h2>
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
    {/*<Test/>
    <Test/>*/}
  </div>;

};

export default App;
