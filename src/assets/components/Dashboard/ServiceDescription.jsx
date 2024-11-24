// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ServiceDescription = () => {
//   const [services, setServices] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     location: "",
//     image: null, // File upload
//   });

//   const fetchServices = async () => {
//     const token = localStorage.getItem("Token");
//     if (!token) {
//       toast.error("Authentication token not found. Please log in again.");
//       return;
//     }

//     toast.info("Loading your services...");
//     try {
//       const response = await fetch("https://servicehub-api.onrender.com/users/me/services", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setServices(data);
//         toast.success("Services loaded successfully!");
//       } else {
//         toast.error("Failed to load services.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch services:", error);
//       toast.error("Error fetching services.");
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("Token");
//     if (!token) {
//       toast.error("Authentication token not found. Please log in again.");
//       return;
//     }

//     const serviceData = new FormData();
//     Object.keys(formData).forEach((key) => {
//       serviceData.append(key, formData[key]);
//     });

//     toast.info("Adding service...");
//     try {
//       const response = await fetch("https://servicehub-api.onrender.com/services", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: serviceData,
//       });

//       if (response.ok) {
//         fetchServices();
//         setFormData({
//           title: "",
//           description: "",
//           price: "",
//           category: "",
//           location: "",
//           image: null,
//         });
//         toast.success("Service added successfully!");
//       } else {
//         toast.error("Failed to add service.");
//       }
//     } catch (error) {
//       console.error("Error adding service:", error);
//       toast.error("Error adding service.");
//     }
//   };

//   const handleDelete = async (serviceId) => {
//     const token = localStorage.getItem("Token");
//     if (!token) {
//       toast.error("Authentication token not found. Please log in again.");
//       return;
//     }

//     toast.info("Deleting service...");
//     try {
//       const response = await fetch(`http://localhost:3200/services/${serviceId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         fetchServices();
//         toast.success("Service deleted successfully!");
//       } else {
//         toast.error("Failed to delete service.");
//       }
//     } catch (error) {
//       console.error("Error deleting service:", error);
//       toast.error("Error deleting service.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center py-10 px-4" style={{ backgroundImage: `url(/images/vintage.jpg)` }}>
//       <div className="bg-black bg-opacity-50 min-h-screen py-10 px-4">
//         <ToastContainer />
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-3xl text-white font-bold text-center mb-6">Manage Your Services</h2>
//           <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-4">
//             <h3 className="text-xl text-[#6D4C41] font-semibold mb-4">Add a New Service</h3>
//             <div>
//               <label className="block text-gray-700">Service Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded text-black"
//               ></textarea>
//             </div>
//             <div>
//               <label className="block text-gray-700">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 onChange={handleFileChange}
//                 className="w-full p-2 border rounded text-black"
//               />
//             </div>
//             <button type="submit" className="w-full bg-[#6D4C41] text-white py-2 rounded">
//               Add Service
//             </button>
//           </form>

//           <div className="mt-6">
//             <h3 className="text-xl text-white font-semibold mb-4">Your Services</h3>
//             <ul>
//               {services.map((service) => (
//                 <li key={service.id} className="bg-white p-4 rounded shadow mb-4 flex justify-between">
//                   <div>
//                     <h4 className="font-bold text-lg">{service.title}</h4>
//                     <p>{service.description}</p>
//                     <p className="text-gray-500">${service.price}</p>
//                   </div>
//                   <button
//                     onClick={() => handleDelete(service.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDescription;
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDescription = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    image: null, // File upload
  });

  const fetchServices = async () => {
    toast.info("Loading your services...");
    try {
      const response = await fetch("https://servicehub-api.onrender.com/services");

      if (response.ok) {
        const data = await response.json();
        setServices(data);
        toast.success("Services loaded successfully!");
      } else {
        toast.error("Failed to load services.");
      }
    } catch (error) {
      console.error("Failed to fetch services:", error);
      toast.error("Error fetching services.");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = new FormData();
    Object.keys(formData).forEach((key) => {
      serviceData.append(key, formData[key]);
    });

    toast.info("Adding service...");
    try {
      const response = await fetch("https://servicehub-api.onrender.com/services", {
        method: "POST",
        body: serviceData,
      });

      if (response.ok) {
        fetchServices();
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          location: "",
          image: null,
        });
        toast.success("Service added successfully!");
      } else {
        toast.error("Failed to add service.");
      }
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Error adding service.");
    }
  };

  const handleDelete = async (serviceId) => {
    toast.info("Deleting service...");
    try {
      const response = await fetch(`https://servicehub-api.onrender.com/services/${serviceId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchServices();
        toast.success("Service deleted successfully!");
      } else {
        toast.error("Failed to delete service.");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Error deleting service.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-10 px-4" style={{ backgroundImage: `url(/images/vintage.jpg)` }}>
      <div className="bg-black bg-opacity-50 min-h-screen py-10 px-4">
        <ToastContainer />
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-6">Manage Your Services</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-4">
            <h3 className="text-xl text-[#6D4C41] font-semibold mb-4">Add a New Service</h3>
            <div>
              <label className="block text-gray-700">Service Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded text-black"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <button type="submit" className="w-full bg-[#6D4C41] text-white py-2 rounded">
              Add Service
            </button>
          </form>

          <div className="mt-6">
            <h3 className="text-xl text-white font-semibold mb-4">Your Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.id} className="bg-white p-4 rounded shadow mb-4 flex justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-gray-500">{service.title}</h4>
                    <p>{service.description}</p>
                    <p className="text-gray-500">${service.price}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;


