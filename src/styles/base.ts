import { css, Theme } from '@emotion/react'

const base = (theme: Theme) => css`
  body {
    background: ${theme.colors.white900};
  }
  body,
  input,
  button {
    letter-spacing: -0.01em;
    color: ${theme.colors.gray900};
    font-family:
      Roboto,
      Pretendard Variable,
      sans-serif;
  }
  th,
  td {
    display: table-cell;
    vertical-align: inherit;
  }
  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src:
      local('Pretendard Variable'),
      url('#assets/fonts/PretendardVariable.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src:
      local('Roboto'),
      url('#assets/fonts/RobotoBold.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src:
      local('Roboto'),
      url('#assets/fonts/RobotoMedium.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src:
      local('Roboto'),
      url('#assets/fonts/RobotoRegular.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src:
      local('Roboto'),
      url('#assets/fonts/RobotoLight.woff2') format('woff2-variations');
  }
`
export default base
