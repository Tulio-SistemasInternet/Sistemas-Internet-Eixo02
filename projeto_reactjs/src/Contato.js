import BarraMenu from './BarraMenu';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function Contato() {
    return (
      <div>
        <BarraMenu/>
        <Container>
          <h4>Entre em contato pelo telefone ou prencha os campos abaixo</h4>
            <form>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" id="txtNome" placeholder="Digite seu nome" />
              </Form.Group>
              
              <Form.Group>
                <Form.Label>E-amil</Form.Label>
                <Form.Control type="email" id="txtEmail" placeholder="nome@exemplo.com" />
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control type="textarea" id="txtMsg" rows={3} />
              </Form.Group>
              <br/>
              <Button onClick={enviarFormulario}>Enviar</Button>
            </form>
        </Container>
      </div>
      



    );
  }
  function enviarFormulario(){
    var nome = document.getElementById("txtNome").value;
    var email = document.getElementById("txtEmail").value;
    var msg = document.getElementById("txtmsg").value;

    alert("Nome: "+nome+
          "E-mail: "+email+
          "Mensagem: "+msg);
  }
  export default Contato;