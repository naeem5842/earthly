import './App.css';
import AnimatedHeader from './components/AnimatedHeader/AnimatedHeader';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
        <AnimatedHeader />
        <Products />
        <Features />
        <Footer />
      
    </div>
  );
}

export default App;
