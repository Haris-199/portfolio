import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>This route doesn't exist.</p>
      <p>404 Not Found</p>
      <Link to='/'>You can go back to home page clicking this</Link>
    </div>
  );
}
