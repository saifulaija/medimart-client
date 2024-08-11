import Navbar from "@/components/shared/Navbar";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto flex w-full mt-16 grow ">
        {children}
      </div>
    </div>
  );
}
