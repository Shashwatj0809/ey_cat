import React, { useEffect, useState } from 'react';

const AllData = () => {
  const [vendors, setVendors] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vendorResponse = await fetch('/api/students'); // Assuming this endpoint returns vendors
        const supplierResponse = await fetch('/api/teachers'); // Assuming this endpoint returns suppliers

        if (!vendorResponse.ok || !supplierResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const vendorData = await vendorResponse.json();
        const supplierData = await supplierResponse.json();

        setVendors(vendorData.students || []);
        setSuppliers(supplierData.teachers || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const categorizedData = {
    Pipes: vendors.filter(v => v.department === 'ECE'),
    Steel: vendors.filter(v => v.department === 'CSE'),
    Motors: vendors.filter(v => v.department === 'MECH'),
    Logistics: vendors.filter(v => v.department === 'GEO'),
  };

  return (
    <div className="all-data-container">
      <h1>All Data</h1>
      <h2>Vendors</h2>
      {Object.entries(categorizedData).map(([department, data]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {data.map(vendor => (
              <li key={vendor._id}>{vendor.name} - {vendor.email}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Suppliers</h2>
      <ul>
        {suppliers.map(supplier => (
          <li key={supplier._id}>{supplier.name} - {supplier.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllData; 