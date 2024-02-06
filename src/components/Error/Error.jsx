export default function Error({ error }) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid py-7 mt-5">
        <div className="container">
          <h1 className="display-4">Uh Oh! Error {error.status}</h1>
          <hr className="my-4" />
          <p className="lead">It seems as though this {error.data.msg}!</p>
        </div>
      </div>
    </>
  );
}
