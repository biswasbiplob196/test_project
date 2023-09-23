import React, { useState } from "react";

const Problem1 = () => {
  const [inputarr, setinputarr] = useState([]);
  const [object, setObject] = useState({
    name: "",
    status: "",
  });

  const inputhandler = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value });
  };
  let { name, status } = object;
  const submitHandleClick = (e) => {
    e.preventDefault();
    setinputarr([...inputarr, { name, status }]);
    console.log(inputarr);
  };

  const handleClick = (eData) => {
    if (eData === "all") {
      return showall();
    } else if (eData === "completed") {
      return completedALL();
    } else {
      return activeall();
    }
  };
  function showall() {
    return inputarr;
  }
  function completedALL() {
    if (inputarr.status === "completed") {
      return inputarr;
    }
  }
  function activeall() {
    return inputarr;
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={submitHandleClick}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                value={object.name}
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={inputhandler}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                value={object.status}
                className="form-control"
                placeholder="Status"
                onChange={inputhandler}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className="nav-link active"
                type="button"
                onClick={() => handleClick("all")}
              >
                ALL
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link  "active" && "active"`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link"completed" && "active"`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <table>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                {inputarr.map((inp, ind) => {
                  return (
                    <tr>
                      <td>{inp.name}</td>
                      <td>{inp.status}</td>
                    </tr>
                  );
                })}
              </table>
              <tr></tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
