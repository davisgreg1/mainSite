import KofiButton from "kofi-button";
interface KofiProps {
  color: string;
  title?: string;
}

export const StyledKofiButton = (props: KofiProps) => {
  const { color, title } = props;
  
  return (
    <div className="kofi-btn">
      <KofiButton color={color} title={title || "Buy me a coffee"} kofiID="davisgreg1" />
    </div>
  );
};
