import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchBrand, setSearchBrand] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    const res = await axios.get(`/api/products`, {
      params: { brand: searchBrand },
    });
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [searchBrand]);

  const handleSave = async (data) => {
    if (data.id) {
      await axios.put(`/api/products/${data.id}`, data);
    } else {
      await axios.post(`/api/products`, data);
    }
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" style={{
      backgroundImage:
        "linear-gradient(to right top, #013845, #054a59, #0c5d6f, #147085, #1b849b)",
    }}>
      <div className="max-w-6xl mx-auto bg-white px-6 py-12 rounded-2xl min-h-[calc(100vh-5rem)]">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Daftar Produk Kendaraan
        </h1>

        <div className="flex flex-col md:flex-row gap-2 mb-4 justify-between mt-12">
          <input
            type="text"
            placeholder="Cari berdasarkan merek"
            value={searchBrand}
            onChange={(e) => setSearchBrand(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-full w-full max-w-sm"
          />
          <button
            onClick={() => {
              setEditingProduct(null);
              setShowForm(true);
            }}
            className="bg-[#013845] text-white px-8 py-2 rounded-full"
          >
            + Tambah Produk
          </button>
        </div>
        
        <div class="overflow-x-auto">
        <table className="w-full table-auto border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Merek</th>
              <th className="p-2 border">Jenis</th>
              <th className="p-2 border">Stok</th>
              <th className="p-2 border">Harga</th>
              <th className="p-2 border">Keterangan</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="border p-2">{p.id}</td>
                <td className="border p-2">{p.brand}</td>
                <td className="border p-2">{p.type}</td>
                <td className="border p-2">{p.stock}</td>
                <td className="border p-2">{p.price}</td>
                <td className="border p-2">{p.description}</td>
                <td className="border p-2 space-x-2 space-y-2">
                  <button
                    onClick={() => {
                      setEditingProduct(p);
                      setShowForm(true);
                    }}
                    className="border border-blue-400 px-3 py-1 rounded-full text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="border border-red-400 px-3 py-1 rounded-full text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Popup Modal */}
        {showForm && (
          <ProductForm
            initialData={editingProduct}
            onSave={handleSave}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
