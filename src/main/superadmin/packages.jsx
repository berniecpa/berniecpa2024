import React, { useState } from 'react'
import Header from '../../layouts/Header'
import Sidebar from '../../layouts/Sidebar'
import { Link } from 'react-router-dom'
import { basicPlan, enterPrice, freeTrail } from '../../_components/Imagepath'
import AddPackages from '../../common/modal/addpackages'
import DeleteModal from '../../common/modal/DeleteModal'
import EditPackages from '../../common/modal/editpackages'

const Packages = () => {
    const [menu, setMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMenu(!menu);
    };

    

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
                                <h5>Packages</h5>
                                <div className="list-btn">
                                    <ul className="filter-list">
                                        <li>
                                            <Link
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#add_newpackage"
                                            >
                                                <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                                                Add New
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="packages card mb-0">
                                    <div className="package-header d-flex justify-content-between">
                                        <div className="d-flex">
                                            <span className="icon-frame d-flex align-items-center justify-content-center">
                                                <img src={basicPlan} alt="img" />
                                            </span>
                                            <div className="">
                                                <h6>Monthly</h6>
                                                <h4>Basic</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <Link
                                                className="btn-action-icon me-2"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#edit_package"
                                            >
                                                <i className="fe fe-edit" />
                                            </Link>
                                            <Link
                                                className="btn-action-icon"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                            >
                                                <i className="fe fe-trash-2" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
                                        elit.{" "}
                                    </p>
                                    <h2>$49.99</h2>
                                    <h6>What’s included</h6>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            50 Customers
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            10 Suppliers
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            100 Products
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            100 Invoice
                                        </li>
                                    </ul>
                                    <div className="d-grid active-btn">
                                        <Link
                                            to="#"
                                            className="btn btn-primary btn-block"
                                        >
                                            Active
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="packages card package-selected mb-0">
                                    <div className="package-header d-flex justify-content-between">
                                        <div className="d-flex">
                                            <span className="icon-frame d-flex align-items-center justify-content-center">
                                                <img src={enterPrice} alt="img" />
                                            </span>
                                            <div className="">
                                                <h6>Monthly</h6>
                                                <h4>Enterprise</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <Link
                                                className="btn-action-icon me-2"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#edit_package"
                                            >
                                                <i className="fe fe-edit" />
                                            </Link>
                                            <Link
                                                className="btn-action-icon"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                            >
                                                <i className="fe fe-trash-2" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
                                        elit.{" "}
                                    </p>
                                    <h2>$99.99</h2>
                                    <h6>What’s included</h6>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            100 Customers
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            50 Suppliers
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            200 Products
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            200 Invoice
                                        </li>
                                    </ul>
                                    <div className="d-grid active-btn">
                                        <Link
                                            to="#"
                                            className="btn btn-primary btn-block"
                                        >
                                            Active
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="packages card mb-0">
                                    <div className="package-header d-flex justify-content-between">
                                        <div className="d-flex">
                                            <span className="icon-frame d-flex align-items-center justify-content-center">
                                                <img src={freeTrail} alt="img" />
                                            </span>
                                            <div className="">
                                                <h6>Monthly</h6>
                                                <h4>Free Trail</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <Link
                                                className="btn-action-icon me-2"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#edit_package"
                                            >
                                                <i className="fe fe-edit" />
                                            </Link>
                                            <Link
                                                className="btn-action-icon"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                            >
                                                <i className="fe fe-trash-2" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
                                        elit.{" "}
                                    </p>
                                    <h2>$0.00</h2>
                                    <h6>What’s included</h6>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            10 Customers
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />5 Suppliers
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            50 Products
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check" />
                                            <del>Invoice</del>
                                        </li>
                                    </ul>
                                    <div className="d-grid active-btn">
                                        <Link
                                            to="#"
                                            className="btn btn-primary btn-block"
                                        >
                                            Active
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Wrapper */}
            </div>
            <AddPackages />
            <EditPackages />
            <DeleteModal />
        </div>
    )
}

export default Packages
