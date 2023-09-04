import React from "react";
import styled from "styled-components";
import {
  COLUMN,
  COLUMN_ALIGN_END__JUSTIFY_CENTER,
  COLUMN_ALIGN_START__JUSTIFY_CENTER,
  COLUMN_CENTER,
  COLUMN_JUSTIFY_START__ALIGN_CENTER,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_START__SPACE_B,
  ROW_CENTER,
} from "styles/globalStyles";

const FooterWrapper = styled.footer`
  background-color: #00439c;
  color: #fff;
  padding: 30px 0;
  padding-bottom: 20px;
  border-top: 1px solid #3c69b0;
  text-align: center;
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 0px 32px;
  flex-direction: column;
  align-items: center;
`;
const FooterRow = styled.div`
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 60px;
  margin-top: -5px;
`;
export const LogoText = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-right: 10px;
`;
export const LogoWrapper = styled.div`
  ${ROW_CENTER}
  align-self:flex-end;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3c69b0;
  margin: 20px 0;
`;
export const FooterLink = styled.a`
  color: #fff;
  font-size: 14px;
  margin: 0 10px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Links = styled.div`
  ${ROW_ALIGN_START__SPACE_B}
  width:100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const Link = styled.div`
  ${COLUMN_ALIGN_END__JUSTIFY_CENTER}
`;
const FooterLinkTitle = styled.p`
  font-size: 18px;
  margin: 0 10px;
  font-weight: 700;
`;
const SoicalMediaIcons = styled.div`
  ${ROW_ALIGN_START__SPACE_B}
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const Description = styled.div`
  max-width: 800px;
  text-align: right;
  font-size: 13px;
  align-self: flex-end;
  margin: 20px;
`;

const SoicalMediaIcon = styled.a`
  ${COLUMN_CENTER}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  scale: 1;
  margin: 0 10px;
  &:hover {
    scale: 1.1;
    opacity: 0.8;
  }
`;
const SoicalMediaIconImg = styled.img`
  width: 30px;
  height: 30px;
`;
const SocialMedias = [
  {
    icon: "https://svgshare.com/i/xFK.svg",
    link: "#",
  },
  {
    icon: "https://svgshare.com/i/xEJ.svg",
    link: "#",
  },
  {
    icon: "https://svgshare.com/i/xDF.svg",
    link: "#",
  },
];
const FooterLinks = [
  {
    title: "پشتیبانی",
    links: [
      {
        title: "سوالات متداول",
        link: "#",
      },
      {
        title: "تماس با ما",
        link: "#",
      },
      {
        title: "گزارش باگ",
        link: "#",
      },
      {
        title: "درباره ما",
        link: "#",
      },
    ],
  },
  {
    title: "راهنمای خرید",
    links: [
      {
        title: "نحوه ثبت سفارش",
        link: "#",
      },
      {
        title: "شیوه های پرداخت",
        link: "#",
      },
      {
        title: "شرایط استفاده",
        link: "#",
      },
    ],
  },
  {
    title: "صفحه اصلی",
    links: [
      {
        title: "خرید",
        link: "#",
      },
      {
        title: "اخبار و حواشی",
        link: "#",
      },
      {
        title: "جدید ترین ها",
        link: "#",
      },
    ],
  },
];
export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoWrapper>
          <LogoText>پلی استیشن</LogoText>
          <Logo src="https://svgshare.com/i/xFA.svg" alt="PlayStation Logo" />
        </LogoWrapper>
        <Divider></Divider>
        <Links>
          <SoicalMediaIcons>
            {SocialMedias.map((item, index) => (
              <SoicalMediaIcon key={index} href={item.link}>
                <SoicalMediaIconImg src={item.icon} />
              </SoicalMediaIcon>
            ))}
          </SoicalMediaIcons>
          {FooterLinks.map((item, index) => (
            <Link key={index}>
              <FooterLinkTitle>{item.title}</FooterLinkTitle>
              {item.links.map((link, index) => (
                <FooterLink key={index} href={link.link}>
                  {link.title}
                </FooterLink>
              ))}
            </Link>
          ))}
        </Links>
        <Divider></Divider>
        <FooterRow>
          <FooterLink href="#">
            ©{new Date().getFullYear()} تمامی حقوق محفوظ است
          </FooterLink>
          <FooterLink href="#">حریم خصوصی</FooterLink>
        </FooterRow>
      </FooterContainer>
    </FooterWrapper>
  );
};
