import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { textoPadraoState } from '../../../atoms/texto/selectors';
import { Typography, Card, Row, Col } from 'antd';

const { Title } = Typography;

export default function ListagemPortifolios() {

    const textoPadrao = useRecoilValue(textoPadraoState);

    useEffect(() => {
        console.log(textoPadrao);
    })

    return (
        <>
            <Row>
            {textoPadrao.map(item => {
                return (
                    <Col span={8}>
                        <Card title={item.title} bordered={false} style={{ width: 300, marginBottom: 10 }}>
                            <p>{item.description}</p>
                            <p>{item.author}</p>
                            <p>{item.created_at}</p>
                        </Card>
                    </Col>
                )
            })}
            </Row>
        </>
    );
}