import "./App.css";
import Header from "./components/header";
import ItemListContainer from "./components/itemlistcontainer/itemlistcontainer";

function App() {
    return (
        <>
            <Header logo="Keeb me!" />
            <ItemListContainer 
                itemTitleOne   = "SP-Star Meteor White"     itemPriceOne   = "231" itemStockOne   = "100"
                itemTitleTwo   = "Novelkeys Cream Linear"   itemPriceTwo   = "247" itemStockTwo   = "50"
                itemTitleThree = "C³Equalz X TKC Tangerine" itemPriceThree = "260" itemStockThree = "25"
            />
        </>
    );
}

export default App;
