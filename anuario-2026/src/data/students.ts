export interface Student {
  name: string;
  profession: string;
  photo?: string;
}

const studentPhotos = import.meta.glob<string>("../../imagens/*", {
  eager: true,
  import: "default",
  query: "?url",
});

const getPhotoUrl = (filename: string) => studentPhotos[`../../imagens/${filename}`];

export const students: Student[] = [
  { name: "Alison Fidelis", profession: "Odontologia", photo: getPhotoUrl("Alison.jpeg") },
  { name: "Anna Beatriz", profession: "Engenharia Civil", photo: getPhotoUrl("Anna.jpeg") },
  { name: "Arthur Cesar", profession: "Engenharia de Software", photo: getPhotoUrl("Arthur.jpeg") },
  { name: "Cesar Augusto", profession: "Direito", photo: getPhotoUrl("Cesar.jpeg") },
  { name: "Davi Kenji", profession: "Engenharia de Software" },
  { name: "Eric Rodrigues", profession: "Medicina" },
  { name: "Joao Ricardo", profession: "Engenharia de Software" },
  { name: "Kauan Augusto", profession: "Engenharia de Software", photo: getPhotoUrl("Kauan.jpeg") },
  { name: "Luan Sarno", profession: "Engenharia Mecânica" },
  { name: "Luís Felipe", profession: "Engenharia de Software", photo: getPhotoUrl("Luis.jpeg") },
  { name: "Luiggi Grecco", profession: "Tecnologia da Informação", photo: getPhotoUrl("Luiggi.jpeg") },
  { name: "Manuelle Germano", profession: "Nutrição", photo: getPhotoUrl("Manuelle.jpeg") },
  { name: "Marcos Vinicius", profession: "Engenharia de Software", photo: getPhotoUrl("Marcos.jpeg") },
  { name: "Miguel Braga", profession: "Desenvolvimento de Software", photo: getPhotoUrl("MiguelB.jpeg") },
  { name: "Miguel Sarti", profession: "Engenharia de Software", photo: getPhotoUrl("MiguelS.jpeg") },
  { name: "Rebeca Gonçalves", profession: "Engenharia de Software" },
  { name: "Vitor Gabriel", profession: "Ciências Biológicas", photo: getPhotoUrl("VitorG.jpeg") },
  { name: "Victor De Melo", profession: "Engenharia de Software", photo: getPhotoUrl("Victor de Melo.jpeg") },
  { name: "Yasmin Alves", profession: "Farmácia", photo: getPhotoUrl("Yasmin.jpeg") },
  { name: "Ygor Irineu", profession: "Engenharia de Software" }
].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
