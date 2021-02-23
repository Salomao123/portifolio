import React, {useState, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { textoState } from '../../atoms/texto';
import Cadastrar from '../../components/formularios/cadastrar';
import MeusPortifolios from '../MeusPortifolios';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ApiConfig from '../../config/ApiConfig';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Portifolio(){

    const [ conteudo, setConteudo ] = useState();
    const [, setPortifolios] = useRecoilState(textoState);

    const handleSetContent = (position) => {
        setConteudo(position);
    }

    const handlePortifolios = async () => {
        const response = await ApiConfig.get("/portifolios/");
        setPortifolios(response.data);
    }

    const handleContent = () => {
        switch (conteudo) {
            case 1: 
                return (<Cadastrar/>);
            case 2:
                return (<MeusPortifolios />);
            default:
                return (<Cadastrar/>);
        }
    }

    return (
        <Layout>
            <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Salo.io</Menu.Item>  
            </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Meus Portifólios">
                        <Menu.Item onClick={() => handleSetContent(1)} key="1">Criar Portifólio</Menu.Item>
                            <Menu.Item onClick={() => {
                                handleSetContent(2);
                                handlePortifolios();
                            }} key="2">Meus Portifolios</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Meus portifólios</Breadcrumb.Item>
                        <Breadcrumb.Item>Criar Portifólio</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            
                            {handleContent()}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}