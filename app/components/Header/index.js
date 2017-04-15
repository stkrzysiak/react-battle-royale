/**
*
* Header
*
*/

import React from 'react';

import styled from 'styled-components';

const LogoWrapper = styled.section`
  font-size: 1.2em;
  text-align: center;
`;
function Header() {
  return (
    <div className={'header'}>
      <article>
        <div>
          <LogoWrapper>
            React Battle Royale
          </LogoWrapper>
        </div>
      </article>
    </div>
  );
}

export default Header;
