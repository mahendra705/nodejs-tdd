import express from 'express';
import { createCertificate, getCertificate, updateCertificate, deleteCertificate } from './certificateController.js';

const app = express();

app.use(express.json());

app.post('/certificate', createCertificate);
app.get('/certificate/:id', getCertificate);
app.put('/certificate/:id', updateCertificate);
app.delete('/certificate/:id', deleteCertificate);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
