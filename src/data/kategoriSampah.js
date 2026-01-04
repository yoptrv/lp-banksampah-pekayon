export const kategoriSampah = {
  kering: {
    title: "Sampah Kering",
    description: "Plastik, kertas, dan logam",
    items: [
      {
        name: "Botol Plastik PET",
        detail: "Botol air mineral dan minuman ringan",
        price: 3500,
        unit: "kg",
      },
      {
        name: "Plastik Campur",
        detail: "Plastik kemasan rumah tangga",
        price: 2500,
        unit: "kg",
      },
      {
        name: "Kertas Koran",
        detail: "Koran bekas dan majalah",
        price: 1800,
        unit: "kg",
      },
      {
        name: "Kardus",
        detail: "Dus karton bekas",
        price: 2200,
        unit: "kg",
      },
      {
        name: "Kaleng Aluminium",
        detail: "Kaleng minuman aluminium",
        price: 12000,
        unit: "kg",
      },
      {
        name: "Besi",
        detail: "Besi tua dan potongan logam",
        price: 4000,
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
        price: 0,
        unit: "kg",
      },
      {
        name: "Kulit Buah",
        detail: "Kulit pisang, jeruk, apel",
        price: 0,
        unit: "kg",
      },
      {
        name: "Daun Kering",
        detail: "Daun dari pekarangan",
        price: 0,
        unit: "kg",
      },
      {
        name: "Ampas Kopi",
        detail: "Ampas kopi rumah tangga",
        price: 0,
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
        price: 15000,
        unit: "unit",
      },
      {
        name: "Laptop Rusak",
        detail: "Laptop mati total / tidak terpakai",
        price: 50000,
        unit: "unit",
      },
      {
        name: "Charger Bekas",
        detail: "Adaptor dan kabel charger",
        price: 5000,
        unit: "unit",
      },
      {
        name: "Remote TV",
        detail: "Remote rusak atau tidak terpakai",
        price: 3000,
        unit: "unit",
      },
      {
        name: "Kipas Angin Rusak",
        detail: "Kipas angin mati atau rusak",
        price: 25000,
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
        price: 1200,
        unit: "kg",
      },
      {
        name: "Botol Kaca Warna",
        detail: "Botol kecap dan saus",
        price: 1000,
        unit: "kg",
      },
      {
        name: "Pecahan Kaca",
        detail: "Pecahan kaca rumah tangga",
        price: 700,
        unit: "kg",
      },
    ],
    warning:
      "Harap pastikan kaca dibungkus dengan aman untuk menghindari cedera.",
  },
};
