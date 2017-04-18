import React from 'react';
import styled from 'styled-components';
import LocaleToggle from 'containers/LocaleToggle';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px dotted #666;
`;
function Footer() {
  return (
    <FooterWrapper>
      <section>
        <p>Figure out which react component works best for you.</p>
      </section>
      <section>
        <p>Created by Steve Krzysiak</p>
      </section>
      <section>
        <LocaleToggle />
      </section>
    </FooterWrapper>
  );
}

export default Footer;
