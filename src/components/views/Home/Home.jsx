import HomeInfoBox from "./homeInfoBox/homeInfoBox";
import ServicesBox from "./ServicesBox/ServicesBox";
import InsuranceBox from "./InsurancePlan/InsurancePLan";
import ClimateBox from "./Climate/Climate";
import Navbar from "./NavBar/NavBar";
const Home = () => {
  return ( 
    <div>
      <Navbar/>
      <HomeInfoBox></HomeInfoBox>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <InsuranceBox/>
            <ServicesBox/>
          </div>
          <div className="col-2"><ClimateBox/></div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;