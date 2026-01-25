export const kategoriSampahBase = {
  kering: {
    title: "Sampah Kering",
    description: "Plastik, kertas, dan logam",
    items: [
      {
        name: "Botol Plastik PET",
        detail: "Botol air mineral dan minuman ringan",
        price: "-",
        unit: "kg",
      },
      {
        name: "Plastik Campur",
        detail: "Plastik kemasan rumah tangga",
        price: "-",
        unit: "kg",
      },
      {
        name: "Kertas Koran",
        detail: "Koran bekas dan majalah",
        price: "-",
        unit: "kg",
      },
      { name: "Kardus", detail: "Dus karton bekas", price: "-", unit: "kg" },
      {
        name: "Kaleng Aluminium",
        detail: "Kaleng minuman aluminium",
        price: "-",
        unit: "kg",
      },
      {
        name: "Besi",
        detail: "Besi tua dan potongan logam",
        price: "-",
        unit: "kg",
      },
    ],
  },

  basah: {
    title: "Sampah Basah",
    description: "Sisa makanan dan sampah organik",
    items: [
      {
        name: "Sisa Makanan",
        detail: "Nasi, sayur, dan lauk sisa",
        price: "-",
        unit: "kg",
      },
      {
        name: "Kulit Buah",
        detail: "Kulit pisang, jeruk, apel",
        price: "-",
        unit: "kg",
      },
      {
        name: "Daun Kering",
        detail: "Daun dari pekarangan",
        price: "-",
        unit: "kg",
      },
      {
        name: "Ampas Kopi",
        detail: "Ampas kopi rumah tangga",
        price: "-",
        unit: "kg",
      },
    ],
    note: "Sampah basah tidak memiliki nilai jual, namun dapat diolah menjadi kompos.",
  },

  elektronik: {
    title: "Sampah Elektronik",
    description: "Barang elektronik bekas",
    items: [
      {
        name: "Handphone Rusak",
        detail: "HP mati atau rusak",
        price: "-",
        unit: "unit",
      },
      {
        name: "Laptop Rusak",
        detail: "Laptop mati total / tidak terpakai",
        price: "-",
        unit: "unit",
      },
      {
        name: "Charger Bekas",
        detail: "Adaptor dan kabel charger",
        price: "-",
        unit: "unit",
      },
      {
        name: "Remote TV",
        detail: "Remote rusak atau tidak terpakai",
        price: "-",
        unit: "unit",
      },
      {
        name: "Kipas Angin Rusak",
        detail: "Kipas angin mati atau rusak",
        price: "-",
        unit: "unit",
      },
    ],
  },

  kaca: {
    title: "Sampah Kaca",
    description: "Botol dan pecahan kaca",
    items: [
      {
        name: "Botol Kaca Bening",
        detail: "Botol sirup dan minuman",
        price: "-",
        unit: "kg",
      },
      {
        name: "Botol Kaca Warna",
        detail: "Botol kecap dan saus",
        price: "-",
        unit: "kg",
      },
      {
        name: "Pecahan Kaca",
        detail: "Pecahan kaca rumah tangga",
        price: "-",
        unit: "kg",
      },
    ],
    warning:
      "Harap pastikan kaca dibungkus dengan aman untuk menghindari cedera.",
  },
};

// =========================================================
// Fungsi untuk menggabungkan harga API ke data statis
// =========================================================
export function mergeKategoriSampah(apiData) {
  const result = JSON.parse(JSON.stringify(kategoriSampahBase)); // clone

  Object.keys(result).forEach((kategori) => {
    result[kategori].items = result[kategori].items.map((item, index) => ({
      ...item,
      price: apiData?.[kategori]?.[index]?.price ?? "-", // fallback "-"
    }));
  });

  return result;
}
