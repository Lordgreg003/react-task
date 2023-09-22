import { Loginbody } from '../components/login/index';
import { Foot } from '../components/layout';
import { Nav } from '../components/layout';
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
