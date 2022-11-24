import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { UseForm } from '../../hooks/useForm'

function MainPage() {
  const [form, onChangeForm] = UseForm({nome: "", idade: "", email: "", profissao:""})

  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

  // const [form, setForm] = useState({ nome: "", idade: "", email: "" })

  // const onChangeForm = (event) => {
  //       const { name, value } = event.target;
  //       const novoForm = { ...form, [name]: value };
  //       setForm(novoForm)
  // }
  
  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email}, profissao: ${form.profissao} `)
  }
  
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChangeForm}
          type="text"
          pattern='[A-Za-z]{3,}'
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          name='idade'
          value={form.idade}
          onChange={onChangeForm}
          type="number"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          name='email'
          value={form.email}
          onChange={onChangeForm}
          type="email"
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <label htmlFor="profissao">Profissão:</label>
         <Input 
          id="profissao"
          name='profissao'
          value={form.profissao}
          onChange={onChangeForm}
          type="text"
          required
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
