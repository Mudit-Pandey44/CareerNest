// import { useState } from "react";

// const ResumeUpload = () => {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const maxSize = 10 * 1024 * 1024;

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     if (selectedFile.size > maxSize) {
//       alert("File size must be under 10MB");
//       e.target.value = "";
//       return;
//     }

//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert("Please select a file first");
//       return;
//     }

//     setUploading(true);

//     setTimeout(() => {
//       alert("Resume uploaded successfully!");
//       setUploading(false);
//     }, 2000);
//   };

//   return (
//     <div>
//       <label>Upload your resume (max 10MB)</label>

//       <input
//         type="file"
//         accept=".pdf,.doc,.docx"
//         disabled={uploading}
//         onChange={handleFileChange}
//       />

//       {file && <p>Selected: {file.name}</p>}

//       <button onClick={handleUpload} disabled={uploading}>
//         {uploading ? "Uploading..." : "Upload Resume"}
//       </button>
//     </div>
//   );
// };

// export default ResumeUpload;
