/** @jsxImportSource @emotion/react */
import { TypeWriter } from 'src/components';
import { MainStyles } from 'src/assets/css';

const MainPage = () => {
    const { MainPageWrapper, MainPageTitle } = MainStyles()
    return (
        <div css={MainPageWrapper} data-testid="main" >
            <h1 css={MainPageTitle}> Welcome to <TypeWriter text="Phone Book Apps" delay = {100} /> </h1><br />
        </div>
    )
}

export default MainPage;
