import React, { useState } from 'react'
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { filterIcon } from '../../_components/Imagepath';
import purchasetransaction from '../../assets/jsons/purchasetransaction';
import { Table, Tooltip } from 'antd';
import { itemRender, onShowSizeChange } from '../../_components/paginationfunction';
import { Link } from 'react-router-dom'

const PurchaseTransaction = () => {

  const [menu, setMenu] = useState(false);

  const datasource = purchasetransaction?.purchasetransaction
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
      title: "Bill#",
      dataIndex: "Bill",
      sorter: (a, b) => a.Bill.length - b.Bill.length,
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },
    {
      title: "CreatedOn",
      dataIndex: "CreatedOn",
      sorter: (a, b) => a.CreatedOn.length - b.CreatedOn.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      sorter: (a, b) => a.Status.length - b.Status.length,
    },

    {
      title: "Mode",
      dataIndex: "Mode",
      sorter: (a, b) => a.Mode.length - b.Mode.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Paid" && (
            <span className="badge bg-success-light">{text}</span>
          )}
          {text === "Pending" && (
            <span className="badge bg-pending-light">{text}</span>
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
                    <i className="fa-solid fa-eye me-2" />
                    View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="fa-solid fa-xmark me-2" />
                    Cancel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="fa-solid fa-edit me-2" />
                    Subscribtion
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
              <div className="content-page-header ">
                <h5>Purchase Transaction</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        className="btn btn-filters w-auto popup-toggle me-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-original-title="filter"
                      >
                        <span className="me-2">
                           <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                        </span>
                        Filter
                      </Link>
                    </li>
                    <li className="">
                      <div
                        className="dropdown dropdown-action me-2s"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-original-title="download"
                      >
                        <Link
                          to="#"
                          className="btn-filters"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="fe fe-download" />
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
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
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-original-title="print"
                      >
                        <span>
                           <Tooltip title="Print" placement="bottom">
                            <i className="fe fe-printer" />
                          </Tooltip>

                        </span>{" "}
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
                <div className=" card-table">
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
    </div>
  )
}

export default PurchaseTransaction
