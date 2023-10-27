import { Button } from "~/components/ui/button";
import { Loader } from "~/components/ui/loader";

type WalletAuthButtonProps = {
  name: string;
  image: React.ReactNode;
  loading: boolean;
  active: boolean;
  onClick: () => void;
};

export const WalletAuthButton = ({ name, image, loading, active, onClick }: WalletAuthButtonProps) => {
  return (
    <Button onClick={() => onClick()} size="lg" disabled={!active}>
      {loading && <Loader className="absolute top-1/2 -translate-y-1/2 left-1.5" />}
      {!loading && <div className="absolute top-1/2 -translate-y-1/2 left-2">{image}</div>}
      {name.slice(0, 1).toUpperCase() + name.slice(1)}
    </Button>
  );
};