import Button from '../components/Button.js';
import { GoBell } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <div>
                <Button primary rounded onClick={handleClick}>
                    <GoBell />
                    Buy now
                </Button>
            </div>
            <div>
                <Button danger outline onClick={handleClick}>
                    Click Me!!
                </Button>
            </div>
            <div>
                <Button secondary onClick={handleClick}>
                    Copy
                </Button>
            </div>
            <div>
                <Button warning rounded onClick={handleClick}>
                    NO
                </Button>
            </div>
            <div>
                <Button primary outline onClick={handleClick}>
                    Ok
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
