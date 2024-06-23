'use client';

import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 297px;
  background: linear-gradient(180deg, #000000 0%, #0E1330 65.81%, #3C4C86 100%);
`;

export default function Footer() {
  return (
    <FooterDiv/>
  );
}
