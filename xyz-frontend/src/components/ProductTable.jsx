import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => (
  <table className="min-w-full table-auto border border-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 border">ID</th>
        <th className="px-4 py-2 border">Merek</th>
        <th className="px-4 py-2 border">Jenis</th>
        <th className="px-4 py-2 border">Stok</th>
        <th className="px-4 py-2 border">Harga</th>
        <th className="px-4 py-2 border">Keterangan</th>
        <th className="px-4 py-2 border">Aksi</th>
      </tr>
    </thead>
    <tbody>
      {products.map(p => (
        <tr key={p.id}>
          <td className="px-4 py-2 border text-center">{p.id}</td>
          <td className="px-4 py-2 border">{p.brand}</td>
          <td className="px-4 py-2 border">{p.type}</td>
          <td className="px-4 py-2 border text-right">{p.stock}</td>
          <td className="px-4 py-2 border text-right">{p.price}</td>
          <td className="px-4 py-2 border text-center">{p.description}</td>
          <td className="px-4 py-2 border text-center">
            <div className="flex gap-2 justify-center">
              <button onClick={() => onEdit(p)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
              <button onClick={() => onDelete(p.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductTable;
