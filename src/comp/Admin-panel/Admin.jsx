import React, { useState } from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchProducts, updateProduct, addProduct } from '../redux/Admin/AdminAction';
import './Admin.scss';

const Admin = ({ collections, updateProduct, addProduct }) => {
  const [editProduct, setEditProduct] = useState(null);
  const [editedFields, setEditedFields] = useState({
    name: '',
    imageUrl: '',
    price: 0,
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    price: 0,
    collectionType: ''
  });

  const handleUpdateProduct = () => {
    if (editProduct) {
      const collectionType = collections.find((collection) =>
        collection.items.some((item) => item.id === editProduct.id)
      ).title;
      updateProduct(collectionType, { ...editProduct, ...editedFields });
      setEditProduct(null);
      setEditedFields({ name: '', imageUrl: '', price: 0 });
    }
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.collectionType) {
      const newProductId = new Date().getTime(); // Simple ID generation
      addProduct(newProduct.collectionType, { id: newProductId, ...newProduct });
      setNewProduct({ name: '', imageUrl: '', price: 0, collectionType: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditedFields({ ...editedFields, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <motion.div
      className="admin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Admin Dashboard</h1>
      <motion.div
        className="product-list"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {collections &&
          collections.map((collection) =>
            collection.items.map((product) => (
              <motion.div
                key={product.id}
                className={`product-item ${product.hidden ? 'hidden' : ''}`}
                whileHover={{ scale: 1.05 }}
              >
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Collection Type: {collection.title}</p>
                <button onClick={() => setEditProduct(product)}>Edit</button>
                <button onClick={() => updateProduct(collection.title, { ...product, hidden: true })}>Hide</button>
              </motion.div>
            ))
          )}
      </motion.div>

      {editProduct && (
        <motion.div
          className="edit-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Edit Product</h2>
          <input
            type="text"
            name="name"
            value={editedFields.name}
            placeholder="Product Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="imageUrl"
            value={editedFields.imageUrl}
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={editedFields.price}
            placeholder="Price"
            onChange={handleChange}
          />
          <button onClick={handleUpdateProduct}>Save Changes</button>
        </motion.div>
      )}

      <motion.div
        className="add-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Add New Product</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          placeholder="Product Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          value={newProduct.imageUrl}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <select
          name="collectionType"
          value={newProduct.collectionType}
          onChange={handleChange}
        >
          <option value="" disabled>Select Collection Type</option>
          <option value="hats">Hats</option>
          <option value="sneakers">Sneakers</option>
          <option value="mens">Men's Jackets</option>
          <option value="womens">Women's Jackets</option>
        </select>
        <button onClick={handleAddProduct}>Add Product</button>
      </motion.div>
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});

const mapDispatchToProps = {
  fetchProducts,
  updateProduct,
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
