import { useGlobalContext } from "../Context/Context";
import { Footers, Container, Content, Copyright } from "./FooterStyles";

const Footer = () => {
  const { footerInfo } = useGlobalContext();

  return (
    <Footers>
      <Container>
        <Content>
          {footerInfo.titles.map((title, index) => {
            return (
              <div key={index}>
                <h4>{title.title}</h4>
              </div>
            );
          })}
          {footerInfo.links.map((list, index) => {
            return (
              <ul key={index}>
                {list.map((link, index) => {
                  return <li key={index}>{link.link}</li>;
                })}
              </ul>
            );
          })}
        </Content>
        <Copyright>
          <p>Copyright© All Reserved Rights JSSTACK DEVELOPERS 2023</p>
        </Copyright>
      </Container>
    </Footers>
  );
};

export default Footer;
