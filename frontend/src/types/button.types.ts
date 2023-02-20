export interface BtnProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}
