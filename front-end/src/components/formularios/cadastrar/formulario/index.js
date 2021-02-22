import React, {useState} from 'react';

import { 
    Form,
    Typography,
    Input,
    DatePicker,
    Button
} from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Formulario = () => {

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [autor, setAutor] = useState();
    const [dtCriacao, setDtCriacao] = useState();
    const [valueDate, setValueDates] = useState();

    const dateFormat = "DD/MM/YYYY";

     const handleSubmit = async (event) => {
       event.preventDefault();

        const data={
          title: nome,
          description: descricao,
          author: autor,
          created_at: dtCriacao
        };

        console.log(data);

        //listar todos os portifólios: ok !
        //await fetch('http://localhost:8080/portifolios/').then(response => response.json()).then(data => console.log(data))

        await fetch('http://localhost:8080/portifolios/save', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => console.log(data));

    }

    const handleDatePicker = (date, dateString) => {
        setDtCriacao(dateString);
        setValueDates(date)
    }

    return (
        <>
        
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal">

              {dtCriacao}

        <Typography>
            <Title level={4}>Cadastrar um novo portifólio </Title>
        </Typography>
          
          <Form.Item label="Título do projeto">
            <Input name="nome" placeholder="Ex: GAECO - Combate ao Crime Organizado" onChange={(value) => setNome(value.target.value)} value={nome} />
          </Form.Item>
          <Form.Item label="Descrição">
            <TextArea name="descricao" placeholder="Conte todas as especificações do seu projeto. Não deixe passar nada! :)" onChange={(value) => setDescricao(value.target.value)} value={descricao}/>
          </Form.Item>
          <Form.Item label="Criador do projeto">
            <Input name="autor" placeholder="Ex: Salomão Do Nascimento Batista" onChange={(value) => setAutor(value.target.value)} value={autor} />
          </Form.Item>
         
          <Form.Item label="Data de criação">
            <DatePicker 
                name="dtCriacao" 
                placeholder="2020-02-22" 
                onChange={handleDatePicker}
                value={valueDate}
            />
          </Form.Item>

            <Button shape="round" type="primary" onClick={handleSubmit}>Salvar</Button>    
        </Form>
      </>
    );
}

export default Formulario;