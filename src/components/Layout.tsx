import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';
import { theme } from '../styles/theme';

const Container = styled.div`
  min-height: 100vh;
  background: #F9FAFB;
  color: #111827;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  padding: 2rem;
  flex: 1;
`;

const Footer = styled.footer`
  background: #1F2937;
  color: #D1D5DB;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.875rem;
`;

export function Layout() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <FooterContent>
        Este site não tem vínculo com a Caixa Econômica Federal.<br/><br/>Desenvolvido por Odair Gomes | © {new Date().getFullYear()} Mega Loterias.
        </FooterContent>
      </Footer>
    </Container>
  );
} 