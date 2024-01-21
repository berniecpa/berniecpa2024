import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import subscribtiondata from "../../assets/jsons/subscribtiondata";
import { Table, Tooltip } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../_components/paginationfunction";
import { Link } from "react-router-dom";
import { filterIcon } from "../../_components/Imagepath";
import DeleteModal from "../../common/modal/DeleteModal";

const Subscription = () => {
  const [menu, setMenu] = useState(false);

  const datasource = subscribtiondata?.subscribtiondata;

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/profile" className="avatar avatar-md me-2">
            <img
              className="avatar-img rounded-circle"
              src={record.img}
              alt="User Image"
            />
          </Link>
          <Link to="/profile">
            {record.Customer}
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },

    {
      title: "Package",
      dataIndex: "Package",
      sorter: (a, b) => a.Package.length - b.Package.length,
    },
    {
      title: "Cycle",
      dataIndex: "Cycle",
      sorter: (a, b) => a.Cycle.length - b.Cycle.length,
    },
    {
      title: "Payment",
      dataIndex: "Payment",
      sorter: (a, b) => a.Payment.length - b.Payment.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "CreatedOn",
      dataIndex: "CreatedOn",
      sorter: (a, b) => a.CreatedOn.length - b.CreatedOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Inactive" && <span className="bg-inactive">{text}</span>}
          {text === "Active" && (
            <span className="badge bg-success-light">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="table-invoice d-flex align-items-center">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className=" btn-action-icon "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <ul>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="far fa-trash-alt me-2" />
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];
  return (
    <div>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Subscription</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle me-2"

                      >
                        <span className="me-2">
                          <Tooltip title="Filter">
                            
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                         
                        </span>
                        Filter
                      </Link>
                    </li>
                    <li>
                      <div
                        className="dropdown dropdown-action me-2"
                      >
                        <Link
                          to="#"
                          className="btn-filters"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <Tooltip title="Download" placement="bottom">
                              <i className="fe fe-download" />
                            </Tooltip>
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="d-block">
                            <li>
                              <Link
                                className="d-flex align-items-center download-item"
                                to="#"
                                download=""
                              >
                                <i className="far fa-file-pdf me-2" />
                                PDF
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="d-flex align-items-center download-item"
                                to="#"
                                download=""
                              >
                                <i className="far fa-file-text me-2" />
                                CVS
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        className="btn-filters"
                        to="#"

                      >
                        <span>
                             <Tooltip title="Print" placement="bottom">
                            <i className="fe fe-printer" />
                          </Tooltip>


                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
      <DeleteModal />
    </div>
  );
};

export default Subscription;
