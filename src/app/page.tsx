import Page from "./components/template/Page";
import { auth } from "@/src/lib/auth/authConfig";
import { notFound } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) return notFound();
  return (
    <Page>Olá {session.user?.name} !</Page>
  );
}
