type StatusMahasiswa = "aktif" | "cuti" | "lulus";

interface Mahasiswa {
  nim: string;
  nama: string;
  semester: number;
  status: StatusMahasiswa;
  email?: string;
}

function getFirstElement<T>(data: T[]): T | undefined {
  return data[0];
}

const daftarMahasiswa: Mahasiswa[] = [
  { nim: "1247050064", nama: "Ferdinan", semester: 5, status: "aktif" },
  { nim: "1237050064", nama: "Rafiq", semester: 7, status: "cuti" },
];

// Akses Environment Variable
const appName = import.meta.env.VITE_APP_NAME || "Portal Mahasiswa";
const mahasiswaPertama = getFirstElement(daftarMahasiswa);

// Tampilkan ke HTML
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>${appName}</h1>
    <p>Mahasiswa Pertama: ${mahasiswaPertama?.nama} (${mahasiswaPertama?.status})</p>
  </div>
`;
