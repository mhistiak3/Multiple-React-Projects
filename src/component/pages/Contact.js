const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <form action="" className="row">
          <div className="col-10 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your name"
            />
          </div>
          <div className="col-10 my-2">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="col-10 my-2">
           <textarea className="form-control" cols="30" rows="10"></textarea>
          </div>
          <div className="col-10 my-2">
           <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
