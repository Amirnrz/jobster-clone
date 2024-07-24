import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae blanditiis placeat facilis ipsa non et nihil, illum officia nobis quibusdam, ea sunt, iste quae cumque commodi! Accusamus quia molestiae fuga vero harum at consectetur eveniet ab unde aperiam nisi, quaerat nihil quas cupiditate aliquam inventore incidunt modi tempora! Saepe!
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;