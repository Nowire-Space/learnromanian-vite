import Title from '../UI/Title/Title';
import classes from './About.module.css';

const About = () => {
    return(
        <div className={classes.About}>
            <Title>Despre noi</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus a dui non quam ornare aliquet. Sed dictum enim a consectetur feugiat.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Etiam eleifend sodales velit, vel finibus velit scelerisque eget.
            Vivamus neque magna, vulputate vel efficitur eget, ullamcorper a nibh.
            Etiam semper erat tristique dignissim feugiat.
            Aenean id ipsum eu turpis commodo tempor eu aliquam massa.
            Morbi et sem pharetra, faucibus velit suscipit, vehicula sapien.
            Nam sit amet facilisis mi. Suspendisse sit amet leo eget turpis molestie vehicula.
            Suspendisse orci ipsum, mattis quis pellentesque ac, vestibulum nec justo.
            Sed tempor nec eros.
        </div>
    );
};

export default About;