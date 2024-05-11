const getGreetingMessage = () => {
  const hour = new Date().getHours();
  switch (true) {
    case hour > 5 && hour < 12:
      return "Bom dia";
    case hour >= 12 && hour < 18:
      return "Boa tarde";
    case hour >= 18 && hour < 24:
      return "Boa noite";
    default:
      return "Boa madrugada";
  }
};

export default getGreetingMessage;
