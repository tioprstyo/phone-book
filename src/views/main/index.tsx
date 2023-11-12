/** @jsxImportSource @emotion/react */
import { TypeWriter } from 'src/components';
import { MainStyles } from 'src/assets/css';

const MainPage = () => {
    const { MainPageWrapper, MainPageTitle } = MainStyles()
    return (
        <div css={MainPageWrapper } >
            <h1 css={MainPageTitle }> <TypeWriter text="Welcome to My Contact" delay = {50} /> </h1><br />
        </div>
    )
}

export default MainPage;
