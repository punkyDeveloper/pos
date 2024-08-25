"use client";

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, FormControl, Badge, ListGroup, Form, InputGroup, Modal } from 'react-bootstrap';
import '../../assets/css/pos.css';

function VisualAgregarProductos() {
    const [productos, setProductos] = useState([
      {
        id: 1,
        nombre: "Camiseta Estampada",
        precio: 1200,
        talla: "M",
        color: "Rojo",
        inventario: 50,
        codigo: "1234567890123",
        imagen: "https://via.placeholder.com/150?text=Camiseta+Estampada"
    },
    {
        id: 2,
        nombre: "Jeans Slim Fit",
        precio: 2500,
        talla: "L",
        color: "Azul",
        inventario: 30,
        codigo: "2345678901234",
        imagen: "https://via.placeholder.com/150?text=Jeans+Slim+Fit"
    },
    {
        id: 3,
        nombre: "Chaqueta de Cuero",
        precio: 4500,
        talla: "XL",
        color: "Negro",
        inventario: 20,
        codigo: "3456789012345",
        imagen: "https://via.placeholder.com/150?text=Chaqueta+de+Cuero"
    },
    {
        id: 4,
        nombre: "Camisa de Manga Larga",
        precio: 1800,
        talla: "S",
        color: "Blanco",
        inventario: 40,
        codigo: "4567890123456",
        imagen: "https://via.placeholder.com/150?text=Camisa+de+Manga+Larga"
    },
    {
        id: 5,
        nombre: "Short Deportivo",
        precio: 900,
        talla: "M",
        color: "Gris",
        inventario: 60,
        codigo: "5678901234567",
        imagen: "https://via.placeholder.com/150?text=Short+Deportivo"
    },
    {
        id: 6,
        nombre: "Zapatos Casual",
        precio: 3500,
        talla: "42",
        color: "Marrón",
        inventario: 25,
        codigo: "6789012345678",
        imagen: "https://via.placeholder.com/150?text=Zapatos+Casual"
    }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.codigo.includes(searchTerm)
    );

    const handleCancel = () => {
        setShowModal(true);
    };

    const confirmCancel = () => {
        // Lógica para cancelar el pedido
        console.log("Pedido cancelado");
        setShowModal(false);
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container fluid className="">
            <Row className="mb-4">
                <Col md={8}>
                    {/* Barra de búsqueda */}
                    <InputGroup className="mb-4">
                        <FormControl
                            placeholder="Código, Referencia"
                            aria-label="Código, Referencia"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <Button variant="outline-secondary">Buscar</Button>
                    </InputGroup>
                </Col>
                <Col md={4} className="d-flex justify-content-end align-items-center">
                    <Button variant="danger" onClick={handleCancel}>Cancelar</Button>
                </Col>
            </Row>

            <Row>
                <Col md={8} className="overflow-auto" style={{ maxHeight: '80vh' }}>
                    {/* Productos filtrados */}
                    <Row>
                        {filteredProducts.map((producto) => (
                            <Col md={4} key={producto.id} className="mb-4">
                                <Card className="shadow-sm border-0">
                                <Card.Img variant="top" src={producto.imagen} />
                                    <Card.Body>
                                        <Card.Title className="mb-3">{producto.nombre}</Card.Title>
                                        <Card.Text className="text-muted">
                                            <strong>Precio:</strong> ${producto.precio.toLocaleString()}<br />
                                            <strong>Talla:</strong> {producto.talla}<br />
                                            <strong>Color:</strong> {producto.color}<br />
                                            <strong>Código:</strong> {producto.codigo}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <Badge bg={producto.inventario > 0 ? "success" : "danger"}>
                                                Inventario: {producto.inventario}
                                            </Badge>
                                            <FormControl
                                                type="number"
                                                defaultValue={1}
                                                className="text-center w-25"
                                                min="1"
                                                max={producto.inventario}
                                            />
                                        </div>
                                        <Button
                                            variant="outline-primary"
                                            className="w-100"
                                            disabled={producto.inventario === 0}
                                        >
                                            {producto.inventario > 0 ? "Agregar" : "Agotado"}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col md={4} className="position-sticky" style={{ top: '0' }}>
                    {/* Resumen de la Venta */}
                    <Form>
                        <Form.Group className="mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <Form.Label>Cliente: <span>venta tienda</span></Form.Label>
                                <Button variant="outline-secondary" size="sm">Cambiar</Button>
                            </div>
                            <div>C.C. 11111111111111</div>
                        </Form.Group>

                        <ListGroup>
                            <ListGroup.Item>Subtotal: $0</ListGroup.Item>
                            <ListGroup.Item>Impuesto Bolsa: $0</ListGroup.Item>
                            <ListGroup.Item>Descuento: $0</ListGroup.Item>
                            <ListGroup.Item>Total: $0</ListGroup.Item>
                        </ListGroup>
                    </Form>
                </Col>
            </Row>

            {/* Modal de confirmación */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas cancelar el pedido?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={confirmCancel}>
                        Sí, cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default VisualAgregarProductos;
