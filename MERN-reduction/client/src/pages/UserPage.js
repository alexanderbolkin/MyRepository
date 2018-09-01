import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';

const tableTypes = ['hover'];

const TablePage = () => {
  return (
    <Page
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage">
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{tableType || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType]: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>email</th>
                            <th>password</th>
                            <th>edit</th>
                            <th>delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            <td><Button color='primary'>Edit</Button></td>
                            <td><Button color='danger'>delete</Button></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Thornton</td>
                            <td>@mdo</td>
                            <td><Button color='primary'>Edit</Button></td>
                            <td><Button color='danger'>delete</Button></td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>the Bird</td>
                            <td>@mdo</td>
                            <td><Button color='primary'>Edit</Button></td>
                            <td><Button color='danger'>delete</Button></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </Page>
  );
};

export default TablePage;
