import React, { useState, useEffect } from "react";

const ProductForm = ({ onClose, onSave, initialData }) => {
  const [product, setProduct] = useState({
    brand: "",
    type: "",
    stock: 0,
    price: 0,
    description: "",
  });

  useEffect(() => {
    if (initialData) setProduct(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6" >
        <h2 className="text-xl font-semibold mb-4">
          {initialData ? "Edit Produk" : "Tambah Produk"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Merek
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Merek"
              value={product.brand}
              onChange={handleChange}
              className="w-full border rounded-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jenis
            </label>
            <input
              type="text"
              name="type"
              placeholder="Jenis"
              value={product.type}
              onChange={handleChange}
              className="w-full border rounded-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stok
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Stok"
              value={product.stock}
              onChange={handleChange}
              className="w-full border rounded-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Harga
            </label>
            <input
              type="number"
              name="price"
              placeholder="Harga"
              value={product.price}
              onChange={handleChange}
              className="w-full border rounded-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Keterangan
            </label>
            <input
              type="text"
              name="description"
              placeholder="Keterangan"
              value={product.description}
              onChange={handleChange}
              className="w-full border rounded-full px-3 py-2"
            />
          </div>

          <div className="flex justify-between gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-full w-full"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#013845] text-white px-4 py-2 rounded-full w-full"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
