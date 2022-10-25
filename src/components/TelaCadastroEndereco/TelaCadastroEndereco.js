import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

export function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro de endereço:</h1>
      <Form>
        <StyledLabel>
          endereço:
          <Input />
        </StyledLabel>
        <StyledLabel>
          número da residência:
          <Input />
        </StyledLabel>
        <StyledLabel htmlFor="">telefone:</StyledLabel>
        <StyledLabel htmlFor="">
          complemento:
          <Input id="" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela()}>Finalizar Cadastro</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(2)}>Retornar</BackToLoginButton>
          
      </Form>
    </FormContainer>
  );
}
