import { Link } from "react-router-dom";
import {
  Package,
  Users,
  UserPlus,
  ClipboardList
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Organization Dashboard</h1>
        
        <div className="cards-container">
          {/* Vendors Card */}
          <div className="dashboard-card">
            <div className="card-content">
              <div className="card-header">
                <h2 className="card-title">Vendors</h2>
                <Package className="card-icon" />
              </div>
              <div className="card-actions">
                <Link to="/create-student" className="dashboard-link">
                  <UserPlus className="link-icon" />
                  <span>Add New Vendor</span>
                </Link>
                <Link to="/view-students" className="dashboard-link">
                  <ClipboardList className="link-icon" />
                  <span>View All Vendors</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Suppliers Card */}
          <div className="dashboard-card">
            <div className="card-content">
              <div className="card-header">
                <h2 className="card-title">Suppliers</h2>
                <Users className="card-icon" />
              </div>
              <div className="card-actions">
                <Link to="/create-teacher" className="dashboard-link">
                  <UserPlus className="link-icon" />
                  <span>Add New Supplier</span>
                </Link>
                <Link to="/view-teachers" className="dashboard-link">
                  <ClipboardList className="link-icon" />
                  <span>View All Suppliers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-title">Total Vendors</h3>
              <p className="stat-value">150</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Total Suppliers</h3>
              <p className="stat-value">45</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Departments</h3>
              <div className="stat-details">
               <p>4</p>
              </div>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Active Users</h3>
              <p className="stat-value">195</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
