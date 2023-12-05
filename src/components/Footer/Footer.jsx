import { footerAPI } from "../../data/data";
import { Footers, Container, Content, Copyright } from "./FooterStyles";

const Footer = () => {
  return (
    <Footers>
      <Container>
        <Content>
          {footerAPI.titles.map((title, index) => {
            return (
              <div key={index}>
                <h4>{title.title}</h4>
              </div>
            );
          })}
          {footerAPI.links.map((list, index) => {
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
