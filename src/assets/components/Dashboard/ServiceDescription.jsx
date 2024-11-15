import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDescription = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', category: '' });

  const fetchServices = async () => {
    toast.info("Loading services...", { autoClose: 2000, hideProgressBar: true });
    try {
      const response = await fetch('https://servicehub-api.onrender.com/services');
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Adding service...", { autoClose: 2000, hideProgressBar: true });
    try {
      const response = await fetch('https://servicehub-api.onrender.com/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchServices();
        setFormData({ name: '', description: '', price: '', category: '' });
        toast.success("Service added successfully!");
      } else {
        toast.error("Failed to add service.");
      }
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Error adding service.");
    }
  };

  const handleEdit = async (serviceId) => {
    toast.info("Updating service...", { autoClose: 2000, hideProgressBar: true });
    try {
      const response = await fetch(`https://servicehub-api.onrender.com/services/${serviceId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchServices();
        toast.success("Service updated successfully!");
      } else {
        toast.error("Failed to update service.");
      }
    } catch (error) {
      console.error("Error editing service:", error);
      toast.error("Error updating service.");
    }
  };

  const handleDelete = async (serviceId) => {
    toast.info("Deleting service...", { autoClose: 2000, hideProgressBar: true });
    try {
      const response = await fetch(`http://localhost:3200/services/${serviceId}`, { method: 'DELETE' });
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
          <h2 className="text-3xl text-[#FAFAFA] font-bold text-center mb-6">Manage Your Services</h2>

          {/* Display Services */}
          <div className="space-y-4 mb-10">
            {services.map((service) => (
              <div key={service.id} className="bg-[#8D6E63] text-white p-4 rounded shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p>{service.description}</p>
                  <p><strong>Price:</strong> ${service.price}</p>
                  <p><strong>Category:</strong> {service.category}</p>
                </div>
                <div className="mt-4 space-x-2">
                  <button onClick={() => handleEdit(service.id)} className="bg-[#6D4C41] text-white py-1 px-3 rounded">Edit</button>
                  <button onClick={() => handleDelete(service.id)} className="bg-[#D32F2F] text-white py-1 px-3 rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Service Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-4">
            <h3 className="text-xl text-[#6D4C41] font-semibold mb-4">Add a New Service</h3>
            <div>
              <label className="block text-gray-700">Service Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full p-2 border rounded"></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input type="text" name="price" value={formData.price} onChange={handleInputChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-[#6D4C41] text-white py-2 rounded">Add Service</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
