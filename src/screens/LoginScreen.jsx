import { Loginbody } from '../components/login/index';
import { Foot } from '../components/layout/footer';
import { Nav } from '../components/layout/nav';
const LoginScreen = () => {
  return (
    <div>
      <Nav />
      <Loginbody />
      <Foot />
    </div>
  );
};

export default LoginScreen;
