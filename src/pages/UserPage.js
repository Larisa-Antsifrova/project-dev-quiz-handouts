import Container from '../components/Container/Container';
import { useLocation } from 'react-router-dom';

export default function UserPage() {
  let location = useLocation();
  console.log(location);
  return (
    <Container>
      <h2>User Page</h2>
    </Container>
  );
}

// https://www.npmjs.com/package/react-chartjs-2
