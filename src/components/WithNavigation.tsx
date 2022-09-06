import { Navigation } from "./Navigation";

interface WithNavProps {
  children: React.ReactNode;
}

export default function WithNavigation({ children }: WithNavProps) {
  return (
    <>
      <Navigation></Navigation>
      {children}
    </>
  );
}
