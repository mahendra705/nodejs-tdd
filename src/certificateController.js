import { createCertificate as createCert, getCertificate as getCert, updateCertificate as updateCert, deleteCertificate as deleteCert } from './certificateService.js';
import { validateCertificate } from './certificateValidation.js';

export const createCertificate = (req, res) => {
  const { error } = validateCertificate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const newCertificate = createCert(req.body);
  res.status(201).json(newCertificate);
};

export const getCertificate = (req, res) => {
  const certificate = getCert(req.params.id);
  if (certificate) {
    res.status(200).json(certificate);
  } else {
    res.status(404).json({ message: 'Certificate not found' });
  }
};

export const updateCertificate = (req, res) => {
  const { error } = validateCertificate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const updatedCertificate = updateCert(req.params.id, req.body);
  if (updatedCertificate) {
    res.status(200).json(updatedCertificate);
  } else {
    res.status(404).json({ message: 'Certificate not found' });
  }
};

export const deleteCertificate = (req, res) => {
  const deletedCertificate = deleteCert(req.params.id);
  if (deletedCertificate) {
    res.status(200).json(deletedCertificate);
  } else {
    res.status(404).json({ message: 'Certificate not found' });
  }
};
