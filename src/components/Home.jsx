export default function Home() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Welcome to NC News!</h1>
        <p className="lead">
          This is your number one source for information covering all topics
          from football to coding!
        </p>
        <hr className="my-4" />
        <p>
          Fancy writing your own article? Have a go by clicking the button below
          and let your imagination run wild!
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Write Article
        </a>
      </div>
    </>
  );
}
