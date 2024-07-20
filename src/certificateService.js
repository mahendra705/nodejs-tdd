const certificates = [];

const getNextId = () => {
  return certificates.length ? certificates[certificates.length - 1].id + 1 : 1;
};

export const createCertificate = (data) => {
  const newCertificate = { id: getNextId(), ...data };
  certificates.push(newCertificate);
  return newCertificate;
};

export const getCertificate = (id) => {
  return certificates.find(cert => cert.id === parseInt(id, 10));
};

export const updateCertificate = (id, data) => {
  const index = certificates.findIndex(cert => cert.id === parseInt(id, 10));
  if (index !== -1) {
    certificates[index] = { ...certificates[index], ...data };
    return certificates[index];
  }
  return null;
};

export const deleteCertificate = (id) => {
  const index = certificates.findIndex(cert => cert.id === parseInt(id, 10));
  if (index !== -1) {
    const deletedCertificate = certificates.splice(index, 1);
    return deletedCertificate[0];
  }
  return null;
};
