import React, { useState } from 'react';

function Upload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    // Here, you would normally send data to the backend using FormData
    console.log('Uploading:', { title, description, file });
    setSuccess(true);

    // Reset form
    setTitle('');
    setDescription('');
    setFile(null);
  };

  return (
    <div style={styles.container}>
      <h2>Upload Study Material</h2>
      {success && <p style={styles.success}>Material uploaded successfully!</p>}
      <form onSubmit={handleSubmit} style={styles.form} className="mt-5">
        <div style={styles.inputGroup}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Choose File</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Upload</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  success: {
    color: 'green',
    marginBottom: '1rem',
  },
};

export default Upload;
