// Check.js
import React, { useState } from 'react';

const materialsData = [
  {
    id: 1,
    title: 'Math Notes',
    description: 'Comprehensive notes for algebra and calculus.',
    filename: 'math_notes.pdf',
    price: 10,
    imageUrl: 'https://via.placeholder.com/120x90?text=Math+Notes',
  },
  {
    id: 2,
    title: 'Physics Formulas',
    description: 'Important formulas for physics exams.',
    filename: 'physics_formulas.pdf',
    price: 8,
    imageUrl: 'https://via.placeholder.com/120x90?text=Physics+Formulas',
  },
  {
    id: 3,
    title: 'Chemistry Guide',
    description: 'Study guide covering key chemistry concepts.',
    filename: 'chemistry_guide.pdf',
    price: 12,
    imageUrl: 'https://via.placeholder.com/120x90?text=Chemistry+Guide',
  },
];

function Check() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [purchasedMaterials, setPurchasedMaterials] = useState([]);

  const handleSelect = (material) => {
    setSelectedMaterial(material);
  };

  const handlePayNow = () => {
    if (!selectedMaterial) return;

    if (!purchasedMaterials.includes(selectedMaterial.id)) {
      setPurchasedMaterials((prev) => [...prev, selectedMaterial.id]);
    }
    alert(`Payment successful for: ${selectedMaterial.title}, Amount: $${selectedMaterial.price}`);
  };

  return (
    <div style={styles.container}>
      <h2>Available Study Materials</h2>

      {purchasedMaterials.length > 0 && (
        <div style={styles.purchasedSummary}>
          <strong>Purchased Materials:</strong>{' '}
          {purchasedMaterials
            .map((id) => materialsData.find((mat) => mat.id === id)?.title)
            .join(', ')}
        </div>
      )}

      <div style={styles.content}>
        <ul style={styles.list}>
          {materialsData.map((material) => {
            const isPurchased = purchasedMaterials.includes(material.id);
            const isSelected = selectedMaterial?.id === material.id;
            return (
              <li
                key={material.id}
                style={{
                  ...styles.listItem,
                  backgroundColor: isSelected ? '#d3f4ff' : '#fff',
                  opacity: isPurchased ? 0.6 : 1,
                  position: 'relative',
                }}
                onClick={() => handleSelect(material)}
              >
                <img src={material.imageUrl} alt={material.title} style={styles.thumbnail} />
                <div>
                  <strong>{material.title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
                    ${material.price}
                  </p>
                </div>
                {isPurchased && (
                  <span style={styles.purchasedBadge}>Purchased ✓</span>
                )}
              </li>
            );
          })}
        </ul>

        {selectedMaterial ? (
          <div style={styles.details}>
            <h3>{selectedMaterial.title}</h3>
            <img
              src={selectedMaterial.imageUrl}
              alt={selectedMaterial.title}
              style={styles.detailImage}
            />
            <p>{selectedMaterial.description}</p>
            <p><strong>File:</strong> {selectedMaterial.filename}</p>
            <p><strong>Price:</strong> ${selectedMaterial.price}</p>
            <button
              onClick={handlePayNow}
              style={{
                ...styles.payButton,
                backgroundColor: purchasedMaterials.includes(selectedMaterial.id) ? 'gray' : '#28a745',
                cursor: purchasedMaterials.includes(selectedMaterial.id) ? 'not-allowed' : 'pointer',
              }}
              disabled={purchasedMaterials.includes(selectedMaterial.id)}
            >
              {purchasedMaterials.includes(selectedMaterial.id) ? 'Already Purchased' : 'Pay Now'}
            </button>
          </div>
        ) : (
          <div style={styles.detailsPlaceholder}>Select a material to see details</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: 'auto',
  },
  purchasedSummary: {
    marginBottom: '1rem',
    fontSize: '1rem',
    color: '#2a7a2a',
  },
  content: {
    display: 'flex',
    gap: '2rem',
  },
  list: {
    width: '40%',
    listStyle: 'none',
    padding: 0,
    border: '1px solid #ccc',
    borderRadius: '6px',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '10px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  },
  thumbnail: {
    width: '80px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  purchasedBadge: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '3px 8px',
    fontSize: '0.75rem',
    borderRadius: '12px',
  },
  details: {
    width: '60%',
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
  },
  detailImage: {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'contain',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  detailsPlaceholder: {
    width: '60%',
    padding: '1rem',
    fontStyle: 'italic',
    color: '#666',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  payButton: {
    marginTop: '1rem',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Check;
