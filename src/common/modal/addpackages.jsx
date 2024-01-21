import React from 'react'
import Select from 'react-select'

const AddPackages = () => {
    const options = [
        { value: 'monthly', label: 'monthly' },
        { value: 'yearly', label: 'yearly' },
        { value: 'free-trail', label: 'free-trail' }
    ]
    const discount = [
        { value: 'Fixed', label: 'Fixed' },
        { value: 'Percentage', label: 'Percentage' }
    ]
    
    return (
        <div
            className="modal custom-modal fade p-20"
            id="add_newpackage"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <div className="form-header modal-header-title text-start mb-0">
                            <h4 className="mb-0">Add New</h4>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form action="#">
                        <div className="modal-body">
                            <h6>Package Info</h6>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Package Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Package Name"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Plan Type</label>
                                        <Select
                                            className="select"
                                            options={options}
                                            placeholder="Select an option"
                                        />

                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label className="d-flex justify-content-between">
                                            <span>Price</span>
                                            <span className="text-primary">
                                                <i className="fa-solid fa-circle-exclamation me-2" />
                                                Set 0 for free
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Package Price"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className="input-block mb-3">
                                        <label>Discount Type</label>
                                        <Select
                                            className="select"
                                            options={discount}
                                            placeholder="Select an option"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className="input-block mb-3">
                                        <label>Discount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Discount"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Limitations Invoices</label>
                                        <input type="number" className="form-control" placeholder={0} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Customers</label>
                                        <input type="number" className="form-control" placeholder={0} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Product</label>
                                        <input type="number" className="form-control" placeholder={0} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Supplier</label>
                                        <input type="number" className="form-control" placeholder={0} />
                                    </div>
                                </div>
                            </div>
                            <h6>Package Modules</h6>
                            <div className="input-block mb-3">
                                <ul className="d-flex align-items-center justify-content-left checkboxes">
                                    <li>
                                        <label>
                                            <input type="checkbox" name="checkbox" defaultChecked="" />{" "}
                                            Invoices
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="checkbox" defaultChecked="" />{" "}
                                            Estimates
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="checkbox" defaultChecked="" />{" "}
                                            Recurring Invoices
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0">Access Trial</h6>
                                <div className="status-toggle">
                                    <input
                                        id="access-trail"
                                        className="check"
                                        type="checkbox"
                                        defaultChecked=""
                                    />
                                    <label htmlFor="access-trail" className="checktoggle checkbox-bg">
                                        checkbox
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <div className="input-block mb-3">
                                        <label>Trial Days</label>
                                        <input type="number" className="form-control" placeholder={0} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0">Is Recommended</h6>
                                <div className="status-toggle">
                                    <input id="recommended" className="check" type="checkbox" />
                                    <label htmlFor="recommended" className="checktoggle checkbox-bg">
                                        checkbox
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <div className="input-block mb-3">
                                        <label>Description</label>
                                        <textarea
                                            rows={3}
                                            cols={5}
                                            className="form-control"
                                            placeholder="Enter Description"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0">Status</h6>
                                <div className="status-toggle">
                                    <input id="status" className="check" type="checkbox" />
                                    <label htmlFor="status" className="checktoggle checkbox-bg">
                                        checkbox
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn btn-back cancel-btn me-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                data-bs-dismiss="modal"
                                className="btn btn-primary paid-continue-btn"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddPackages
