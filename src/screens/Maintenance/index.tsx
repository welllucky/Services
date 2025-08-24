"use client";

import { useEffect, useState } from "react";

import {
  ContactInfo,
  ContentCard,
  CountdownContainer,
  CountdownWrapper,
  Description,
  EmailLink,
  Logo,
  LogoWrapper,
  MaintenanceContainer,
  TimeBox,
  TimeLabel,
  TimeSeparator,
  TimeUnit,
  TimeValue,
  Title,
} from "./style";

const MaintenancePage = () => {
  const showTimer = true;
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  // Efeito para o contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formatar o tempo com zeros à esquerda
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <MaintenanceContainer>
      <ContentCard>
        {/* Logo */}
        <LogoWrapper>
          <Logo
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </Logo>
        </LogoWrapper>

        <Title>Site em manutenção</Title>

        <Description>
          Estamos trabalhando para melhorar nosso site e trazer uma experiência
          ainda melhor para você. Voltaremos em breve!
        </Description>

        {showTimer && (
          <CountdownContainer>
            <CountdownWrapper>
              <TimeUnit>
                <TimeBox>
                  <TimeValue>{formatTime(timeLeft.hours)}</TimeValue>
                </TimeBox>
                <TimeLabel>Horas</TimeLabel>
              </TimeUnit>

              <TimeSeparator>:</TimeSeparator>

              <TimeUnit>
                <TimeBox>
                  <TimeValue>{formatTime(timeLeft.minutes)}</TimeValue>
                </TimeBox>
                <TimeLabel>Minutos</TimeLabel>
              </TimeUnit>

              <TimeSeparator>:</TimeSeparator>

              <TimeUnit>
                <TimeBox>
                  <TimeValue>{formatTime(timeLeft.seconds)}</TimeValue>
                </TimeBox>
                <TimeLabel>Segundos</TimeLabel>
              </TimeUnit>
            </CountdownWrapper>
          </CountdownContainer>
        )}

        <ContactInfo>
          Se precisar de assistência, entre em contato:{" "}
          <EmailLink href="mailto:well@l3.com">well@l3.com</EmailLink>
        </ContactInfo>
      </ContentCard>
    </MaintenanceContainer>
  );
};

export default MaintenancePage;
