import app from '../src/app.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
const { expect } = chai;

chai.use(chaiHttp);


describe('Certificate Controller', () => {
  it('should create a new certificate', (done) => {
    chai.request(app)
      .post('/certificate')
      .send({ name: 'NodeJS Basics', recipient: 'John Doe', date: '2023-01-01' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name', 'NodeJS Basics');
        done();
      });
  });

  it('should return a certificate with a valid id', (done) => {
    chai.request(app)
      .get('/certificate/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name', 'NodeJS Basics');
        done();
  });
});

  it('should update a certificate with a valid id', (done) => {
    chai.request(app)
      .put('/certificate/1')
      .send({ name: 'NodeJS Advanced', recipient: 'John Doe', date: '2023-01-01' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name', 'NodeJS Advanced');
        done();
      });
  });

  it('should delete a certificate with a valid id', (done) => {
    chai.request(app)
      .delete('/certificate/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name', 'NodeJS Advanced');
        done();
      });
  });

  it('should return 404 for a non-existent certificate', (done) => {
    chai.request(app)
      .get('/certificate/999')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message', 'Certificate not found');
        done();
      });
  });
});
