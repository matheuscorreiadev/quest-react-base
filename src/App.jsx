import './App.css';
import TransformedText from './components/Text/text.jsx';
import Button from './components/Button/button.jsx'

function App() {
  return (
    <div className="App">

      <TransformedText
        conteudo="olá devs, na máxima!"
        cor="goldenrod"
      />

      <Button/>

      <TransformedText
        conteudo="abaixo faça o download do meu currículo"
        cor="yellow"
      />

      <Button label="Baixar CV"/>
      
    </div>
  );
}

export default App;