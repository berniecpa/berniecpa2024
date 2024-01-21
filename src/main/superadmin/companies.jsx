
import React, { useState } from 'react'
import Header from '../../layouts/Header'
import Sidebar from '../../layouts/Sidebar'
import companiesdata from "../../assets/json/companies.js";
import { Table, Tooltip } from 'antd';
import { itemRender, onShowSizeChange } from '../../_components/paginationfunction';
import { Link } from 'react-router-dom';
import DeleteModal from '../../common/modal/DeleteModal.jsx';
import { filterIcon } from '../../_components/Imagepath.jsx';

const Companies = () => {
  const datasource = companiesdata?.companiesdata;

  const [menu, setMenu] = useState(false);

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
      title: "Name",
      dataIndex: "Name",
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
            {record.Name} <span>{record.email}</span>
          </Link>
        </h2>

      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Account URL",
      dataIndex: "accounturl",
      sorter: (a, b) => a.accounturl.length - b.accounturl.length,
    },
    {
      title: "Package",
      dataIndex: "Package",
      sorter: (a, b) => a.Package.length - b.Package.length,
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      sorter: (a, b) => a.createdOn.length - b.createdOn.length,
    },
    {
      title: "createdOn",
      dataIndex: "createdOn",
      sorter: (a, b) => a.createdOn.length - b.createdOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Unsubscribed" && (
            <span className="bg-subscribe">{text}</span>
          )}
          {text === "Awaiting Payment" && (
            <span className="bg-payment">{text}</span>
          )}
          {text === "Active" && (
            <span className="badge  bg-success-light">{text}</span>
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
                  <Link className="dropdown-item" to="/edit-customer">
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
                <li>
                  <Link className="dropdown-item" to="/customer-details">
                    <i className="fa-solid fa-plus me-2" />
                    Add Plan
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/deactive-customers">
                    <i className="fa-solid fa-xmark me-2" />
                    Cancel Plan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/deactive-customers">
                    <i className="far fa-eye me-2" />
                    Subscribtion Log
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
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Companies</h5>
                <div className="page-content">
                  <div className="list-btn">
                    <ul className="filter-list">
                      <li>
                        <a
                          className="btn btn-filters w-auto popup-toggle me-2"

                        >
                          <span className="me-2">

                            <Tooltip title="Filter" placement="bottom">
                              <img src={filterIcon} alt="filter" />
                            </Tooltip>

                          </span>
                          Filter
                        </a>
                      </li>
                      <li>
                        <div
                          className="dropdown dropdown-action me-2"
                        >
                          <a
                            href="#"
                            className="btn-filters"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span>
                              <Tooltip title="Download" placement="bottom">
                                <i className="fe fe-download" />
                              </Tooltip>                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end me-2">
                            <ul className="d-block">
                              <li>
                                <a
                                  className="d-flex align-items-center download-item"
                                  href="javascript:void(0);"
                                  download=""
                                >
                                  <i className="far fa-file-pdf me-2" />
                                  PDF
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-flex align-items-center download-item"
                                  href="javascript:void(0);"
                                  download=""
                                >
                                  <i className="far fa-file-text me-2" />
                                  CVS
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          className="btn-filters"
                        >
                          <span>
                              <Tooltip title="Print" placement="bottom">
                                <i className="fe fe-printer" />
                              </Tooltip>
                          </span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div id="filter_inputs" className="card filter-card">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Search Filter */}
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
          </div>
        </div>

      </div>
      <DeleteModal />

    </div>

  )
}

export default Companies
