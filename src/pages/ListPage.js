import UsersStatistics from '../components/UsersStatistics/UsersStatistics';
import Container from '../components/Container/Container';
import users from '../db/users.json';

export default function ListPage() {
  return (
    <Container>
      <h2>List Page</h2>
      <UsersStatistics allUsers={users} />
    </Container>
  );
}
