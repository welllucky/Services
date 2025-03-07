import styled from "styled-components";

// Styled Components
const MaintenanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ContentCard = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin: 0 16px;
  text-align: center;
`;

const LogoWrapper = styled.div`
  display: inline-block;
  background-color: #e6f0ff;
  padding: 12px;
  border-radius: 50%;
  margin-bottom: 24px;
`;

const Logo = styled.svg`
  width: 64px;
  height: 64px;
  color: #3182ce;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: #4a5568;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const CountdownWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #ebf5ff;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const TimeValue = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #3182ce;
`;

const TimeSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #3182ce;
`;

const TimeLabel = styled.span`
  font-size: 12px;
  color: #718096;
`;

const NotificationForm = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 12px;
`;

const InputGroup = styled.div`
  display: flex;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2c5282;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.5);
  }
`;

const SocialSection = styled.div`
  margin-bottom: 24px;
`;

const SocialText = styled.p`
  font-size: 14px;
  color: #718096;
  margin-bottom: 12px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: #a0aec0;
  transition: color 0.2s;

  &:hover {
    color: #3182ce;
  }
`;

const SocialIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

const ContactInfo = styled.p`
  font-size: 14px;
  color: #718096;
`;

const EmailLink = styled.a`
  color: #3182ce;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  ContactInfo,
  ContentCard,
  CountdownContainer,
  CountdownWrapper,
  Description,
  EmailInput,
  EmailLink,
  FormTitle,
  InputGroup,
  Logo,
  LogoWrapper,
  MaintenanceContainer,
  NotificationForm,
  SocialIcon,
  SocialIcons,
  SocialLink,
  SocialSection,
  SocialText,
  SubmitButton,
  TimeBox,
  TimeLabel,
  TimeSeparator,
  TimeUnit,
  TimeValue,
  Title,
};
