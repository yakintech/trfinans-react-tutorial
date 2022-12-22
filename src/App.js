import CategoryDetail from "./propSample/CategoryDetail";
import ParentComponent from "./propSample/ParentComponent";
import ProductDetail from "./propSample/ProductDetail"
import SupplierDetail from "./propSample/SupplierDetail";
import UserDetail from "./propSample/UserDetail"
import StateArraySample from "./stateSample/StateArraySample";
import StateArraySample2 from "./stateSample/StateArraySample2";
import StateSample from "./stateSample/StateSample";
import StateSample2 from "./stateSample/StateSample2";
import SwitchStatusSample from "./stateSample/SwitchStatusSample";

function App() {

  let productPoints = [3, 5, 1, 9, 2];


  const hello = () => {
    alert('Hello React Props!')
  }

  return <>
      <SwitchStatusSample/>
    {/* <SupplierDetail companyName='Apple' contactName='Ali' year={2000} />
    <hr></hr>
    <CategoryDetail hello={hello} />
    <hr></hr>
    <ParentComponent title='TR Finans' />
    <hr></hr>
    <ProductDetail name='IPhone' price={2000} points={productPoints} />
    <hr></hr>
    <UserDetail name='Çağatay' surname='Yıldız' email='cagatay@mail.com' age={18} />
    <hr></hr>
    <UserDetail name='Aykut' surname='Aslan' email='aykut@mail.com' age={18} /> */}
  </>
}

export default App