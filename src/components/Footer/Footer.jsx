export default function Footer() {
  return (
    <footer className="bg-dark py-4 mt-5">
      <div className="container text-light text-center">
        <p className="display-6 mb-2">NC News</p>
        <small className="text-white-50">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
