import Link from "next/link";

const CreateAccountOption = () => (
  <>
    <span>OU</span>
    <p>
      Não possui uma conta? <Link href="/register">Cadastre-se </Link>
    </p>
  </>
);

export default CreateAccountOption;
